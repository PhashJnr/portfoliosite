/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import ResumeModal from "../components/ResumeModal";
import reacticon from "../assets/react-svg.svg";
import cssicon from "../assets/css-3-svg.svg";
import htmlicon from "../assets/html-5-svg.svg";
import jsicon from "../assets/javascript-svg.svg";
import twittericon from "../assets/twitter-svg.svg";
import linkedinicon from "../assets/linkedin-svg.svg";
import githubicon from "../assets/github-svg.svg";
import tailwindcss from "../assets/tailwindcss-svg.svg";
import phashImg from "../assets/phashDev.png";
import { Link } from "react-router-dom";

function HomePage({
  setIsModalOpen,
  isModalOpen,
  setIsResumeModalOpen,
  isResumeModalOpen,
}) {
  return (
    <>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        setIsResumeModalOpen={setIsResumeModalOpen}
      />

      <main className="text-[#FAFAFA] mt-[100px] sm:mt-[170px] lg:mt-[90px] z-[3] flex items-center relative sm:h-[80dvh]">
        <div className="container mx-auto lg:max-w-[1200px] px-[16px]">
          <div className="flex flex-col sm:flex-row justify-between gap-y-8 items-center ">
            <div className="text-left relative bg-background/[0.4] border border-[#fff] border-opacity-15 rounded-[5px] backdrop-blur-sm sm:w-[500px] p-5 pl-[50px] sm:pl-[40px] py-7 pr-[20px] ">
              <p className=" font-light text-[1.6rem] mb-[10px]  ">
                Hey👋🏽, It&apos;s{" "}
                <span className="text-[#b3b3b3] font-normal ">Phash</span>
              </p>
              <h2 className="text-4xl leading-none font-semibold lg:text-[4rem] inline ">
                A <span className="text-[#b3b3b3]">Frontend</span> web
                developer.
              </h2>
              <p className="mt-[10px] ">
                I transform concepts into high-performance code. Explore my
                portfolio and let&apos;s innovate together.
              </p>

              <div className="techStack ">
                <p className="mt-[10px] mb-[5px] ">Tech Stack</p>
                <div className="flex gap-[16px]">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: "easeOut",
                      y: { duration: 0.5, yoyo: 1, ease: "easeOut" },
                    }}
                    src={htmlicon}
                    className="h-[34px] cursor-pointer"
                    alt="html icon"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.6,
                      delay: 0.2,
                      ease: "easeOut",
                      y: { duration: 0.5, yoyo: 1, ease: "easeOut" },
                    }}
                    src={cssicon}
                    className="h-[34px] cursor-pointer"
                    alt="css icon"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 3.2,
                      delay: 0.2,
                      ease: "easeOut",
                      y: { duration: 0.5, yoyo: 1, ease: "easeOut" },
                    }}
                    src={jsicon}
                    className="h-[34px] cursor-pointer"
                    alt="js icon"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 3.2,
                      delay: 0.2,
                      ease: "easeOut",
                      y: { duration: 0.5, yoyo: 1, ease: "easeOut" },
                    }}
                    src={reacticon}
                    className="h-[34px] cursor-pointer"
                    alt="react icon"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 3.2,
                      delay: 0.2,
                      ease: "easeOut",
                      y: { duration: 0.5, yoyo: 1, ease: "easeOut" },
                    }}
                    src={tailwindcss}
                    className="h-[34px] cursor-pointer"
                    alt="tailwindcss icon"
                  />
                </div>
              </div>

              <div className="mt-[20px] flex  ">
                <div className="hireMeBorder mr-[10px] ">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    text="Hire Me"
                    customStyle="bg-frontend cursor-pointer text-[#101111] btnHireMe  hover:opacity-80 "
                  />
                </div>

                <Link to="/projects">
                  <div className="browseProjectBorder cursor-pointer ">
                    <Button
                      text="Browse Projects"
                      customStyle="bg-background   "
                    />
                  </div>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="socialsBorder  absolute top-[50px] sm:left-[-40px] left-[-20px] z-[3] rounded-[8px]"
              >
                <div className=" flex bg-[#1c1c1c] rounded-[7px] px-1 py-2 flex-col  justify-center items-center gap-4 ">
                  <div className="relative p-1 z-[1] ">
                    <a
                      href="https://www.linkedin.com/in/mofoluwasho-fashina-400314159/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={linkedinicon}
                        alt="linkedinicon"
                        className="h-[34px]"
                      />
                    </a>

                    <div className="absolute inset-0 bg-[#292929] z-[-1] rounded-[50px] "></div>
                  </div>

                  <div className="relative p-1 z-[1]">
                    <a
                      href="https://twitter.com/PhashCooks"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={twittericon}
                        alt="twittericon"
                        className="h-[34px] relative socialIcons"
                      />
                    </a>

                    <div className="absolute inset-0 bg-[#292929] z-[-1] rounded-[50px] "></div>
                  </div>

                  <div className="relative p-1 z-[1]">
                    <a
                      href="https://github.com/PhashJnr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={githubicon}
                        alt="githubicon"
                        className="h-[34px] relative socialIcons"
                      />
                    </a>

                    <div className="absolute inset-0 bg-[#292929] z-[-1] rounded-[50px] "></div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="img relative  bg-background/[0.5] backdrop-blur-sm border border-[#fff] border-opacity-15 w-fit rounded-[6px]  ">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="imgCtms "
              >
                <img src={phashImg} alt="phash" />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ResumeModal
        isResumeModalOpen={isResumeModalOpen}
        setIsResumeModalOpen={setIsResumeModalOpen}
      />
      <Footer />
    </>
  );
}

export default HomePage;
