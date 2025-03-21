const Line = ({ type }) => {
  return (
    <div
      className={`${type === "large" ? "line-lg" : type === "small" ? "line-sm" : ""}`}
      aria-hidden="true"
    ></div>
  );
};

export default Line;
