import React from "react";
import Appointment from "./Components/Appointment/Appointment";
import Checkout from "./Components/Checkout/Checkout";
import Count from "./Components/Count/Count";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help";
import Hero from "./Components/Hero/Hero";
import Provide from "./Components/Provide/Provide";
import Services from "./Components/Services/Services";
import Subscribe from "./Components/Subscribe/Subscribe";
import Telehealth from "./Components/Telehealth/Telehealth";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Provide />
      <Count />
      <Services />
      <Help />
      <Appointment />
      <Checkout />
      <Telehealth />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
