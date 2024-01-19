function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-[#1c1c1c]/[0.5] z-[7] mt-8 border-t border-[#fff]/[0.2] backdrop-blur-sm py-5 ">
      <div className="footerContainer">
        <p className="text-center text-[#b3b3b3] ">
          {" "}
          &copy; {currentYear} phash.Dev. All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
