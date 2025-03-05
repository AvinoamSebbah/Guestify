import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { FlagIcon } from "react-flag-kit";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// style import
import {
  HeaderWrapper,
  Container,
  Logo,
  CartIcon,
  StyledBadge,
  LanguageButton,
  LanguageDropdown,
  LanguageMenuItem,
} from "./index.styled";

// context import
import { LanguageContext } from "../../../contexts/LanguageContext";


const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
   const changeLanguageDropdown = (language) => {
    changeLanguage(language);
     setShowDropdown(!showDropdown);
   };
    const handleLogoClick = () => {
    navigate("/home");
    };

    const handleCartClick = () => {
    navigate("/cart");
    };
  return (
    <HeaderWrapper>
      <Container>
        <LanguageButton onClick={toggleDropdown}>
          {<FlagIcon code={language.toUpperCase()} size={15} />}
        </LanguageButton>
        <LanguageDropdown style={{ display: showDropdown ? "block" : "none" }}>
          <LanguageMenuItem onClick={() => changeLanguageDropdown("us")}>
            <FlagIcon code="US" size={15} /> English
          </LanguageMenuItem>
          <LanguageMenuItem onClick={() => changeLanguageDropdown("fr")}>
            <FlagIcon code="FR" size={15} /> French
          </LanguageMenuItem>
          <LanguageMenuItem onClick={() => changeLanguageDropdown("es")}>
            <FlagIcon code="ES" size={15} /> Spanish
          </LanguageMenuItem>
        </LanguageDropdown>
      </Container>
      <CartIcon icon={faShoppingCart} onClick={handleCartClick}></CartIcon>
      {1 > 0 && <StyledBadge>{1}</StyledBadge>}
    </HeaderWrapper>
  );
};

export default Header;
