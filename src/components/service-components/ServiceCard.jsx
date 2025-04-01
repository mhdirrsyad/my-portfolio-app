const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`service flex flex-col gap-6 md:gap-8 lg:gap-10 place-items-center text-center md:place-items-start md:text-start ${index === 0 ? "lg:pl-0 lg:pr-6 xl:pr-12" : index === 1 ? "lg:px-6 xl:px-12" : index === 2 ? "lg:pr-0 lg:pl-6 xl:pl-12" : ""}`}
    >
      {service.image}
      <div className="space-y-4">
        <h4 className="text-h4 leading-h4 font-semibold font-fira text-black-theme">
          {service.title}
        </h4>
        <p className="text-p font-fira-sans text-inactive-theme">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
