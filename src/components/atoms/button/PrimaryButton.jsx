import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};
//padding=内側の余白
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
