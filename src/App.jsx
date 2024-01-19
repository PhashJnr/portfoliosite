// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RoutesLink from "./Routes";
// import { Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import NotFound from "./pages/NotFound";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <RoutesLink
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      isResumeModalOpen={isResumeModalOpen}
      setIsResumeModalOpen={setIsResumeModalOpen}
    />
  );
}

export default App;
