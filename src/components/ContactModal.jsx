/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Alert from "@mui/material/Alert";
import cancelicon from "../assets/cancel-button-svg.svg";
import { useState } from "react";

function ContactModal({ isModalOpen, setIsModalOpen }) {
  const [state, handleSubmit] = useForm("moqgvoqp");
  const [showAlert, setShowAlert] = useState(false);

  if (showAlert) {
    return (
      <>
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "fit-content",
            backgroundColor: "#ffd49c",
            color: "#101111",
            zIndex: "100",
          }}
          variant="filled"
        >
          Message sent successfully!
        </Alert>
      </>
    );
  }

  return (
    <div
      className={`${
        isModalOpen ? "visible" : "hidden"
      } fixed inset-0 h-[100%] z-30 w-[100%] bg-[#fff]/[0.2] backdrop-blur-sm flex justify-center items-center`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="w-fit py-7 px-10 bg-background border border-[#fff] relative border-opacity-40 rounded-[16px] "
      >
        <img
          width="30"
          height="30"
          src={cancelicon}
          onClick={() => setIsModalOpen(false)}
          alt="close-window"
          className="absolute top-4 right-4 cursor-pointer rounded-[4px] "
        />
        <div className="mt-4">
          <h1 className="text-2xl text-center text-[#b3b3b3]">
            Send Phash a message📨{" "}
          </h1>
          <form onSubmit={handleSubmit} className="mt-[20px]">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-[#b3b3b3] mb-[-10px] ">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                className="bg-[#1c1c1c]/[0.5] backdrop-blur-sm rounded-[8px] px-[15px] py-[10px] text-[#fff] border border-[#fff] border-opacity-15"
              />

              <label htmlFor="email" className="text-[#b3b3b3] mb-[-10px] ">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="Email"
                className="bg-[#1c1c1c]/[0.5] backdrop-blur-sm rounded-[8px] px-[15px] py-[10px] text-[#fff] border border-[#fff] border-opacity-15 "
              />
              <textarea
                name="message"
                id=""
                cols="20"
                rows="10"
                placeholder="Message"
                required
                className="bg-[#1c1c1c]/[0.5] backdrop-blur-sm rounded-[8px] px-[15px] py-[10px] text-[#fff] border border-[#fff] border-opacity-15"
              ></textarea>
            </div>
            <div className="mt-[20px]">
              <Button
                type="submit"
                onClick={() => {
                  setShowAlert(true);
                  setTimeout(() => {
                    setShowAlert(false);
                  }, 3000);
                  setIsModalOpen(false);
                }}
                text="Send Message"
                customStyle="bg-frontend mx-auto text-[#101111] btnHireMe  hover:opacity-80 "
              />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactModal;
