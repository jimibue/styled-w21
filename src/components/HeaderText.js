import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles";

export const fontSize = (size) => {
  switch (size) {
    case "large":
      return "4rem";
    case "meduim":
      return "3rem";
    default:
      return "2rem";
  }
};

const HeaderText = styled.h1`
  color: ${PRIMARY_COLOR} !important;
  text-align: center;
  font-size: ${(props) => fontSize(props.fSize)} !important;
`;

const Text = styled.h1`
  color: ${PRIMARY_COLOR} !important;
  text-align: center;
  font-size: ${(props) => fontSize(props.fSize)} !important;
`;

export default HeaderText;
