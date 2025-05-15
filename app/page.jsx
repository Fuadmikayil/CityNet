import React from "react";
import Carousel from "./components/carusel"; // <-- Əgər faylın adı 'carusel' deyilsə, dəyiş
import AddressChecker from "./components/citySelector";
import TarifTabs from "./components/tariffs";
import PromoBanner from "./components/promoBanner";
import WhyCityNet from "./components/whyCityNet";
import JoinSteps from "./components/joinSteps";
import SpecialOffers from "./components/specialOffers";
import OnlinePayment from "./components/onlinePayment";
import Footer from "./components/footer";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <AddressChecker />
      <TarifTabs />
      <PromoBanner/>
      <WhyCityNet/>
      <JoinSteps/>
      <SpecialOffers/>
      <OnlinePayment/>
      <Footer/>

    </>
  );
};

export default HomePage;
