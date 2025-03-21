import { serviceContent } from "../data/serviceContent.js";
import ServiceCard from "../components/service-components/ServiceCard.jsx";
import Line from "../components/atoms/line-components/Line.jsx";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[url('background/bg_dots_image.png')] bg-repeat w-full"
    >
      {/* Line */}
      <Line type="large" />

      <div className="max-w-screen mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 xl:py-24">
        {/* Section Title */}
        <h3 className="mb-8 lg:mb-12 text-h3 font-fira font-semibold text-center">
          Here’s What I Can Do
        </h3>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x-1 divide-border-theme">
          {serviceContent.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Line */}
      <Line type="large" />
    </section>
  );
};

export default Services;
