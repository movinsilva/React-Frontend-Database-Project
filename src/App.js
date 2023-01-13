import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
              className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <a
              className="navbar-brand m-0"
              href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
              target="_blank"
            >
              <img
                src="/assets/img/logo-ct.png"
                className="navbar-brand-img h-100"
                alt="main_logo"
              />
              <span className="ms-1 font-weight-bold text-white">
                A.H.K Perera
              </span>
            </a>
          </div>
          <hr className="horizontal light mt-0 mb-2" />
          <div
            className="collapse navbar-collapse  w-auto  h-auto"
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-white active bg-gradient-primary"
                  href="/"
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-primary font-weight-bolder opacity-8">
                  Account pages
                </h6>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/account">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">table_view</i>
                  </div>
                  <span className="nav-link-text ms-1">Accounts</span>
                </a>
              </li>
              {/*<li className="nav-item">*/}
              {/*  <a*/}
              {/*    className="nav-link text-white "*/}
              {/*    href="/account/createAccountForm"*/}
              {/*  >*/}
              {/*    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">*/}
              {/*      <i className="material-icons opacity-10">table_view</i>*/}
              {/*    </div>*/}
              {/*    <span className="nav-link-text ms-1">Create Account</span>*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="nav-item">
                <a className="nav-link text-white " href="/transaction">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">table_view</i>
                  </div>
                  <span className="nav-link-text ms-1">Transactions</span>
                </a>
              </li>
              <li>
                <div className="bg-dark"></div>
              </li>
              <li>
                <hr className="horizontal light mt-0 mb-3" />

                <h6 className="ps-4 ms-2 text-uppercase text-xs text-primary font-weight-bolder opacity-8">
                  Loan pages
                </h6>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="../loan">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">receipt_long</i>
                  </div>
                  <span className="nav-link-text ms-1">Loans</span>
                </a>
              </li>

              <hr className="horizontal light mt-0 mb-3" />
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="../pages/notifications.html"
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">notifications</i>
                  </div>
                  <span className="nav-link-text ms-1">Notifications</span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-primary font-weight-bolder opacity-8">
                  Other pages
                </h6>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="../pages/profile.html"
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <span className="nav-link-text ms-1">Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/login">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">login</i>
                  </div>
                  <span className="nav-link-text ms-1">Sign In</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="../pages/sign-up.html"
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">assignment</i>
                  </div>
                  <span className="nav-link-text ms-1">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidenav-footer position-absolute w-100 bottom-0 ">
            <div className="mx-3">
              <a
                className="btn bg-gradient-primary mt-4 w-100"
                href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
                type="button"
              >
                Logout
              </a>
            </div>
          </div>
        </aside>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            navbar-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <h6 className="font-weight-bolder mb-0">XYZ Bank</h6>
              </nav>
              <div
                className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                id="navbar"
              >
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <label className="form-label">Type here...</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="container-fluid py-4">
            <div className="row min-vh-80 h-100">
              <div className="col-12">{this.props.children}</div>
            </div>
            <footer className="footer pt-5">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <div className="copyright text-center text-sm text-muted text-lg-start">
                      ©<script>document.write(new Date().getFullYear())</script>
                      , made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-weight-bold"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/blog"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="nav-link pe-0 text-muted"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
        <div className="fixed-plugin">
          <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
            <i className="material-icons py-2">settings</i>
          </a>
          <div className="card shadow-lg">
            <div className="card-header pb-0 pt-3">
              <div className="float-start">
                <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                <p>See our dashboard options.</p>
              </div>
              <div className="float-end mt-4">
                <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                  <i className="material-icons">clear</i>
                </button>
              </div>
            </div>
            <hr className="horizontal dark my-1" />
            <div className="card-body pt-sm-3 pt-0">
              <div>
                <h6 className="mb-0">Sidebar Colors</h6>
              </div>
              <a
                href="javascript:void(0)"
                className="switch-trigger background-color"
              >
                <div className="badge-colors my-2 text-start">
                  <span
                    className="badge filter bg-gradient-primary active"
                    data-color="primary"
                    onClick="sidebarColor(this)"
                  ></span>
                  <span
                    className="badge filter bg-gradient-dark"
                    data-color="dark"
                    onClick="sidebarColor(this)"
                  ></span>
                  <span
                    className="badge filter bg-gradient-info"
                    data-color="info"
                    onClick="sidebarColor(this)"
                  ></span>
                  <span
                    className="badge filter bg-gradient-success"
                    data-color="success"
                    onClick="sidebarColor(this)"
                  ></span>
                  <span
                    className="badge filter bg-gradient-warning"
                    data-color="warning"
                    onClick="sidebarColor(this)"
                  ></span>
                  <span
                    className="badge filter bg-gradient-danger"
                    data-color="danger"
                    onClick="sidebarColor(this)"
                  ></span>
                </div>
              </a>

              <div className="mt-3">
                <h6 className="mb-0">Sidenav Type</h6>
                <p className="text-sm">
                  Choose between 2 different sidenav types.
                </p>
              </div>
              <div className="d-flex">
                <button
                  className="btn bg-gradient-dark px-3 mb-2 active"
                  data-class="bg-gradient-dark"
                  onClick="sidebarType(this)"
                >
                  Dark
                </button>
                <button
                  className="btn bg-gradient-dark px-3 mb-2 ms-2"
                  data-class="bg-transparent"
                  onClick="sidebarType(this)"
                >
                  Transparent
                </button>
                <button
                  className="btn bg-gradient-dark px-3 mb-2 ms-2"
                  data-class="bg-white"
                  onClick="sidebarType(this)"
                >
                  White
                </button>
              </div>
              <p className="text-sm d-xl-none d-block mt-2">
                You can change the sidenav type just on desktop view.
              </p>

              <div className="mt-3 d-flex">
                <h6 className="mb-0">Navbar Fixed</h6>
                <div className="form-check form-switch ps-0 ms-auto my-auto">
                  <input
                    className="form-check-input mt-1 ms-auto"
                    type="checkbox"
                    id="navbarFixed"
                    onClick="navbarFixed(this)"
                  />
                </div>
              </div>
              <hr className="horizontal dark my-3" />
              <div className="mt-2 d-flex">
                <h6 className="mb-0">Light / Dark</h6>
                <div className="form-check form-switch ps-0 ms-auto my-auto">
                  <input
                    className="form-check-input mt-1 ms-auto"
                    type="checkbox"
                    id="dark-version"
                    onClick="darkMode(this)"
                  />
                </div>
              </div>
              <hr className="horizontal dark my-sm-4" />
              <a className="btn btn-outline-dark w-100" href="">
                View documentation
              </a>
              <div className="w-100 text-center">
                <a
                  className="github-button"
                  href="https://github.com/creativetimofficial/material-dashboard"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star creativetimofficial/material-dashboard on GitHub"
                >
                  Star
                </a>
                <h6 className="mt-3">Thank you for sharing!</h6>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
                  className="btn btn-dark mb-0 me-2"
                  target="_blank"
                >
                  <i className="fab fa-twitter me-1" aria-hidden="true"></i>{" "}
                  Tweet
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
                  className="btn btn-dark mb-0 me-2"
                  target="_blank"
                >
                  <i
                    className="fab fa-facebook-square me-1"
                    aria-hidden="true"
                  ></i>{" "}
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
