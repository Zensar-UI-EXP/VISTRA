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
            </div>
            {props.data.map((item, index) => (
              <>
                {
                  index === 0 ? (
                    <section
                      data-slide={index+1}
                      className="spotlight spotlight--full-height slide-up" style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {item.isText == "yes" ? 
                        (
                          <div className="container">
                            <div className="row no-gutters spotlight-content-row">
                              <div className="col-12 col-md-7">
                                {/* <p
                                  data-animation="fade"
                                  data-delay="100"
                                  data-animation-out="fade"
                                  data-delay-out="200"
                                  className="spotlight__time"
                                  data-timezone="Asia/Kolkata"
                                >
                                  Mumbai
                                  <span className="local-time">00:56</span>
                                </p> */}
                                {item.heroText ? 
                                  (
                                    <>
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
                                        {item.heroText}
                                      </h2>
                                    </>
                                  ) : ("")
                                }
                                {item.subText ? 
                                  (
                                    <>
                                      <p
                                        data-animation="fade"
                                        data-delay="750"
                                        data-animation-out="fade"
                                        data-delay-out="150"
                                        className="spotlight__subheading"
                                      >
                                      {item.subText}
                                      </p>
                                    </>
                                  ) : ("")
                                }
                                {item.description ? 
                                  (
                                    <>
                                      <p
                                        data-animation="fade"
                                        data-delay="750"
                                        data-animation-out="fade"
                                        data-delay-out="150"
                                        dangerouslySetInnerHTML={{__html: item.description}} 
                                      >
                                        
                                      </p>
                                    </>
                                  ) : ("")
                                }
                                {item.isButton == "yes" && item.btnLabel ? 
                                  (
                                    <>
                                      <a
                                          data-animation="fade"
                                          data-delay="800"
                                          data-animation-out="fade"
                                          data-delay-out="100"
                                          target="Internal"
                                          href="/about-us"
                                          className="btn"
                                        >
                                        {item.btnLabel}
                                      </a>
                                    </>
                                  ) : ("")
                                }
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
                        ) : 
                        ("")
                      }
                    </section>
                  ) :
                  (
                    <section
                      data-slide={index+1}
                      className="spotlight spotlight--full-height" style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="container">
                        <div className="row no-gutters spotlight-content-row">
                          <div className="col-12 col-md-7">
                            {/* <p
                              data-animation="fade"
                              data-delay="100"
                              data-animation-out="fade"
                              data-delay-out="200"
                              className="spotlight__time"
                              data-timezone="Asia/Kolkata"
                            >
                              Mumbai
                              <span className="local-time">00:56</span>
                            </p> */}
                            {item.heroText ? 
                              (
                                <>
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
                                    {item.heroText}
                                  </h2>
                                </>
                              ) : ("")
                            }
                            {item.subText ? 
                              (
                                <>
                                  <p
                                    data-animation="fade"
                                    data-delay="750"
                                    data-animation-out="fade"
                                    data-delay-out="150"
                                    className="spotlight__subheading"
                                  >
                                  {item.subText}
                                  </p>
                                </>
                              ) : ("")
                            }
                            {item.description ? 
                              (
                                <>
                                  <p
                                    data-animation="fade"
                                    data-delay="750"
                                    data-animation-out="fade"
                                    data-delay-out="150"
                                    dangerouslySetInnerHTML={{__html: item.description}} 
                                  >
                                    
                                  </p>
                                </>
                              ) : ("")
                            }
                            {item.isButton == "yes" && item.btnLabel ? 
                              (
                                <>
                                  <a
                                      data-animation="fade"
                                      data-delay="800"
                                      data-animation-out="fade"
                                      data-delay-out="100"
                                      target="Internal"
                                      href="/about-us"
                                      className="btn"
                                    >
                                    {item.btnLabel}
                                  </a>
                                </>
                              ) : ("")
                            }
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
                  )
                }
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
