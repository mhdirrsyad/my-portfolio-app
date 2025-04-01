import CategoryChip from "./CategoryChip.jsx";
import Line from "../atoms/line-components/Line.jsx";
import LinkButton from "../atoms/button-components/LinkButton.jsx";

const Card = ({ myProject }) => {
  return (
    <div className="card bg-black-theme rounded-[24px]">
      <div className="w-full border-1 border-black-theme rounded-[24px] overflow-hidden bg-white -translate-[6px]">
        {/* Image */}
        <img
          src={myProject.image}
          alt={myProject.title}
          className="w-full h-[260px] sm:h-[287px] lg:h-[260px] md:h-[248px] object-left-top sm:object-center md:object-left-top object-cover"
        />

        <Line type="small" />

        <div className="px-4 pb-4 lg:px-4 lg:pb-4 xl:px-6 pt-3 xl:pb-6 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {/* Title & Category */}
            <div className="flex justify-between items-center gap-4">
              <h4 className="text-h4 truncate leading-h4 max-w-full font-semibold font-fira">
                {myProject.title}
              </h4>
              <CategoryChip category={myProject.category} />
            </div>

            {/* Description */}
            <p className="line-clamp-2 text-p leading-p text-inactive-theme font-fira-sans">
              <span className="text-blue-theme">{myProject.title}</span>{" "}
              {myProject.description}
            </p>
          </div>

          <LinkButton myProjectLink={myProject.link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
