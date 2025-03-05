import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 2rem;
  margin-right: 10px;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-right: 10px;
  cursor: pointer;
  color: #fff;
`;

export const StyledBadge = styled.div`
  position: absolute;
  top: 3px;
  right: 15px;
  padding: 1px 4px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 12px;
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background-color: gray;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  height: 30px;
  &::before {
    content: "▼";
    margin-right: 0.5em;
  }
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: 38px;
  left: 15px;
  z-index: 1;
  display: none;
  float: left;
  min-width: 60px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #f9f9f9;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-radius-top-left: 0;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
`;

export const LanguageMenuItem = styled.div`
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

