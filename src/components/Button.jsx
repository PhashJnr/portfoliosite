import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string,
  customStyle: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({ text, customStyle, imgSrc, altText, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn py-[7px] px-[12px] rounded-[6px] flex gap-[3px] items-center ${customStyle}`}
    >
      <img src={imgSrc} className="h-[20px] mr-1 " alt={altText} />
      {text}
    </button>
  );
}

export default Button;
