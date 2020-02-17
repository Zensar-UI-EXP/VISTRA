import React from "react";

const ListFooter = props => {
  return (
    <footer className="listfooter" style={props.overallCustomStyle}>
      <div className="listfooter__inner" style={props.contentCustomStyle}>
        {props.sectionList.map((item, parentIndex) => (
          <ul className="listfooter__listcont" key={parentIndex}>
            <h3 className="listfooter__listheading">{item.heading}</h3>
            {item.linklist.map((list, index) => (
              <li className="listfooter__list" key={index}>
                <a
                  className="listfooter__lslink"
                  href="javascript:void(0);"
                  title={list}
                >
                  {list}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
};

export default ListFooter;
