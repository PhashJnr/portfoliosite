/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import ContactModal from "../components/ContactModal";
import ResumeModal from "../components/ResumeModal";

function About({
  setIsModalOpen,
  setIsResumeModalOpen,
  isModalOpen,
  isResumeModalOpen,
}) {
  return (
    <>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        setIsResumeModalOpen={setIsResumeModalOpen}
      />
      <div>About</div>

      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <ResumeModal
        isResumeModalOpen={isResumeModalOpen}
        setIsResumeModalOpen={setIsResumeModalOpen}
      />
    </>
  );
}

export default About;
