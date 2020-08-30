import React from "react";
import { Link } from "react-scroll";

// Styles and Components
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const Menu = (props) => {
  return (
    <div className={styles.Menu}>
      <div className={styles.Container}>
        <Link
          to="Hero"
          spy={true}
          smooth={true}
          duration={1000}
          activeClass="active"
        >
          <div className={styles.Logo}>
            <p>RGS.</p>
          </div>
        </Link>
        <div className={styles.MenuItems}>
          <Link
            spy={true}
            to="Work"
            smooth={true}
            duration={1000}
            activeClass="active"
          >
            <MenuItem ItemName="Work" />
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
          >
            <MenuItem ItemName="About" />
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
          >
            <MenuItem ItemName="Contact" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
