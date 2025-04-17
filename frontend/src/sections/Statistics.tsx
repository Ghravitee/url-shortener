import Shortener from "../components/Shortener";
import StatsCard from "../components/StatsCard";
import iconBrand from "../images/icon-brand-recognition.svg";
import iconDetailed from "../images/icon-detailed-records.svg";
import iconCustomized from "../images/icon-fully-customizable.svg";

const statistics = [
  {
    id: 1,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    icon: iconBrand,
  },
  {
    id: 2,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
    icon: iconDetailed,
  },
  {
    id: 3,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: iconCustomized,
  },
];

const Statistics = () => {
  return (
    <section className="lg:px-40 pb-40 px-6 py-12 lg:pt-24 bg-[#EFF1F7]">
      <Shortener />
      <div>
        <h2 className="text-Very-Dark-Blue text-[2rem] lg:text-[2.5rem] font-bold text-center mb-4">
          Advanced Statistics
        </h2>
        <p className="text-Grayish-Violet text-lg text-center max-w-[30rem] mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        {/* Stats cards */}
        <div className="grid xl:grid-cols-3 gap-8 mt-12 relative">
          {statistics.map(({ title, description, icon, id }) => (
            <StatsCard
              key={id}
              id={id}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
          <div className="w-full h-2 bg-Cyan absolute top-1/2 hidden xl:block" />
          <div className="w-2 h-full bg-Cyan absolute left-0 right-0 mx-auto xl:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
