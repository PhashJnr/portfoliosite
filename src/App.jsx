import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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

export default App;
