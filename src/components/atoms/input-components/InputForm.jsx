const InputForm = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  inputType,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {inputType === "input" ? (
        <>
          <label
            htmlFor={name}
            className="text-p leading-p font-fira-sans text-black-theme"
          >
            {label}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className="text-p leading-p font-fira-sans px-2 py-3 rounded-[8px] border-1 border-border-theme bg-white text-black-theme"
            aria-label={`Input ${label}`}
          />
        </>
      ) : inputType === "textarea" ? (
        <>
          <label
            htmlFor={name}
            className="text-p leading-p font-fira-sans text-black-theme"
          >
            {label}
          </label>
          <textarea
            name={name}
            id={id}
            rows={4}
            placeholder={placeholder}
            className="text-p leading-p font-fira-sans px-2 py-3 rounded-[8px] border-1 border-border-theme bg-white text-black-theme"
          ></textarea>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputForm;
