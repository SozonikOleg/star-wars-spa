import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AuthPage } from "./pages/AuthPage";
import { HeroDetailPage } from "./pages/HeroDetailPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/hero/:id" element={<HeroDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
