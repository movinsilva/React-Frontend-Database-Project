import React from "react";
import axios from "axios";

class Loan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: [],
      installments: [],
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    axios.get();
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-7 mt-4">
            <div class="card">
              <div class="card-header pb-0 px-3">
                <h6 class="mb-0">Loan Details</h6>
              </div>
              <div class="card-body pt-4 p-3">
                <ul class="list-group">
                  <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="mb-3 text-sm">Housing Loan</h6>
                      <span class="mb-2 text-xs">
                        Loan No:{" "}
                        <span class="text-dark font-weight-bold ms-sm-2">
                          321 20002 5487
                        </span>
                      </span>
                      <span class="mb-2 text-xs">
                        Loan Type:{" "}
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          Housing @ 19%
                        </span>
                      </span>
                      <span class="text-xs">
                        VAT Number:{" "}
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div class="ms-auto text-end">
                      <div class="d-flex flex-column">
                        <span class="text-xs">Amount to settle: </span>
                        <div class="mt-3">
                          <span class="text-lg text-danger">2 215 000 </span>
                          <span class="text-sm text-dark font-weight-bold">
                            {" "}
                            LKR{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="mb-3 text-sm">Business loan</h6>
                      <span class="mb-2 text-xs">
                        Loan No:{" "}
                        <span class="text-dark font-weight-bold ms-sm-2">
                          321 54875 6989
                        </span>
                      </span>
                      <span class="mb-2 text-xs">
                        Loan Type:{" "}
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          Commercial @ 14.7%
                        </span>
                      </span>
                      <span class="text-xs">
                        VAT Number:{" "}
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div class="ms-auto text-end">
                      <div class="d-flex flex-column">
                        <span class="text-xs">Amount to settle: </span>
                        <div class="mt-3">
                          <span class="text-lg text-danger">815 000 </span>
                          <span class="text-sm text-dark font-weight-bold">
                            {" "}
                            LKR{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                    <div class="d-flex flex-column">
                      <h6 class="mb-3 text-sm">Business Loan</h6>
                      <span class="mb-2 text-xs">
                        Loan No:{" "}
                        <span class="text-dark font-weight-bold ms-sm-2">
                          321 45258 7851
                        </span>
                      </span>
                      <span class="mb-2 text-xs">
                        Loan Type:{" "}
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          Commercial @ 14.5%
                        </span>
                      </span>
                      <span class="text-xs">
                        VAT Number:{" "}
                        <span class="text-dark ms-sm-2 font-weight-bold">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div class="ms-auto text-end">
                      <div class="ms-auto text-end">
                        <div class="d-flex flex-column">
                          <span class="text-xs">Amount to settle: </span>
                          <div class="mt-3">
                            <span class="text-lg text-danger">75 250 </span>
                            <span class="text-sm text-dark font-weight-bold">
                              {" "}
                              LKR{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center mt-3">
              <a
                class="btn bg-gradient-success w-50"
                href="../loan/loanApplicationForm"
              >
                <div>Request for a new loan</div>
              </a>
            </div>
          </div>
          <div class="col-md-5 mt-4">
            <div class="card h-100 mb-4">
              <div class="card-header pb-0 px-3">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="mb-0">Installment Payments</h6>
                  </div>
                  <div class="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                    <i class="material-icons me-2 text-lg">date_range</i>
                    <small>23 - 30 March 2020</small>
                  </div>
                </div>
              </div>
              <div class="card-body pt-4 p-3">
                <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
                  Pending
                </h6>
                <ul class="list-group">
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="material-icons text-lg">priority_high</i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Business Loan 1</h6>
                        <span class="text-xs">27 March 2020 - 2 days due</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                      LKR 2,500
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="material-icons text-lg">priority_high</i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Business Loan 2</h6>
                        <span class="text-xs">27 March 2020 - 1 day due</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                      LKR 2,500
                    </div>
                  </li>
                </ul>
                <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
                  Paid
                </h6>
                <ul class="list-group">
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="material-icons text-lg">expand_less</i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Housing Loan</h6>
                        <span class="text-xs">26 March 2020, at 13:45 PM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      - LKR 750
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="material-icons text-lg">expand_less</i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Business loan 2</h6>
                        <span class="text-xs">26 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      - LKR 1,000
                    </div>
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i class="material-icons text-lg">expand_less</i>
                      </button>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Business loan 2</h6>
                        <span class="text-xs">26 March 2020, at 08:30 AM</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      - LKR 2,500
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-center mb-3 text-secondary font-weight-bolder">
                <a href="dashboard">
                  <u>View All Payments</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loan;
