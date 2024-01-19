/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function RoutesLink({
  setIsModalOpen,
  isModalOpen,
  isResumeModalOpen,
  setIsResumeModalOpen,
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <HomePage
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              isResumeModalOpen={isResumeModalOpen}
              setIsResumeModalOpen={setIsResumeModalOpen}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              isResumeModalOpen={isResumeModalOpen}
              setIsResumeModalOpen={setIsResumeModalOpen}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              isResumeModalOpen={isResumeModalOpen}
              setIsResumeModalOpen={setIsResumeModalOpen}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesLink;
