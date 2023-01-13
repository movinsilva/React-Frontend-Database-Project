import React from "react";
import axios from "axios";
import { func } from "prop-types";
import { Button } from "antd";
import Transaction from "./Transaction";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      transactions: [],
      loaded: false,
      selectedAccount: "0",
    };
  }

  componentDidMount() {
    const accountlist = [];
    //getting transactions
    const curr_array = [];
    const token = sessionStorage.getItem("token");
    const transactionList = [];

    axios
      .get(
        "http://localhost:4000/getAccount?user=" +
          sessionStorage.getItem("user"),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((resp) => {
        this.accountlist = resp.data;
        const resquestList = [];
        for (let index = 0; index < resp.data.length; index++) {
          resquestList.push(
            axios.get(
              "http://localhost:4000/getTransaction-Latest?account_number_from=" +
                resp.data[index]["account_number"],
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
                },
              }
            )
          );
        }

        axios.all(resquestList).then((respList) => {
          console.log(respList);
          for (let i = 0; i < respList.length; i++) {
            if (respList[i].data.length === 0) {
              continue;
            }
            debugger;
            console.log("resp List", respList[i].data[0].account_number_from);
            transactionList.push({
              account: respList[i].data[0].account_number_from,
              transactions: respList[i].data,
            });
          }
          console.log(transactionList);
          this.setState({
            transactions: transactionList,
            accounts: resp.data,
            selectedAccount: resp.data[0].account_number,
          });
        });
      });
  }
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-7 mt-4">
            <div class="card">
              <div class="card-header pb-0 px-3">
                <h6 class="mb-0">Account Details</h6>
              </div>
              <div class="card-body pt-4 p-3">
                <ul class="list-group">
                  {this.state.accounts.map((item, index) => {
                    return (
                      <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                        <div class="d-flex flex-column">
                          <h6 class="mb-3 text-sm">Primary Account</h6>
                          <span class="mb-2 text-xs">
                            Account No:{" "}
                            <span class="text-dark font-weight-bold ms-sm-2">
                              {item.account_number}
                            </span>
                          </span>
                          <span class="mb-2 text-xs">
                            Account Type:{" "}
                            <span class="text-dark ms-sm-2 font-weight-bold">
                              {item.account_type_id}
                            </span>
                          </span>
                          <span class="text-xs">
                            Branch Code:{" "}
                            <span class="text-dark ms-sm-2 font-weight-bold">
                              {item.branch_code}
                            </span>
                          </span>
                        </div>
                        <div class="ms-auto text-end">
                          <div class="d-flex flex-Scolumn">
                            <span class="text-xs">Available Balance: </span>
                            <div class="mt-3">
                              <span class="text-lg text-success">
                                {item.balance}{" "}
                              </span>
                              <span class="text-sm text-dark font-weight-bold">
                                {" "}
                                LKR{" "}
                              </span>
                              <div className="mt-3">
                                <Button
                                  className="border-success"
                                  onClick={(e) => {
                                    this.setState({
                                      selectedAccount: item.account_number,
                                    });
                                    console.log(
                                      "from button",
                                      this.state.transactions
                                    );
                                  }}
                                >
                                  View Transactions
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/*<div class="text-center mt-3">*/}
            {/*  <a*/}
            {/*    class="btn bg-gradient-success w-50"*/}
            {/*    href="../account/createAccountForm"*/}
            {/*  >*/}
            {/*    <div>Create your new account</div>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          <div class="col-md-5 mt-4">
            <div class="card h-100 mb-4">
              <div class="card-header pb-0 px-3">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="mb-0">Your Transaction's</h6>
                  </div>
                  <div class="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                    <i class="material-icons me-2 text-lg">date_range</i>
                    <small>23 - 30 March 2020</small>
                  </div>
                </div>
              </div>
              <div class="card-body pt-4 p-3">
                <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
                  Newest
                </h6>
                <ul class="list-group">
                  {this.state.transactions.length > 0 &&
                  this.state.transactions.find(
                    (t) => t.account === this.state.selectedAccount
                  ) != null ? (
                    this.state.transactions
                      .find((t) => t.account === this.state.selectedAccount)
                      .transactions.slice(0, 2)
                      .map((item, index) => {
                        return (
                          <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div class="d-flex align-items-center">
                              {parseInt(item["amount"]) > 0 ? (
                                <button class="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                                  <i class="material-icons text-lg">
                                    expand_more
                                  </i>
                                </button>
                              ) : (
                                <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                                  <i class="material-icons text-lg">
                                    expand_less
                                  </i>
                                </button>
                              )}
                              <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark text-sm">
                                  {item["transaction_description"]}
                                </h6>
                                <span class="text-xs">
                                  {item["transaction_timestamp"]}
                                </span>
                              </div>
                            </div>
                            <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                              LKR {item["amount"]}
                            </div>
                          </li>
                        );
                      })
                  ) : (
                    <div className="mb-5">***No transactions yet***</div>
                  )}
                </ul>
                <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
                  History
                </h6>
                <ul class="list-group">
                  {this.state.transactions.length > 0 &&
                  this.state.transactions.find(
                    (t) => t.account === this.state.selectedAccount
                  ) != null ? (
                    this.state.transactions
                      .find((t) => t.account === this.state.selectedAccount)
                      .transactions.slice(2, 6)
                      .map((item, index) => {
                        return (
                          <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div class="d-flex align-items-center">
                              {parseInt(item["amount"]) > 0 ? (
                                <button class="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                                  <i class="material-icons text-lg">
                                    expand_more
                                  </i>
                                </button>
                              ) : (
                                <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                                  <i class="material-icons text-lg">
                                    expand_less
                                  </i>
                                </button>
                              )}
                              <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark text-sm">
                                  {item["transaction_description"]}
                                </h6>
                                <span class="text-xs">
                                  {item["transaction_timestamp"]}
                                </span>
                              </div>
                            </div>
                            <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                              LKR {item["amount"]}
                            </div>
                          </li>
                        );
                      })
                  ) : (
                    <div className="mt-3 mb-5">
                      ***No more transactions to show***
                    </div>
                  )}
                </ul>
              </div>
              <div className="text-center mb-3 text-secondary font-weight-bolder">
                {/*<a href="dashboard">*/}
                {/*  <u>View All Transactions</u>*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
