import InputForm from "../atoms/input-components/InputForm.jsx";
import SelectForm from "../atoms/input-components/SelectForm.jsx";
import Button from "../atoms/button-components/Button.jsx";

const FormGetInTouch = () => {
  return (
    <form className="w-full lg:max-w-[585px] space-y-5 md:space-y-6">
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
        <InputForm
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          inputType="input"
        />
        <InputForm
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          inputType="input"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
        <SelectForm
          label="Project Type"
          id="project-type"
          name="project-type"
          options={[
            { option: "Frontend Website", value: "Frontend Website" },
            { option: "Website Design", value: "Website Design" },
            { option: "App Design", value: "App Design" },
          ]}
          defaultOption="project"
        />
        <SelectForm
          label="Budget"
          id="budget"
          name="budget"
          options={[
            { option: "Under Rp2.000.000", value: "under-2000000" },
            { option: "Rp2.000.000 - Rp5.000.000", value: "2000000-5000000" },
            { option: "Rp5.000.000+", value: "5000000+" },
          ]}
          defaultOption="budget"
        />
      </div>
      <InputForm
        label="Project details"
        id="project-details"
        name="project-details"
        type="project-details"
        placeholder="Your project details"
        inputType="textarea"
      />
      <div className="flex sm:justify-end w-full">
        <Button
          size="small"
          ariaLabel="Get in Touch Button"
          text="Get in touch"
        />
      </div>
    </form>
  );
};

export default FormGetInTouch;
