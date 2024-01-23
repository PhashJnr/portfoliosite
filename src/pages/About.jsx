/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { motion } from "framer-motion";
import ContactModal from "../components/ContactModal";
import ResumeModal from "../components/ResumeModal";
import phashDev2 from "../assets/phashDev2.png";

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
      <main className="flex justify-center items-center py-[50px] px-4  mt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="about text-[#b3b3b3] h-fit max-w-[980px] px-[20px] py-[30px] bg-background border border-[#fff]/[0.2] rounded-[16px] "
        >
          <h2 className="text-center text-3xl mb-3 ">about me</h2>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="aboutImg shrink-0 sm:border-r border-[#fff]/[0.2] sm:pr-4 ">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: 0.2,
                  type: "spring",
                }}
                src={phashDev2}
                alt="phash dev"
              />
            </div>
            <div className="text-[#b3b3b3] p-3 flex flex-col gap-[10px] justify-center items-center leading-[1.22] ">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.3,
                  type: "spring",
                }}
              >
                👋🏽 Hey there! I&apos;m Phash, a passionate front-end developer
                with over a year of hand-on experince crafting/coding intuitive
                userfaces.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.4,
                  type: "spring",
                }}
              >
                🚀 My journey as a web developer has been fueled by my love for
                writing codes and seeing them come to life together with
                favorite frontend library, React.js. It&apos;s not just a
                library to me; it&apos;s been my companion in my journey as a
                developer.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.5,
                  type: "spring",
                }}
              >
                💻 When I&apos;m not coding, you&apos;ll find me playing around
                with Figma, my secret lover. I&apos;m a huge fan of UI/UX
                software and I&apos;m always looking for ways to improve my
                design skills.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.6,
                  type: "spring",
                }}
              >
                📚 Continuous learning is my mantra, and I&apos;m always
                expploring fresh ideas to elevate my craft. Whether it&apos;s
                experimenting with new React features, optimizing performance,
                or refining UI/UX, I&apos;m committed to staying at the
                forefront of front-end development.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.7,
                  type: "spring",
                }}
              >
                Let&apos;s collaborate on your next project and build something
                amazing together. If you&apos;re seeking for a frontend
                developer with a flair for design, a love for React, and a
                commitment to excellence, I&apos;m ready to embark on the next
                coding adventure with you!. ✨
              </motion.p>

              <Button
                onClick={() => setIsModalOpen(true)}
                text="Hire Me"
                customStyle="bg-frontend mt-4 cursor-pointer text-[#101111] btnHireMe  hover:opacity-80 "
              />
            </div>
          </div>
        </motion.div>
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

export default About;
