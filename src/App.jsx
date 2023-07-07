import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./sass/main.scss";
import Header from "./components/header/";
import Section from "./components/section";
import Content from "./components/content";
import Footer from "./components/footer"

const App = () => {
  return (
    <>
      <Header headerTitle="Keri's Corner" />
        
      <Section>
        <Content>
          <h1>Welcome</h1>
          <h2>Today is : {new Date().toDateString()}</h2>
          <p>This is Keri's little slice of the interwebs</p>
        </Content>
      </Section>
      <Footer />
    </>
  );
};

export default App;
