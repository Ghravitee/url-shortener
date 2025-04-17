type Props = {
  title: string;
  description: string;
  icon: string;
  id: number;
};

const StatsCard = ({ title, description, icon, id }: Props) => {
  return (
    <div
      className={` max-w-[50rem] mx-auto flex flex-col gap-4 pt-12 pb-10 px-10 rounded-md z-10 bg-white relative ${
        id === 2 ? "translate-y-12" : id === 3 ? "translate-y-20" : ""
      }`}
    >
      <div className="absolute lg:left-7 -top-7 left-0 right-0 mx-auto lg:mx-0  rounded-full bg-Dark-Violet w-16 h-16 flex items-center justify-center">
        <img src={icon} alt={title} className="" width={30} height={30} />
      </div>
      <h3 className="text-Very-Dark-Blue text-xl font-bold mt-4 text-center lg:text-left">
        {title}
      </h3>
      <p className="text-Grayish-Violet text-lg text-center lg:text-left">
        {description}
      </p>
    </div>
  );
};

export default StatsCard;
