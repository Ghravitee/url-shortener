import Button from "../components/Button";

const Cta = () => {
  return (
    <section className="cta-background py-16 px-12 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-[2rem] lg:text-[2.5rem] font-bold mb-3">
          Boost your links today
        </h2>
        <Button
          content="Get Started"
          addon="px-8 py-2 text-[17px] lg:text-lg font-medium"
        />
      </div>
    </section>
  );
};

export default Cta;
