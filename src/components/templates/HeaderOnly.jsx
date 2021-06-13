import { Heder } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Heder />
      {children}
    </>
  );
};
