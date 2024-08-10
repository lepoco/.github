/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Layout extends PureComponent {
  public static displayName: string = Layout.name;

  private static transitionDelay: number = 450;

  /**
   * Whether the menu is opened.
   */
  private isMenuOpen: boolean = false;

  /**
   * Current page.
   */
  private current: number = 0;

  /**
   * Main menu button.
   */
  private menuCtrl: HTMLButtonElement | null = null;

  /**
   * Navigation container.
   */
  private nav: HTMLElement | null = null;

  /**
   * Div containing navigation pages.
   */
  private stack: HTMLDivElement | null = null;

  /**
   * Collection of all pages.
   */
  private pages: (HTMLElement | null)[] = [];

  private pagePresenter: HTMLElement | null = null;

  private pageLoader: HTMLElement | null = null;

  public constructor(props: any) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    document.addEventListener('keydown', this.onKeyDown);
  }

  public componentDidMount() {
    for (let index = 0; index < this.pages.length; index++) {
      let pageElement = this.pages[index];

      if (pageElement === null || !(pageElement instanceof HTMLElement))
        continue;

      pageElement.addEventListener('click', e => this.onPageClick(e));
    }

    this.buildStack();
  }

  public shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    return false;
  }

  private buildStack(currentPage: number = 0): void {
    for (let index = 0; index < this.pages.length; index++) {
      let pageElement = this.pages[index];

      if (pageElement === null || !(pageElement instanceof HTMLElement))
        continue;

      pageElement.style.zIndex =
        index < currentPage
          ? (currentPage - index).toString()
          : (this.pages.length + currentPage - index).toString();

      pageElement.classList.add('page-id-' + index.toString());
      pageElement.dataset['id'] = index.toString();

      if (index !== currentPage) {
        pageElement.classList.add('--inactive');
        pageElement.style.opacity = (1 - 0.1 * index).toString();
      } else {
        pageElement.style.opacity = '1.0';
      }
    }
  }

  private openPage(id: number = 0): void {
    this.current = id;

    if (this.pages.length > id) {
      let currentPage = this.pages[id];

      if (currentPage !== null && currentPage instanceof HTMLElement) {
        //currentPage.style.webkitTransform = "translate3d(0, 0, 0)";
        currentPage.style.transform = 'translate3d(0, 0%, 0)';
        currentPage.style.opacity = '1';
        currentPage.scrollTop = 0;
      }
    }

    for (let index = 0; index < this.pages.length; index++) {
      let pageElement = this.pages[index];

      if (
        index === id ||
        pageElement === null ||
        !(pageElement instanceof HTMLElement)
      )
        continue;

      pageElement.scrollTop = 0;

      // pageElement.style.webkitTransform = "translate3d(0,100%,0)";
      pageElement.style.transform = 'translate3d(0,100%,0)';
    }

    this.menuCtrl?.classList.remove('--open');
    this.nav?.classList.remove('--open');

    // this.pagePresenter?.classList.remove('-show');
    // this.pagePresenter?.classList.add('-hide');
    // this.pageLoader?.classList.add('-show');
    // this.pageLoader?.classList.remove('-hide');

    this.delayPageTransition();
  }

  private delayPageTransition(): void {
    setTimeout(() => {
      this.stack?.classList.remove('--open');

      this.isMenuOpen = false;

      this.revealLoader();
    }, Layout.transitionDelay);
  }

  private revealLoader(): void {
    setTimeout(() => {
      // this.pagePresenter?.classList.add('-show');
      // this.pagePresenter?.classList.remove('-hide');
      // this.pageLoader?.classList.remove('-show');
      // this.pageLoader?.classList.add('-hide');
    }, 400);
  }

  private openMenu(): void {
    if (this.menuCtrl == null || this.stack == null || this.nav == null) return;

    this.menuCtrl.classList.add('--open');
    this.stack.classList.add('--open');
    this.nav.classList.add('--open');

    for (let index = 0; index < this.pages.length; index++) {
      let pageElement = this.pages[index];

      if (pageElement === null || !(pageElement instanceof HTMLElement))
        continue;

      // pageElement.style.webkitTransform = "translate3d(0, 75%, " + Math.floor(-1 * 200 - 50 * index) + "px)";
      pageElement.style.transform =
        'translate3d(0, 75%, ' + Math.floor(-1 * 200 - 50 * index) + 'px)';
    }
  }

  private closeMenu(): void {
    this.openPage();
  }

  private toggleMenu(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();

      this.isMenuOpen = true;
    }
  }

  private onPageClick(event: MouseEvent): void {
    if (!this.isMenuOpen) return;

    this.openPage();
  }

  /**
   * Occurs every time user clicks a button.
   */
  private onKeyDown(ev: any): void {
    if (!this.isMenuOpen) return;

    let keyCode = ev.keyCode || ev.which;

    if (keyCode === 27) {
      this.closeMenu();
    }
  }

  private onMenuButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    this.toggleMenu();
  }

  private onNavClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void {
    //event.preventDefault();

    this.openPage();
  }

  private onEndTransition(el, callback) {
    // var onEndCallbackFn = function (ev) {
    //   if (support.transitions) {
    //     if (ev.target != this) return;
    //     this.removeEventListener(transEndEventName, onEndCallbackFn);
    //   }
    //   if (callback && typeof callback === "function") {
    //     callback.call(this);
    //   }
    // };
    // if (support.transitions) {
    //   el.addEventListener(transEndEventName, onEndCallbackFn);
    // } else {
    //   onEndCallbackFn();
    // }
  }

  public render(): JSX.Element {
    return (
      <>
        <nav
          role="menu"
          className="pages-nav"
          ref={el => {
            this.nav = el;
          }}>
          <div className="pages-nav__item">
            <Link
              className="link --page"
              to="/"
              role="menuitem"
              onClick={e => this.onNavClick(e)}>
              Home
            </Link>
          </div>
          <div className="pages-nav__item">
            <Link
              className="link --page"
              to="/support"
              role="menuitem"
              onClick={e => this.onNavClick(e)}>
              Support
            </Link>
          </div>
          <div className="pages-nav__item">
            <Link
              className="link --page"
              to="/courses"
              role="menuitem"
              onClick={e => this.onNavClick(e)}>
              Courses
            </Link>
          </div>
          <div className="pages-nav__item pages-nav__item--small">
            <Link
              className="link --page --faded"
              to="/privacy"
              role="menuitem"
              onClick={e => this.onNavClick(e)}>
              Privacy policy
            </Link>
          </div>
          <div className="pages-nav__item pages-nav__item--small">
            <Link
              className="link --page --faded"
              to="/news"
              role="menuitem"
              onClick={e => this.onNavClick(e)}>
              Blog &amp; News
            </Link>
          </div>
          <div className="pages-nav__item pages-nav__item--small">
            <Link
              className="link --page --faded"
              to="/contact"
              role="menuitem"
              onClick={e => this.onNavClick(e)}>
              Contact
            </Link>
          </div>
          <div className="pages-nav__item pages-nav__item--social"></div>
        </nav>
        <div
          className="pages-stack"
          ref={el => {
            this.stack = el;
          }}>
          <div
            className="page -current -radial"
            id="page-current"
            ref={el => {
              this.pages = [el]; // Reset pages collection at first element
            }}>
            <div
              className="page__main -show"
              ref={el => {
                this.pagePresenter = el;
              }}>
              {this.props.children}
            </div>
            {/* <div
              className="page__preload -hide"
              ref={el => {
                this.pageLoader = el;
              }}>
              <div className="page__wrapper">
                <header>
                  <span className="page__header">lepo.co</span>
                  <div className="pre-animation">
                    <div className="pre-animation__element -header"></div>
                    <div className="pre-animation__element -paragraph"></div>
                    <div
                      className="pre-animation__element -paragraph"
                      style={{ width: 740 }}></div>
                    <div
                      className="pre-animation__element -paragraph"
                      style={{ width: 810 }}></div>
                  </div>
                </header>
              </div>
            </div> */}
          </div>
          <div
            className="page -radial"
            ref={el => {
              this.pages.push(el);
            }}>
            <div className="page__wrapper"></div>
          </div>
          <div
            className="page -radial"
            ref={el => {
              this.pages.push(el);
            }}>
            <div className="page__wrapper"></div>
          </div>
        </div>
        <button
          className="menu-button"
          onClick={e => this.onMenuButtonClick(e)}
          ref={el => {
            this.menuCtrl = el;
          }}>
          <span>Menu</span>
        </button>
      </>
    );
  }
}
