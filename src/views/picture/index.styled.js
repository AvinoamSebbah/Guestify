import styled from "styled-components";
import backgroundImg from "../../assets/images/background.jpg";
import { animated } from "react-spring";
import { Button, TextField as MuiTextField } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const AdminContainer = styled.div`
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


export const CenteredList = styled(AdminContainer)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

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
export const FileInput = styled.input`
   /* styles par défaut pour le champ de saisie */
  background-color: #fff;
  border: 2px solid #c6a97e;
  border-radius: 25px;
  color: #333;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 10px 15px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #b7906f;
    box-shadow: 0px 0px 5px #b7906f;
  }

  /* règles CSS pour les écrans de taille moyenne */
  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  /* règles CSS pour les petits écrans */
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 6px 10px;
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
  width: calc(
    100% - 40px
  ); /* Set the width of the form to 100% of the parent container minus 40px */
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
  height: 80%;
`;


export const InputField = styled(MuiTextField)`
  width: 100% !important;
  height: 30px !important;
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


export const SubmitButton = styled(Button)`
  /* styles par défaut pour le bouton */
  background-color: #c6a97e !important;
  color: #fff !important;
  border-radius: 25px !important;
  padding: 8px 30px !important;
  font-size: 0.9rem !important;
  text-transform: none !important;
  box-shadow: none !important;
  border: 2px solid #c6a97e !important;
  transition: all 0.3s ease !important;
text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
width: 30%;
height: 40px;
  &:hover {
    background-color: #b7906f !important;
    border-color: #b7906f !important;
  }

  /* règles CSS pour les écrans de taille moyenne */
  @media (max-width: 900px) {
    font-size: 0.7rem !important;
    padding: 6px 24px !important;
  }

  /* règles CSS pour les petits écrans */
  @media (max-width: 600px) {
    font-size: 0.7rem !important;
    padding: 6px 18px !important;
  }
`;
export const FileListContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const FilePreview = styled(LazyLoadImage)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 16px;
  cursor: pointer;
`;

export const FileDownloadButton = styled.a`
  display: inline-block;
  padding: 8px;
  background-color: #0077ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  margin: 16px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;