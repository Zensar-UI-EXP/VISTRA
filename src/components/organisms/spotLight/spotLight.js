import React, { useEffect } from "react";
import Title from "../../atoms/title/title";

const SpotLight = props => {
  useEffect(() => {});
  return (
    <div className="path-frontpage page-type-page">
      <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
        <div className="container-fluid">
          <div className="spotlight-slider">
            <div className="spotlight-indicator">
              {props.data.map((item, index) => (
                <>
                {
                  index === 0 ? 
                  (<div
                    data-slide-target={index+1}
                    className="spotlight-indicator__bar spotlight-indicator__bar--active"
                    style={{ height: `${100/props.data.length}vh` }}
                  >
                    <span className="spotlight-indicator__highlight"></span>
                  </div>) : 
                  (<div
                    data-slide-target={index+1}
                    className="spotlight-indicator__bar"
                    style={{ height: `${81/props.data.length}vh` }}
                  >
                    <span className="spotlight-indicator__highlight"></span>
                  </div>)
                }
                </>
              ))}
              
              {/* <div data-slide-target="2" className="spotlight-indicator__bar">
                <span className="spotlight-indicator__highlight"></span>
              </div> */}
            </div>
            {props.data.map((item, index) => (
              <section
                  data-slide={index+1}
                  className="spotlight spotlight--full-height slide-up" style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="container">
                    <div className="row no-gutters spotlight-content-row">
                      <div className="col-12 col-md-7">
                        <p
                          data-animation="fade"
                          data-delay="100"
                          data-animation-out="fade"
                          data-delay-out="200"
                          className="spotlight__time"
                          data-timezone="Asia/Kolkata"
                        >
                          Mumbai
                          <span className="local-time">00:56</span>
                        </p>
                        <span
                          data-animation="width"
                          data-delay="300"
                          data-animation-out="fade"
                          data-delay-out="200"
                          className="spotlight__heading-line spotlight__heading"
                        ></span>
                        <h2
                          data-animation-type="rows"
                          data-animation-name="bottom-top"
                          data-animation-delay="400"
                          data-animation-pace="150"
                          data-animation-out="fade"
                          data-delay-out="200"
                          className="spotlight__heading mt-0"
                        >
                          {item.header}
                        </h2>
                        <p
                          data-animation="fade"
                          data-delay="750"
                          data-animation-out="fade"
                          data-delay-out="150"
                          className="spotlight__subheading"
                        >
                        {item.subHeader}
                        </p>
                        <p
                          data-animation="fade"
                          data-delay="750"
                          data-animation-out="fade"
                          data-delay-out="150"

                          dangerouslySetInnerHTML={{__html: item.description}} 
                        >
                          
                        </p>
                        <a
                          data-animation="fade"
                          data-delay="800"
                          data-animation-out="fade"
                          data-delay-out="100"
                          target="Internal"
                          href="/about-us"
                          className="btn"
                        >
                         {item.buttonText}
                        </a>
                      </div>
                      <div
                        data-animation="fade"
                        data-delay="750"
                        data-animation-out="fade"
                        data-delay-out="100"
                        className="spotlight__scroll text-center"
                      >
                        <a
                          href=""
                          className="spotlight__scroll-btn"
                          data-js="spotlightScroll"
                        ></a>
                      </div>
                    </div>
                  </div>
                </section>
                
            ))}
            {/* <section
              data-slide="2"
              className="spotlight spotlight--full-height spotlight--men"
              id="scroll-1"
            >
              <div className="container">
                <div className="row no-gutters spotlight-content-row">
                  <div className="col-12 col-md-7">
                    <p
                      data-animation="fade"
                      data-delay="100"
                      data-animation-out="fade"
                      data-delay-out="200"
                      className="spotlight__time"
                      data-timezone="Asia/Kolkata"
                    >
                      Mumbai
                      <span className="local-time">00:56</span>
                    </p>
                    <span
                      data-animation="width"
                      data-delay="300"
                      data-animation-out="fade"
                      data-delay-out="200"
                      className="spotlight__heading-line spotlight__heading"
                    ></span>
                    <h2
                      data-animation-type="rows"
                      data-animation-name="bottom-top"
                      data-animation-delay="400"
                      data-animation-pace="150"
                      data-animation-out="fade"
                      data-delay-out="200"
                      className="spotlight__heading mt-0"
                    >
                      Wherever opportunity is, so are we
                    </h2>
                    <p
                      data-animation="fade"
                      data-delay="750"
                      data-animation-out="fade"
                      data-delay-out="150"
                      className="spotlight__subheading"
                    >
                      In a globalising world, there are opportunities out there.
                    </p>
                    <p
                      data-animation="fade"
                      data-delay="750"
                      data-animation-out="fade"
                      data-delay-out="150"
                    >
                      Opportunities to grow. To innovate. To expand into new
                      markets, and new countries.
                      <br />
                      As one of the world’s leading corporate service providers,
                      we work with clients of all sizes and types, including
                      corporations, family businesses, investment funds, private
                      equity firms and private clients to expand and support
                      them around the world.
                    </p>
                    <a
                      data-animation="fade"
                      data-delay="800"
                      data-animation-out="fade"
                      data-delay-out="100"
                      target="Internal"
                      href="/about-us"
                      className="btn"
                    >
                      MORE ABOUT VISTRA
                    </a>
                  </div>
                  <div
                    data-animation="fade"
                    data-delay="750"
                    data-animation-out="fade"
                    data-delay-out="100"
                    className="spotlight__scroll text-center"
                  >
                    <a
                      href=""
                      className="spotlight__scroll-btn"
                      data-js="spotlightScroll"
                    ></a>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
