/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import gitLogo from "../assets/github-logo.svg";
import diagonalArrow from "../assets/diagonal-arrow.svg";
import data from "../data/data.json";
import Button from "../components/Button";
import ResumeModal from "../components/ResumeModal";
import ContactModal from "../components/ContactModal";

function Projects({
  setIsModalOpen,
  setIsResumeModalOpen,
  isResumeModalOpen,
  isModalOpen,
}) {
  return (
    <>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        setIsResumeModalOpen={setIsResumeModalOpen}
      />
      <main className="main mt-[90px] overflow-hidden relative z-[-1]  ">
        <div className="container mx-auto px-6">
          <div className="px-8 py-4 bg-[#191919] w-fit mx-auto rounded-[9px]">
            <h2 className="text-4xl text-[#fff]  font-bold  text-center ">
              PROJECTS
            </h2>
          </div>

          <Project />
        </div>
      </main>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <ResumeModal
        isResumeModalOpen={isResumeModalOpen}
        setIsResumeModalOpen={setIsResumeModalOpen}
      />
    </>
  );
}

function Project() {
  const projects = data;
  console.log(projects);

  return (
    <div className="mt-[4rem] ">
      {projects.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5,
          }}
          key={index}
          className="flex text-[#fff] sm:text-[#FAFAFA] border border-[#fff] border-opacity-15 shadow-lg flex-col w-fit py-[30px] px-[15px] mx-auto bg-[#151515]/[0.5] backdrop-blur-sm rounded-[16px] md:flex-row  justify-center items-center mb-[4rem]"
        >
          <div className="sm:w-[450px] self-center sm:px-6 ">
            <h2 className="text-2xl">{project.projectName}</h2>
            <p>{project.projectDescription}</p>
            <div className="btn flex items-center gap-4 mt-5">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text={"Live Demo"}
                  imgSrc={diagonalArrow}
                  altText={"Diagonal Arrow"}
                  customStyle={" btnDemo text-[#101111] "}
                />
              </a>

              {!project.projectGithub ? (
                ""
              ) : (
                <a
                  href={project.projectGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btnSourceCodeBorder">
                    <Button
                      text={"Source Code"}
                      imgSrc={gitLogo}
                      altText={"GitHub Logo"}
                      customStyle="bg-background"
                    />
                  </div>
                </a>
              )}
            </div>
          </div>

          <div className="img ">
            <img
              src={project.desktopImage}
              className="h-[350px] hidden  rounded-[8px] lg:block "
              alt="desktopPreview"
            />
            <img
              src={project.mobileImage}
              className="h-[350px] sm:hidden mt-8 rounded-[6px] "
              alt="mobilePreview"
            />
            <img
              src={project.tabletImage}
              className="h-[350px] hidden md:block lg:hidden "
              alt="tabletPreview"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
