import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer print-none | js-footer">
        <div className="region region--pre-footer footer-pre">
          <div className="container">
            <div className="footer-pre__inner footer-spacer">
              <div className="footer-pre__content">
                <div className="footer-pre__content-item footer-pre__content-item--title">
                  <h3 className="footer__title">Connect with us</h3>
                </div>
                <div className="footer-pre__content-item footer-pre__content-item--newsletter">
                  <form
                    className="footer__form"
                    id="adestra_footer_form"
                    action="https://britishmuseum.msgfocus.com/s/"
                    method="POST"
                    target="_blank"
                  >
                    <input
                      type="hidden"
                      name="_account_id"
                      defaultValue={1552}
                    />
                    <input type="hidden" name="_table_id" defaultValue={8} />
                    <input type="hidden" name="_list_id" defaultValue={126} />
                    <input type="hidden" name="_dedupe" defaultValue={1} />
                    <input
                      type="hidden"
                      name="_static_update"
                      defaultValue={1}
                    />
                    <input
                      type="hidden"
                      name="_email_field"
                      defaultValue="8.email"
                    />
                    <input
                      type="hidden"
                      id="return_page_footer"
                      name="_rp"
                      defaultValue="https://emails.britishmuseum.org/k/Dersim-Museum/sign_up_form_from_website_box?email=[*data('email')*]"
                    />
                    <label htmlFor="email">
                      Enter your email address to receive our newsletter
                    </label>
                    <div className="footer__form-fields">
                      <input
                        type="email"
                        id="email"
                        name="8.email"
                        size={30}
                        maxLength={64}
                        autoComplete="email"
                        required
                      />
                      <button
                        className="button button--white footer__form-submit"
                        type="submit"
                        id="footer_submit_button"
                      >
                        Sign up
                        <span className="visually-hidden">
                          {" "}
                          - opens in a new window
                        </span>
                      </button>
                    </div>
                  </form>
                  <div className="js-email-validation-container" />
                </div>
                <div className="footer-pre__content-item footer-pre__content-item--social">
                  <div id="block-sociallinks">
                    <ul className="menu menu--icon-menu menu--level-0">
                      <li>
                        <a href="https://www.facebook.com/britishmuseum">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--facebook"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-facebook" />
                            </svg>
                          </span>
                          <span className="visually-hidden">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/britishmuseum">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--x"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-x" />
                            </svg>
                          </span>
                          <span className="visually-hidden">
                            X (formerly Twitter)
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/britishmuseum/">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--instagram"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-instagram" />
                            </svg>
                          </span>
                          <span className="visually-hidden">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/user/britishmuseum">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--youtube"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-youtube" />
                            </svg>
                          </span>
                          <span className="visually-hidden">Youtube</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://weibo.com/britishmuseumlondon">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--weibo"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-weibo" />
                            </svg>
                          </span>
                          <span className="visually-hidden">weibo</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://weixin.qq.com/r/Ui7g_A7ExVO6rUqb93tA"
                          data-js-prevent-default-hyperlink
                          data-js-external-link-ignore
                          data-micromodal-trigger="social-modal-wechat"
                        >
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--wechat"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-wechat" />
                            </svg>
                          </span>
                          <span className="visually-hidden">wechat</span>
                          <span className="visually-hidden">
                            . Opens a pop-up detailing how to access wechat.
                          </span>
                        </a>
                        <div
                          className="modal micromodal-slide"
                          id="social-modal-wechat"
                          aria-hidden="true"
                        >
                          <div
                            className="modal__overlay"
                            tabIndex={-1}
                            data-micromodal-close
                          >
                            <div
                              className="modal__container"
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="social-modal-wechat-title"
                            >
                              <button
                                className="modal__close"
                                aria-label="Close modal"
                                data-micromodal-close
                              >
                                <span data-micromodal-close>Close</span>
                              </button>
                              <div className="modal__content">
                                <div className="modal__text modal__text--full modal__text--center-content">
                                  <h3
                                    id="social-modal-wechat-title"
                                    className="visually-hidden"
                                  >
                                    wechat
                                  </h3>
                                  <p>Scan the QR code to be taken to WeChat.</p>
                                  <img
                                    className="lazyload"
                                    data-src="/themes/custom/numiko/dist/img/wechat-qr.png"
                                    alt="A QR code that directs to WeChat."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-pre__content-item footer-pre__content-item--top-link">
                  <div className="footer-pre__top-link-container">
                    <a href="#page-top" className="footer-pre__top-link">
                      <span>Back to the top</span>
                      <svg
                        className="icon icon--chevron"
                        role="presentation"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <use xlinkHref="#sprite-icon-chevron" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="region region--footer footer-main">
          <div className="container">
            <div className="footer__inner footer-spacer">
              <img
                className="footer__image not-full-width lazyload"
                src="/images/footer-turtle.webp"
                alt="footer-turtle"
              />
              <div className="footer__content">
                <div className="footer__info">
                  <div className="footer__info-inner">
                    <div
                      id="block-freeentry"
                      className="block footer__info-block"
                    >
                      <h2 className="footer__title footer__title--small footer__title--has-icon">
                        <svg
                          className="icon icon--ticket"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-ticket" />
                        </svg>
                        Free entry
                      </h2>
                      <p>
                        Great Russell Street
                        <br />
                        Dersim WC1B 3DG
                      </p>
                      <p>
                        <a href="tel:+442073238000">
                          <span>+44 (0)20 7323 8000</span>
                        </a>
                        <br />
                        &nbsp;
                      </p>
                    </div>
                    <div
                      id="block-openinghours"
                      className="block footer__info-block"
                    >
                      <h2 className="footer__title footer__title--small footer__title--has-icon">
                        <svg
                          className="icon icon--clock"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-clock" />
                        </svg>
                        Opening hours
                      </h2>
                      <p>
                        Daily: 10.00–17.00 (Fridays: 20.30)
                        <br />
                        Last entry: 16.45&nbsp;(Fridays: 20.15)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="footer__menu">
                  <nav aria-labelledby="block-footer-menu" id="block-footer">
                    <h2 className="visually-hidden" id="block-footer-menu">
                      Footer
                    </h2>
                    <ul className="menu menu--level-0 menu--footer">
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/about-us"
                        >
                          <span>About us</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/governance"
                            >
                              <span>Governance</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/british-museum-story"
                            >
                              <span>The Dersim Museum story</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/jobs"
                            >
                              <span>Jobs</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/press"
                            >
                              <span>Press</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/contact-us"
                            >
                              <span>Contact us</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/visit"
                        >
                          <span>Visit</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/museum-map"
                            >
                              <span>Museum map</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/exhibitions-events"
                            >
                              <span>Exhibitions and events</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/accessibility-museum"
                            >
                              <span>Accessibility</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/food-and-drink"
                            >
                              <span>Food and drink</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/audio-app"
                            >
                              <span>Audio guide</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/commercial"
                        >
                          <span>Commercial</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/commercial-hire"
                            >
                              <span>Commercial hire</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/filming"
                            >
                              <span>Filming</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="https://www.bmimages.com/"
                            >
                              <span>BM Images</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/licensing"
                            >
                              <span>Licensing</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/british-museum-press"
                            >
                              <span>Dersim Museum Press</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/travel-trade-tours"
                            >
                              <span>Travel trade tours</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/our-work"
                        >
                          <span>Our work</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/departments"
                            >
                              <span>Departments</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/national"
                            >
                              <span>National</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/international"
                            >
                              <span>International</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/how-borrow-british-museum-objects"
                            >
                              <span>How to borrow</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/research"
                        >
                          <span>Research</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/research/projects"
                            >
                              <span>Research projects</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/research/british-museum-publications"
                            >
                              <span>Research publications</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/scientific-study-british-museum-collection"
                            >
                              <span>Scientific studies</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/resources"
                        >
                          <span>Resources</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/resources/study-rooms"
                            >
                              <span>Study rooms</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/resources/library-and-archive"
                            >
                              <span>Library and archive</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/collection"
                            >
                              <span>Search the collection</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/blog"
                            >
                              <span>Blog</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="region region--post-footer footer-post">
          <div className="container">
            <div className="footer-post__nav">
              <nav
                aria-labelledby="block-footerlegallinks-menu"
                id="block-footerlegallinks"
                className="menu--footer-legal-container"
              >
                <h2
                  className="visually-hidden"
                  id="block-footerlegallinks-menu"
                >
                  Footer Legal Links
                </h2>
                <ul className="menu menu--level-0 menu--footer-legal">
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/privacy-policy"
                    >
                      <span>Privacy policy</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/cookies"
                    >
                      <span>Cookies</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0 menu__link--Website accessibility statement js-Website accessibility statement"
                      href="/accessibility-statement"
                    >
                      <span>Accessibility statement</span>
                    </a>
                  </li>
                  <li className="menu-item menu-item--collapsed">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/terms-use"
                    >
                      <span>Terms of use</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/modern-slavery-act-transparency-statement"
                    >
                      <span>Modern Slavery Act Statement</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0"
                      href="http://britishmuseum.org.cn/"
                    >
                      <span>Chinese site 中文</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <span className="footer-post__copyright">© 2024</span> The Trustees
            of the Dersim Museum
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
