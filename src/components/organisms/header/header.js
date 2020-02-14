import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Navigation from "../../molecules/navigation/navigation"
import Logo from "../../molecules/logo/logo"
import Icon from "../../atoms/icon"
import Title from "../../atoms/title/title"
import Search from "../../molecules/search/search"
import Link from "../../atoms/link"

const Header = props => {
  const [menuActive, setmenuActive] = useState("")
  const [searchActive, setSearchActive] = useState("")
  useEffect(() => {
    document.addEventListener("scroll", () => {
      // checkScrollState()
    })
    // checkScrollState()
  })
  const checkScrollState = () => {
    if (window.pageYOffset == 0) {
      document.body.classList.add("highnav")
    } else {
      document.body.classList.remove("highnav")
    }
  }

  const toggleMobileMenu = () => {
    if (!menuActive) {
      setmenuActive("navigation--mobinav")
    } else {
      setmenuActive("")
    }
  }
  const toggleSearch = () => {
    if (!searchActive) {
      setSearchActive("search--active")
    } else {
      setSearchActive("")
    }
  }

  return (
    <header className="header" style={props.headerStyle}>
      <div className={`header__nav ${props.headerType}`}>
        <div className="header__hamburger" onClick={toggleMobileMenu}>
          <span className="header__bar"></span>
          <span className="header__bar"></span>
          <span className="header__bar"></span>
        </div>
        {props.isImageLink == "yes" && (
          <Logo
            headingClassName="header__logo"
            linkClassName="header__logolink"
            logoCustomStyle={props.logoCustomStyle}
            bgImage={props.logoImage}
          />
        )}
        {props.isImageLink == "no" && (
          <Link
            className="header__svglogo"
            label={props.bgImage}
            fontColor={props.fontColor}
            to="/"
          />
        )}
        <div className="header__navcontent">
          <Navigation
            data={props.data}
            toggle={menuActive}
            mobiToggle={toggleMobileMenu}
            menuSpacing={props.menuSpacing}
            fontColor={props.fontColor}
          />
          <Title className="para--black header--mobititle" label="BUY NOW" />
          {props.isSearchRquired == "yes" && (
            <span onClick={toggleSearch}>
              <Icon className="glyphicon-search navigation__search" />
            </span>
          )}
        </div>
      </div>
      {props.isSearchRquired == "yes" && <Search searchActive={searchActive} />}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {}

export default Header
