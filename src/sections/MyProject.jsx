import CardCarousel from "../components/my-project-components/CardCarousel.jsx";

const MyProject = () => {
  return (
    <section id="my_project" className="bg-background-theme">
      <div className="max-w-screen mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 xl:py-24">
        {/* Section Title */}
        <h3 className="mb-8 lg:mb-12 text-h3 font-fira font-semibold text-center">
          What I’ve Worked On
        </h3>

        {/* My Project Content */}
        <CardCarousel />
      </div>
    </section>
  );
};

export default MyProject;
