import { useState } from "react";
import Button from "../components/Button";
import logo from "../images/logo.svg";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="py-8 lg:py-12 lg:px-40 px-6">
      <nav className="items-center justify-between hidden lg:flex">
        <div className="flex items-center gap-10 ">
          <div>
            <img src={logo} alt="This is the logo of the website" />
          </div>
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                className="text-Grayish-Violet font-bold text-sm hover:text-Dark-Violet"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-Grayish-Violet font-bold text-sm hover:text-Dark-Violet"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-Grayish-Violet font-bold text-sm hover:text-Dark-Violet"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <a href="" className="text-Grayish-Violet font-bold text-sm">
            Login
          </a>
          <Button content="Sign Up" addon="font-bold hover:opacity-50" />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="lg:hidden flex items-center justify-between">
        <div>
          <img src={logo} alt="This is the logo of the website" />
        </div>
        <RiMenuFill
          onClick={toggleMenu}
          className="text-Grayish-Violet text-3xl"
        />
      </div>

      {/* Mobile menu links*/}

      {isMenuOpen && (
        <nav className="lg:hidden bg-Dark-Violet py-10 px-6 rounded-lg absolute top-20 z-50 w-[90%] mx-auto left-0 right-0">
          <ul className="text-white font-semibold text-lg flex flex-col items-center gap-8">
            <li>
              <a href="#" className="">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="">
                Resources
              </a>
            </li>
          </ul>
          <hr className="h-[1px] bg-Grayish-Violet w-full my-6" />
          <div className="flex flex-col items-center gap-4">
            <a href="" className="text-white font-bold text-lg">
              Login
            </a>
            <Button content="Sign Up" addon="w-full py-2 text-lg font-medium" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
