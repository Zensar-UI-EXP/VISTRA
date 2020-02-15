import React from "react";
import LinkComponent from "../../atoms/link";

const Logo = props => {
  return (
    <h1 className="logo" style={props.logoCustomStyle}>
      <LinkComponent
        bgImage={props.bgImage}
        label="Pedigree"
        to="/"
        className="logo__link"
      />
    </h1>
  );
};

Logo.defaultProps = {
  linkClassName: ``,
  linkValue: ``
};

export default Logo;
