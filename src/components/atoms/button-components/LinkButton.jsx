const LinkButton = ({ myProjectLink }) => {
  return (
    <a href={myProjectLink} target="_blank" className="button-link">
      <span className="font-fira-sans text-links leading-links">
        See My Work
      </span>
      <img
        src={"./icons/arrow_right_icon.svg"}
        alt="Arrow Right Icon"
        className="w-4"
      />
    </a>
  );
};

export default LinkButton;
