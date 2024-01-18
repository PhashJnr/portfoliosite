/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button";
import cancelicon from "../assets/cancel-button-svg.svg";
import downloadicon from "../assets/download-svg.svg";
import previewicon from "../assets/preview-svg.svg";

function ResumeModal({ isResumeModalOpen, setIsResumeModalOpen }) {
  const handleDownload = () => {
    window.open("/Resume/Phash-Resume.pdf", "_blank");
  };

  const [showPdf, setShowPdf] = useState(false);

  return (
    <div
      className={`${
        isResumeModalOpen ? "visible" : "hidden"
      } fixed inset-0 h-[100%] z-30 w-[100%] bg-[#fff]/[0.2] backdrop-blur-sm px-2 flex justify-center items-center`}
    >
      <div className="w-fit py-7 px-10 bg-background border border-[#fff] relative border-opacity-40 rounded-[16px] ">
        <img
          width="30"
          height="30"
          src={cancelicon}
          onClick={() => setIsResumeModalOpen(false)}
          alt="close-window"
          className="absolute top-4 right-4 cursor-pointer rounded-[4px] "
        />
        <div className="my-7">
          <h1 className="text-2xl text-center text-[#b3b3b3]">
            Want to check out Phash&apos;s resume?📄{" "}
          </h1>
          <div className="flex mt-7 justify-centers items-center ">
            <Button
              onClick={() => setShowPdf(true)}
              text="Preview "
              imgSrc={previewicon}
              customStyle="bg-frontend mx-auto text-[#101111] btnHireMe  hover:opacity-80 "
            />

            <Button
              imgSrc={downloadicon}
              text={"Download"}
              onClick={handleDownload}
              customStyle="bg-frontend mx-auto text-[#101111] btnHireMe  hover:opacity-80 "
            />
          </div>
        </div>
      </div>
      {showPdf && (
        <div className="absolute flex-grow px-11 py-5 bg-[#fff]/[0.5] w-[80vw] h-full backdrop-blur-[2px] z-40">
          <Button
            onClick={() => setShowPdf(false)}
            text="&larr; Back"
            customStyle="bg-frontend mb-[20px] text-[#101111] btnHireMe  hover:opacity-80 "
          />
          <iframe
            className=" w-[100%] h-[100%]  z-40"
            src="/Resume/Phash-Resume.pdf"
            title="Phash Resume"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ResumeModal;
