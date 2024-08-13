import "./Navbar.css";
import { useState } from "react";

import logo from "../../images/logomain.png";
import { Link } from "react-router-dom";

import { ImWhatsapp } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
              <Link to={"/"} onClick={() => setShowMenu(false)} href="#" className="nav__logo">
                <img src={logo} alt="" />
                <div className="LOgoname">
                  <span>Legal</span> Yodha
                </div>
              </Link>
            <div
              className={`nav__toggle ${showMenu ? "show-icon" : ""}`}
              id="nav-toggle"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

          <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
              <li className="dropdown__item">
                <div
                  className="nav__link"
                  onClick={() => toggleDropdown("startBusiness")}
                >
                  Start Business{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className={`dropdown__menu ${openDropdown === "startBusiness" ? "show-dropdown" : "hide-dropdown"}`}>
                  <Link to={"/Private_Limited"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Private Limited Company Registration
                    </li>
                  </Link>
                  <Link to={"/Limited_Liability_Partnership_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Limited Liability Partnership Registration
                    </li>
                  </Link>
                  <Link to={"/Section_NPO"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Section NPO
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="dropdown__item">
                <div
                  className="nav__link"
                  onClick={() => toggleDropdown("businessRegistration")}
                >
                  Business Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className={`dropdown__menu ${openDropdown === "businessRegistration" ? "show-dropdown" : "hide-dropdown"}`}>
                  <Link to={"/GST_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      GST Registration
                    </li>
                  </Link>
                  <Link to={"/FSSAI_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      FSSAI Registration
                    </li>
                  </Link>
                  <Link to={"/ISO_Certification"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      ISO Certificate
                    </li>
                  </Link>
                  <Link to={"/IEC_Code_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Import Export Code(IEC)
                    </li>
                  </Link>
                  <Link to={"/PF_ESI_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      ESI and PF Registration
                    </li>
                  </Link>
                  <Link to={"/MSME_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      MSME Registration
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="dropdown__item">
                <div
                  className="nav__link"
                  onClick={() => toggleDropdown("ipRegistration")}
                >
                  IP Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className={`dropdown__menu ${openDropdown === "ipRegistration" ? "show-dropdown" : "hide-dropdown"}`}>
                  <Link to={"/Trademark_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Trademark Registration
                    </li>
                  </Link>
                  <Link to={"/Copyright_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Copyright Registration
                    </li>
                  </Link>
                  <Link to={"/Design_Registration"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Design Registration
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="dropdown__item">
                <div
                  className="nav__link"
                  onClick={() => toggleDropdown("taxGST")}
                >
                  Income TAX/GST{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className={`dropdown__menu ${openDropdown === "taxGST" ? "show-dropdown" : "hide-dropdown"}`}>
                  <Link to={"/Income_Tax_Return"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Income Tax Return
                    </li>
                  </Link>
                  <Link to={"/GST_Return"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      GST Return
                    </li>
                  </Link>
                  <Link to={"/TDS_Return"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      TDS Return
                    </li>
                  </Link>
                  <Link to={"/Income_Tax_Notice"} onClick={() => setShowMenu(false)}>
                    <li className="dropdown__link">
                      Income Tax Notice
                    </li>
                  </Link>
                </ul>
              </li>

              <Link to={"/About"} className="nav__link" onClick={() => setShowMenu(false)}>
                <li>About</li>
              </Link>

              <Link to={"/Contact"} className="nav__link" onClick={() => setShowMenu(false)}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="right-nav-icons">
          <a href="https://wa.me/+919057770955" target="_blank" rel="noopener noreferrer">
            <ImWhatsapp className="navIcons" />
          </a>
          <a href="tel:9057770955" className="phone">
            <FaPhoneSquareAlt className="navIcons" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
