import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./home/Home";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import Email from "./components/Email";

import AskYourCrushOutOnline from "./projects/AskYourCrushOutOnline";
import JohnDoePortfolio from "./projects/JohnDoePortfolio";
import KevinRushPortfolio from "./projects/KevinRushPortfolio";

export default function App() {
  return (
    <div className="min-h-screen w-full flex bg-slate-900 text-zinc-300">
      <Header />
      <Socials />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kevin-rush-portfolio" element={<KevinRushPortfolio />} />
          <Route path="/john-doe-portfolio" element={<JohnDoePortfolio />} />
          <Route path="/ask-your-crush-out-online" element={<AskYourCrushOutOnline />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
      <Email />
    </div>
  );
}
