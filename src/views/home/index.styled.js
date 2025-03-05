import styled from "styled-components";
import backgroundImg from "../../assets/images/background.jpg";
import { Button, TextField as MuiTextField } from "@mui/material";
import { animated } from "react-spring";
import { styled as muiStyled} from "@mui/material";

const StyledTextField = muiStyled(MuiTextField)({
  "& label": {
    transformOrigin: "top right",
    right: 28,
    left: "auto",
  },
  "& legend": {
    textAlign: "right",
  },
});

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 15px;
`;
export const ConfirmationTextContainer = styled.div`
  text-align: center; /* centrage horizontal */
`;
export const Text = styled.span`
  font-weight: bold;
  color: ${(props) => (props.selected ? "#c6a97e" : "red")};
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    ),
    url(${backgroundImg});
  background-size: contain;
  background-position: center;
  background-color: black;
  width: 100%; /* ajouter cette propriété pour prendre la largeur complète de la page */
  position: relative;
`;

export const InvitationImage = styled(animated.img)`
  max-width: 70%;
  max-height: 70%;
  top: 6vh;

  object-fit: contain;
  position: absolute;
  transform: translate(-50%, -50%);
  object-fit: contain;
  position: absolute;

  @media  (min-height: 730px) and (max-width: 700px) {
    max-width: 90%;
    max-height: 90%;
    top: 12vh;
  }

  @media (max-height: 700px) {
    max-width: 90%;
    max-height: 90%;
    top: 6vh;
  }
  @media (max-height: 650px) {
    max-width: 70%;
    max-height: 70%;
    top: 6vh;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-height: 665px) {
    bottom: 4vh;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 8px;
  margin-top: 0;
  color: #af946c;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 901px) {
    font-size: 2rem;
    margin-bottom: 5px;
  }
`;

export const SecondTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  margin-top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 901px) {
    font-size: 1.2rem;
  }
`;

export const FormContainer = styled(animated.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: calc(100% - 40px); /* Set the width of the form to 100% of the parent container minus 40px */
  max-width: 650px; /* Set the maximum width of the form to 600px */

  & .MuiTextField-root {
    margin-bottom: 10px;
    width: 100%; /* Set the width of the input field to 100% of the parent container */
    color: #000;
  }

  &::before {
    border-bottom: 1px solid #c6a97e;
  }

  &::after {
    border-bottom: 2px solid #c6a97e;
  }

  @media (max-width: 700px) {
    max-width: 80vw; /* Set the maximum width of the form to 90% of the viewport width */
  }
`;

export const InputField = styled(StyledTextField)`
  width: 100%;
  margin-bottom: 10px !important;
  & label.Mui-focused {
    color: #c6a97e;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #c6a97e;
    }

    &:hover fieldset {
      border-color: #c6a97e;
    }

    &.Mui-focused fieldset {
      border-color: #c6a97e;
    }
  }

  & .MuiInputBase-input {
    color: #000; /* Set the text color of the input fields to black */
  }

  & .MuiInputBase-input::placeholder {
    color: red; /* Set the placeholder text color of the input fields to black */
  }

  &::before {
    border-bottom: 1px solid #c6a97e;
  }

  &::after {
    border-bottom: 2px solid #c6a97e;
  }
  & input {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const InputFieldFr = styled(MuiTextField)`
  width: 100%;
  margin-bottom: 10px !important;
  & label.Mui-focused {
    color: #c6a97e;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #c6a97e;
    }

    &:hover fieldset {
      border-color: #c6a97e;
    }

    &.Mui-focused fieldset {
      border-color: #c6a97e;
    }
  }

  & .MuiInputBase-input {
    color: #000; /* Set the text color of the input fields to black */
  }

  & .MuiInputBase-input::placeholder {
    color: red; /* Set the placeholder text color of the input fields to black */
  }

  &::before {
    border-bottom: 1px solid #c6a97e;
  }

  &::after {
    border-bottom: 2px solid #c6a97e;
  }
  & input {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const InputFieldCounter = styled(InputField)`
  width: 140px !important;
  margin-bottom: 0px !important;
  & input {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const PersonCountField = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;`;

export const PersonCountLabel = styled.label`
  font-size: 1.2rem;
  margin-right: 10px;
  width: auto;
`;

export const PersonCountButton = styled.button`
  background-color: #c6a97e;
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.2rem;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #b7906f;
  }
`;

export const SubmitButton = styled(Button)`
  /* styles par défaut pour le bouton */
  background-color: #c6a97e !important;
  color: #fff !important;
  border-radius: 25px !important;
  padding: 8px 30px !important;
  font-size: 1.5rem !important;
  text-transform: none !important;
  box-shadow: none !important;
  border: 2px solid #c6a97e !important;
  transition: all 0.3s ease !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 20px;

  &:hover {
    background-color: #b7906f !important;
    border-color: #b7906f !important;
  }

  /* règles CSS pour les écrans de taille moyenne */
  @media (max-width: 900px) {
    font-size: 1.3rem !important;
    padding: 6px 24px !important;
  }

  /* règles CSS pour les petits écrans */
  @media (max-width: 600px) {
    font-size: 1.2rem !important;
    padding: 6px 18px !important;
  }
`;


