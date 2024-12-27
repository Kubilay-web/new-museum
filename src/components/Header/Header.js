import React, { useState } from "react";
const Header = () => {
  // Dropdown menüsünün açılma/kapanma durumunu tutan state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  // Dropdown menüsünü toggle (aç/kapa) etmek için fonksiyon
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropDown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropDown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropDown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropDown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDropDown6 = () => {
    console.log(setIsOpen6);
    setIsOpen6(!isOpen6);
  };

  return (
    <div>
      <header className="[ region region-header ] header print-none | js-header-main js-col-offset-item js-col-offset-item--main-header">
        <div className="container">
          <div className="header__inner">
            <div>
              <div id="block-numiko-sitebranding">
                <a
                  href="/"
                  title="Home"
                  rel="home"
                  className="header__logo-container"
                >
                  <img
                    src="/images/Header/dersim_logo.png"
                    alt="dersim_logo"
                    width={100}
                    height={100}
                    className="header__logo"
                  />
                </a>
              </div>
            </div>
            <button
              onClick={toggleDropDown6}
              className="header__button header__button--menu | js-button-menu"
              type="button"
            >
              <span className="header__button-underline">
                <span className="header__button-icon header__button-icon--hamburger">
                  <span className="hamburger-lines" />
                </span>
                <span className="header__button-text">Menu</span>
              </span>
            </button>

            <div className="header__menu-container | js-menu-container">
              <div>
                <nav
                  className="menu-primary | js-menu-primary"
                  aria-labelledby="block-numiko-mainnavigation-menu"
                  id="block-numiko-mainnavigation"
                >
                  <h2
                    className="visually-hidden"
                    id="block-numiko-mainnavigation-menu"
                  >
                    Main navigation
                  </h2>
                  <div className="js-drilldown">
                    {" "}
                    {/* required */}
                    <div className="js-drilldown-container">
                      {" "}
                      {/* required */}
                      <ul className="menu menu--level-0 js-drilldown-root">
                        <li className="menu__item menu__item--expanded menu__item--level-0">
                          <button
                            onClick={toggleDropDown}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Visit</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Visit
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Visit
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/family-visits"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Family visits
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/group-visits"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Group visits
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/audio-app"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Audio app
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/out-hours-tours"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Out-of-hours tours
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/tours-and-talks"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Tours and talks
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/object-trails"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Object trails
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/accessibility-museum"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Accessibility
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/food-and-drink"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Food and drink
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/late-opening-on-fridays"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Late opening on Fridays
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/museum-map"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Museum map
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="menu__item menu__item--level-0">
                          <a
                            href="/exhibitions-events"
                            className="menu__link menu__link--level-0 menu__toggle"
                          >
                            <span>Exhibitions and events</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </a>
                        </li>
                        <li className="menu__item menu__item--expanded menu__item--level-0">
                          <button
                            onClick={toggleDropDown2}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Collection</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen2 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Collection
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1 menu__item--Collection homepage">
                                    <a
                                      href="/"
                                      className="menu__link menu__link--level-1 menu__toggle menu__link--Collection homepage js-Collection homepage"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Collection
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Collection online
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/collection/galleries"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Galleries
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/blog"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Blog
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/the-british-museum-podcast"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        The Dersim Museum podcast
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="menu__item menu__item--expanded menu__item--level-0">
                          <button
                            onClick={toggleDropDown3}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Learn</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen3 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Learn
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1 menu__item--Learning and schools home">
                                    <a
                                      href="/learn"
                                      className="menu__link menu__link--level-1 menu__toggle menu__link--Learning and schools home js-Learning and schools home"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Learn
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/schools"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Schools
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/communities"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Communities
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/adult-learning"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Adult learning
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/young-people"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Young people
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="menu__item menu__item--expanded menu__item--level-0">
                          <button
                            onClick={toggleDropDown4}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Membership</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen4 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Membership
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Membership
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="https://www.britishmuseum.org/exhibitions-events/members-exclusive"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Members' events
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership/young-friends"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Young Friends
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership/existing-members"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Existing Members
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership/visiting-as-a-member"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Visiting as a Member
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="menu__item menu__item--expanded menu__item--level-0">
                          <button
                            onClick={toggleDropDown5}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Support us</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen5 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Support us
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/support-us/donate"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Donate
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/corporate-support"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Corporate support
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/patrons"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Become a Patron
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/supporter-case-studies"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Supporter case studies
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/volunteer"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Become a Volunteer
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/existing-patrons"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Existing Patrons
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/support-us/leave-legacy"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Leave a legacy
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/support-us/american-friends-british-museum"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        American Friends of the Dersim Museum
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="header__menu-secondary">
                <nav
                  aria-labelledby="block-secondarynavigation-menu"
                  id="block-secondarynavigation"
                >
                  <h2
                    className="visually-hidden"
                    id="block-secondarynavigation-menu"
                  >
                    Secondary navigation
                  </h2>
                  <ul className="menu menu--level-0 menu--header-secondary">
                    <li className="menu-item menu__item--level-0">
                      <a
                        className="menu__link menu__link--level-0 menu__link--shop js-shop"
                        href="/shop"
                      >
                        <svg
                          className="icon icon--shop"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-shop" />
                        </svg>
                        <span>Shop</span>
                      </a>
                    </li>
                    <li className="menu-item menu__item--level-0">
                      <a
                        className="menu__link menu__link--level-0 menu__link--search js-search"
                        href="/search"
                      >
                        <svg
                          className="icon icon--search"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-search" />
                        </svg>
                        <span>Search</span>
                      </a>
                    </li>
                    <li className="menu-item menu__item--level-0">
                      <a
                        className="menu__link menu__link--level-0 menu__link--donate"
                        href="/support-us/donate"
                      >
                        <span>Donate</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {isOpen6 && (
              <div className="header__menu-container-visible | js-menu-container">
                <div>
                  <nav
                    className="menu-primary | js-menu-primary"
                    aria-labelledby="block-numiko-mainnavigation-menu"
                    id="block-numiko-mainnavigation"
                  >
                    <h2
                      className="visually-hidden"
                      id="block-numiko-mainnavigation-menu"
                    >
                      Main navigation
                    </h2>
                    <div className="js-drilldown">
                      {" "}
                      {/* required */}
                      <div className="js-drilldown-container">
                        {" "}
                        {/* required */}
                        <ul className="menu menu--level-0 js-drilldown-root">
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Visit</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Visit
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Visit
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/family-visits"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Family visits
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/group-visits"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Group visits
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/audio-app"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Audio app
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/out-hours-tours"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Out-of-hours tours
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/tours-and-talks"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Tours and talks
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/object-trails"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Object trails
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/accessibility-museum"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Accessibility
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/food-and-drink"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Food and drink
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/late-opening-on-fridays"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Late opening on Fridays
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/museum-map"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Museum map
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--level-0">
                            <a
                              href="/exhibitions-events"
                              className="menu__link menu__link--level-0 menu__toggle"
                            >
                              <span>Exhibitions and events</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </a>
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown2}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Collection</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen2 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Collection
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1 menu__item--Collection homepage">
                                      <a
                                        href="/"
                                        className="menu__link menu__link--level-1 menu__toggle menu__link--Collection homepage js-Collection homepage"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Collection
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Collection online
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/collection/galleries"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Galleries
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/blog"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Blog
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/the-british-museum-podcast"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          The Dersim Museum podcast
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown3}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Learn</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen3 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Learn
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1 menu__item--Learning and schools home">
                                      <a
                                        href="/learn"
                                        className="menu__link menu__link--level-1 menu__toggle menu__link--Learning and schools home js-Learning and schools home"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Learn
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/schools"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Schools
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/communities"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Communities
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/adult-learning"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Adult learning
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/young-people"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Young people
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown4}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Membership</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen4 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Membership
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Membership
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="https://www.britishmuseum.org/exhibitions-events/members-exclusive"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Members' events
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership/young-friends"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Young Friends
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership/existing-members"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Existing Members
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership/visiting-as-a-member"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Visiting as a Member
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown5}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Support us</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen5 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Support us
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/support-us/donate"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Donate
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/corporate-support"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Corporate support
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/patrons"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Become a Patron
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/supporter-case-studies"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Supporter case studies
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/volunteer"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Become a Volunteer
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/existing-patrons"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Existing Patrons
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/support-us/leave-legacy"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Leave a legacy
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/support-us/american-friends-british-museum"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          American Friends of the Dersim Museum
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="header__menu-secondary">
                  <nav
                    aria-labelledby="block-secondarynavigation-menu"
                    id="block-secondarynavigation"
                  >
                    <h2
                      className="visually-hidden"
                      id="block-secondarynavigation-menu"
                    >
                      Secondary navigation
                    </h2>
                    <ul className="menu menu--level-0 menu--header-secondary">
                      <li className="menu-item menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--shop js-shop"
                          href="/shop"
                        >
                          <svg
                            className="icon icon--shop"
                            role="presentation"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use xlinkHref="#sprite-icon-shop" />
                          </svg>
                          <span>Shop</span>
                        </a>
                      </li>
                      <li className="menu-item menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--search js-search"
                          href="/search"
                        >
                          <svg
                            className="icon icon--search"
                            role="presentation"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use xlinkHref="#sprite-icon-search" />
                          </svg>
                          <span>Search</span>
                        </a>
                      </li>
                      <li className="menu-item menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--donate"
                          href="/support-us/donate"
                        >
                          <span>Donate</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          <button
            type="button"
            className="button button--icon header__col-toggle | js-col-menu-toggle"
          >
            Hide menu
            <svg
              className="icon icon--chevron"
              role="presentation"
              focusable="false"
              aria-hidden="true"
            >
              <use xlinkHref="#sprite-icon-chevron" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
