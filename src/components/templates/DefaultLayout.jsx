import { Footer } from "../atoms/layout/Footer";
import { Heder } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Heder />
      {children}
      <Footer />
    </>
  );
};
