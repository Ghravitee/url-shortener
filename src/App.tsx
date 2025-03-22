import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Statistics from "./sections/Statistics";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Statistics />
        <Cta />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
