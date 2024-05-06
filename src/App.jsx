import "./style.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import TravelServices from "./components/routesComponents/TravelServices";
import Immigration from "./components/routesComponents/Immigration";
import IsuranceAndFinancialServices from "./components/routesComponents/IsuranceAndFinancialServices";
import ContactUs from "./components/routesComponents/ContactUs";
import Home from "./components/routesComponents/Home";
import { AboutShow } from "./components/AboutShow";
import UkVisa from "./components/visas/UkVisa";
import AirTicket from "./components/visas/AirTicket";
import VisitorVisa from "./components/visas/VisitorVisa";
import IndianVisa from "./components/visas/IndianVisa";
import ChinaVisa from "./components/visas/ChinaVisa";
import SuparVisa from "./components/visas/SuparVisa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutShow />} />
            <Route path="travel-services" element={<TravelServices />} />
            <Route path="immigration" element={<Immigration />} />
            {/*  */}
            <Route path="air-tickets" element={<AirTicket />} />
            <Route path="visitor-visa" element={<VisitorVisa />} />
            <Route path="indian-visa" element={<IndianVisa />} />
            <Route path="uk-visa" element={<UkVisa />} />
            <Route path="china-visa" element={<ChinaVisa />} />
            <Route path="supar-visa" element={<SuparVisa />} />
            {/*  */}
            <Route
              path="isurance-and-financial-services"
              element={<IsuranceAndFinancialServices />}
            />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
