import React from "react"
import Title from "../../atoms/title/title"
import Dropdown from "../dropdown/dropdown"
const Reviewproduct = props => (
  <div className="reviewproduct">
    <Title {...props} />
    <Dropdown {...props} />
  </div>
)
Reviewproduct.defaultProps = {
  className: ``,
  label: ``,
}
export default Reviewproduct
