/* eslint-disable react/prop-types */
import Button from "../components/Button";
import cancelicon from "../assets/cancel-button-svg.svg";

function ContactModal({ isModalOpen, setIsModalOpen }) {
  return (
    <div
      className={`${
        isModalOpen ? "visible" : "hidden"
      } fixed inset-0 h-[100%] z-30 w-[100%] bg-[#fff]/[0.2] backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="w-fit py-7 px-10 bg-background border border-[#fff] relative border-opacity-40 rounded-[16px] ">
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
          <form className="mt-[20px]">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#1c1c1c]/[0.5] backdrop-blur-sm rounded-[8px] px-[15px] py-[10px] text-[#fff] border border-[#fff] border-opacity-15"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#1c1c1c]/[0.5] backdrop-blur-sm rounded-[8px] px-[15px] py-[10px] text-[#fff] border border-[#fff] border-opacity-15 "
              />
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Message"
                className="bg-[#1c1c1c]/[0.5] backdrop-blur-sm rounded-[8px] px-[15px] py-[10px] text-[#fff] border border-[#fff] border-opacity-15"
              ></textarea>
            </div>
            <div className="mt-[20px]">
              <Button
                onClick={(e) => e.preventDefault()}
                text="Send Message"
                customStyle="bg-frontend mx-auto text-[#101111] btnHireMe  hover:opacity-80 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
