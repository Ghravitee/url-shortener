import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-Very-Dark-Violet py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[.3fr_.4fr_.3fr] max-w-[1150px] mx-auto gap-10">
        {/* 1st column */}
        <div>
          <div>
            <img
              src={logo}
              alt="This is the logo of the website"
              className="invert brightness-0 mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* 2nd column */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 w-full">
          {/* 1st column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-center lg:text-left">
              Features
            </h3>
            <ul className="flex flex-col lg:items-start items-center gap-2 font-medium text-sm">
              <li>
                <a href="#" className="text-Grayish-Violet">
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-center lg:text-left">
              Resources
            </h3>
            <ul className="flex flex-col lg:items-start items-center gap-2 font-medium text-sm">
              <li>
                <a href="#" className="text-Grayish-Violet ">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet ">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet ">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-center lg:text-left">
              Company
            </h3>
            <ul className="flex flex-col lg:items-start items-center gap-2 font-medium text-sm">
              <li>
                <a href="#" className="text-Grayish-Violet">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet ">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-Grayish-Violet ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3rd column */}
        <div className="">
          <div className="flex items-center justify-center space-x-3">
            <img src={facebook} alt="Facebook icon" />
            <img src={twitter} alt="Twitter icon" />
            <img src={pinterest} alt="Pinterest icon" />
            <img src={instagram} alt="Instagram icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
