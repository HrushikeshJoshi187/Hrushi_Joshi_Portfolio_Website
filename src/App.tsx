import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./home/Home";
import Footer from "./components/Footer";

import AskYourCrushOutOnline from "./projects/AskYourCrushOutOnline";
import JohnDoePortfolio from "./projects/JohnDoePortfolio";
import KevinRushPortfolio from "./projects/KevinRushPortfolio";

export default function App() {
  return (
    <div id="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kevin-rush-portfolio" element={<KevinRushPortfolio />} />
        <Route path="/john-doe-portfolio" element={<JohnDoePortfolio />} />
        <Route path="/ask-your-crush-out-online" element={<AskYourCrushOutOnline />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}
