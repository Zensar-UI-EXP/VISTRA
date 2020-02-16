import React, { useState } from "react";
import LinkComponent from "../../atoms/link";
import Submenu from "../submenu/submenu";

const Navigation = props => {
  const [submenuActive, setSubmenuActive] = useState({ 0: "" });
  const manuActive = (index, isEnter, isClick) => {
    if (window.innerWidth > 991 && !isClick) {
      if (isEnter) {
        setSubmenuActive({ [index]: "open" });
      } else {
        setSubmenuActive({ [index]: "" });
      }
    } else if (isClick) {
      for (let val in submenuActive) {
        setSubmenuActive({ [val]: "" });
      }
      setSubmenuActive({ [index]: "open" });
    }
  };
  return (
    <nav
      className={`navigation ${props.className}`}
      style={props.liteNavigationStyle}
    >
      <div
        className={`navigation--mobicross ${props.toggle}`}
        onClick={props.mobiToggle}
      >
        <span className="navigation--mobibar"></span>
        <span className="navigation--mobibar"></span>
      </div>
      <ul className={`navigation__navbar ${props.toggle}`}>
        {props.data.map((item, index) => (
          <li
            style={{
              paddingLeft: props.menuSpacing,
              paddinRight: props.menuSpacing
            }}
            key={index}
            className={`navigation__item ${submenuActive[index]}`}
            onMouseEnter={() => manuActive(index, 1, 0)}
            onMouseLeave={() => manuActive(index, 0, 0)}
            onClick={() => manuActive(index, 0, 1)}
          >
            <LinkComponent
              {...item}
              fontColor={props.fontColor}
              className={
                item.submenu.length
                  ? "navigation--link"
                  : "navigation--link navigation--nosubmenu"
              }
            />
            {item.subMenuRequired === "yes" ? <Submenu {...item} /> : ""}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
