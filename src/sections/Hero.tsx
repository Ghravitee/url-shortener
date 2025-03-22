import Button from "../components/Button";
import heroImage from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="lg:py-8 pb-40 lg:pb-32 lg:pl-40 overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-[.4fr_.6fr] flex flex-col-reverse gap-10 lg:gap-0">
        {/* 1st column */}
        <div className="mt-6 px-6 lg:px-0">
          <h1 className="text-Very-Dark-Blue text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem] font-bold mb-2 leading-[1.2] text-center lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-Grayish-Violet lg:text-[22px] mb-6 lg:max-w-[33rem] text-center lg:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            content="Get Started"
            addon="px-8 py-3 text-lg font-medium mx-auto lg:mx-0"
          />
        </div>

        {/* 2nd column */}
        <div>
          <img
            src={heroImage}
            alt="Illustration of a person working"
            className="lg:translate-x-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
