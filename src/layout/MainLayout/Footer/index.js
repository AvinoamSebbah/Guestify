import React from "react";
import { useContext } from "react";

// style import
import { FooterWrapper } from "./index.styled";

// context import
import { LanguageContext } from "../../../contexts/LanguageContext";

const Footer = () => {
 const { language, translations } = useContext(LanguageContext);
  return (
    <FooterWrapper>{translations[language].copyright}</FooterWrapper>
  );};

export default Footer;
