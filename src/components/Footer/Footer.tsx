import FooterStyled from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <img
        src="/images/RecordSwapp-logo.png"
        alt="RecordSwapp logo"
        className="logo"
      />

      <span>© 2022 RecordSwapp®</span>
    </FooterStyled>
  );
};

export default Footer;
