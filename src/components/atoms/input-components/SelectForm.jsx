const SelectForm = ({ label, id, name, options, defaultOption }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={name} className="text-p leading-p font-fira-sans">
        {label}
      </label>
      <select
        name={name}
        id={id}
        className="text-p leading-p font-fira-sans px-2 py-3 rounded-[8px] border-1 text-black-theme border-border-theme bg-white appearance-none bg-[url('/icons/bottom_icon.svg')] bg-no-repeat bg-[right_8px_center] bg-[length:16px] md:bg-[length:20px]"
        defaultValue={defaultOption}
      >
        <option className="text-inactive-theme">
          Choose a {defaultOption}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
