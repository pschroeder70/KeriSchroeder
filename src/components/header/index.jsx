import Hero from "../hero";

const Header = (props) => {
  return (
    <header className="header">
    <div className="header__content">
      <div className="header__content-copy">Keri's Corner</div>
      <Hero>** What should go here? ideas? **</Hero>
    </div>
  </header>
  );
};

export default Header;
