import { Link, useLocation } from "react-router-dom";

import ProfileBox from "../ProfileBox";

import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

import "./index.css";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isDashBoard =
    pathname === "/bhr-moneymatters" ? "link-item active-item" : "link-item";
  const isTxn =
    pathname === "/bhr-moneymatters/transactions"
      ? "link-item active-item"
      : "link-item";
  const isProfile =
    pathname === "/bhr-moneymatters/profile"
      ? "link-item active-item"
      : "link-item";

  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <Link to="/bhr-moneymatters/">
          <img
            src="https://res.cloudinary.com/reddyimgs/image/upload/v1690551063/Frame_507_ogpjs9.png"
            alt="website logo"
            className="logo"
          />
        </Link>
      </div>
      <ul className="link-li-container">
        <Link to="/bhr-moneymatters" className={isDashBoard}>
          <li className="list-item">
            <HiHome size={25} /> Dashboard
          </li>
        </Link>
        <Link to="/bhr-moneymatters/transactions" className={isTxn}>
          <li className="list-item">
            <img
              src="https://res.cloudinary.com/reddyimgs/image/upload/v1690558221/transfer_1_exe0rs.svg"
              alt="transaction"
            />
            Transactions
          </li>
        </Link>
        <Link to="/bhr-moneymatters/profile" className={isProfile}>
          <li className="list-item">
            <FaUser size={25} />
            Profile
          </li>
        </Link>
      </ul>

      <ProfileBox />
    </div>
  );
};

export default Sidebar;
