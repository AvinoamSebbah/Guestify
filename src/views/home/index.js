import React, { useEffect, useState } from "react"; 
import { useSpring, animated } from "react-spring";
import {
  HomeContainer,
  ButtonContainer,
  FormContainer,
  InputField,
  SubmitButton,
  InvitationImage,
  PersonCountField,
  PersonCountLabel,
  PersonCountButton,
  InputFieldCounter,
  Title,
  SecondTitle,
  Text,
  SwitchContainer,
  ConfirmationTextContainer,
  InputFieldFr,
} from "./index.styled";
import { styled } from "@mui/material/styles";
import { useSearchParams } from 'react-router-dom';
import { Button as MuiButton, Switch } from "@mui/material";
import invitationImg from "../../assets/images/card-invitation.jpg";
import invitationImgHe from "../../assets/images/card-invitation-he.jpg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { firestore as db } from "../../firebase-config";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomButton = styled(MuiButton)({
  borderRadius: "25px",
  background: "linear-gradient(45deg, #C6A97E, #1d1511)",
  border: "2px solid #C6A97E",
  color: "white",
  height: "8vh",
  padding: "0 2vw",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
  zIndex: 1,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "&:hover": {
    background: "linear-gradient(45deg, #B7906F, #C6A97E)",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
  },
  // Nouvelles propriétés CSS pour s'adapter à la taille de l'écran

  minWidth: "30vw",
  maxWidth: "40vw",
  fontSize: "1.7vw",
  "@media (max-width: 700px)": {
    // petit
    minWidth: "70vw",
    maxWidth: "80vw",
    fontSize: "4vw",
  },
});

const HomePage = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const [confirmationState, setConfirmationState] = useState(null);
  const [canEdit, setCanEdit] = useState(true);
  const [isChecked, setIsChecked] = React.useState(true);
  const [searchParams] = useSearchParams();

  const handleChange = () => {
    if (canEdit) {
      setIsChecked(!isChecked);
    }
  };

 const [height, setHeight] = useState(window.visualViewport.height);
const theme = createTheme({
  direction: "ltr",
});
 useEffect(() => {
   if (!showForm) {
     const handleResize = () => setHeight(window.visualViewport.height);
     const handleScroll = () => setHeight(window.visualViewport.height);
     window.visualViewport.addEventListener("resize", handleResize);
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.visualViewport.removeEventListener("resize", handleResize);
       window.removeEventListener("scroll", handleScroll);
     };
   } else {
     const handleResize = () => setHeight(window.innerHeight);
     const handleScroll = () => setHeight(window.innerHeight);
     const handleKeyboardWillShow = (event) => {
       const keyboardHeight = event.endCoordinates.height;
       setHeight(window.innerHeight - keyboardHeight);
     };
     const handleKeyboardWillHide = () => {
       setHeight(window.innerHeight);
     };
     window.addEventListener("resize", handleResize);
     window.addEventListener("scroll", handleScroll);
     window.addEventListener("keyboardWillShow", handleKeyboardWillShow);
     window.addEventListener("keyboardWillHide", handleKeyboardWillHide);
     return () => {
       window.removeEventListener("resize", handleResize);
       window.removeEventListener("scroll", handleScroll);
       window.removeEventListener("keyboardWillShow", handleKeyboardWillShow);
       window.removeEventListener("keyboardWillHide", handleKeyboardWillHide);
     };
   }
 }, [showForm]);
 

  const handlePersonCountIncrement = (e) => {
    e.preventDefault();
    if (personCount < 2 && canEdit) {
      setPersonCount(personCount + 1);
    }
  };

  const handlePersonCountDecrement = (e) => {
    e.preventDefault();

    if (personCount > 1 && canEdit) {
      setPersonCount(personCount - 1);
    }
  };
  const slideDownProps = useSpring({
    marginBottom: showForm ? "-0vh" : "8vh",
    opacity: showForm ? 0 : 1,
  });

  const slideUpProps = useSpring({
    marginTop: showForm ? "0%" : "-50vh",
    opacity: showForm ? 1 : 0,
  });

  const invitationImageProps = useSpring({
    opacity: showForm ? 0 : 1,
    transform: showForm ? "translateY(-50%)" : "translateY(0%)",
  });

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit =  (e) => {
    setCanEdit(false);
    e.preventDefault();
    let fullName = e.target.name.value;
    let confirm = isChecked;
    let numGuests = e.target.personCount.value;
    db.collection("invitations")
      .add({
        fullName,
        confirm,
        numGuests,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("Document successfully written!");
        setConfirmationState(true);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        setConfirmationState(false);
      });
    // TODO: submit the form data
  };

  return (
    <HomeContainer
      style={{
        height: `${height}px`,
      }}
    >
      <InvitationImage
        src={
          searchParams.get('lang') === "he"
            ? invitationImgHe
            : invitationImg
        }
        alt="Invitation"
        style={invitationImageProps}
      />
      <ButtonContainer>
        <animated.div style={slideDownProps}>
          <CustomButton variant="contained" onClick={handleButtonClick}>
            {t("confirm_your_attendance")}
          </CustomButton>
        </animated.div>
      </ButtonContainer>
      <FormContainer style={slideUpProps} onSubmit={handleSubmit}>
        {confirmationState == null && (
          <>
            <Title> {t("confirm_your_attendance_on_date")}</Title>
            <SecondTitle>{t("event_place")}</SecondTitle>
            <ThemeProvider theme={theme}>
              {window.location.pathname.endsWith("/he") ? (
                <InputField
                  disabled={!canEdit}
                  required
                  id="name"
                  label={t("full_name")}
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "4px",
                    },
                  }}
                />
              ) : (
                <InputFieldFr
                  disabled={!canEdit}
                  required
                  id="name"
                  label={t("full_name")}
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "4px",
                    },
                  }}
                />
              )}
            </ThemeProvider>
            <SwitchContainer>
              <Switch
                checked={isChecked}
                onChange={handleChange}
                size="medium" //
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#c6a97e",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                    backgroundColor: "#d5bc98",
                  },
                }}
              />
              <Text selected={isChecked}>
                {isChecked
                  ? t("will_be_present")
                  : t("will_not_be_present")}
              </Text>
            </SwitchContainer>
            <PersonCountField>
              <PersonCountLabel>{t("number_of_people")}</PersonCountLabel>
              <PersonCountButton
                disabled={!canEdit}
                onClick={handlePersonCountDecrement}
              >
                -
              </PersonCountButton>
              <InputFieldCounter
                disabled={!canEdit}
                id="personCount"
                name="personCount"
                value={personCount}
                inputProps={{ min: "1", max: "2" }}
                type="number"
                variant="outlined"
              />
              <PersonCountButton
                disabled={!canEdit}
                onClick={handlePersonCountIncrement}
              >
                +
              </PersonCountButton>
            </PersonCountField>
            <SubmitButton disabled={!canEdit} type="submit">
              {canEdit ? t("submit") : <CircularProgress />}
            </SubmitButton>
          </>
        )}
        {confirmationState === true && (
          <ConfirmationTextContainer>
            <Title>{t("we_will_see_you_may_16")}</Title>
            <SecondTitle>{t("looking_forward_to_it")}</SecondTitle>
          </ConfirmationTextContainer>
        )}
        {confirmationState === false && (
          <ConfirmationTextContainer>
            <Title>{t("something_went_wrong")}</Title>
          </ConfirmationTextContainer>
        )}
      </FormContainer>
    </HomeContainer>
  );
};

export default HomePage;
