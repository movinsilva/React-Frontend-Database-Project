import { Button } from "antd";
import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

class MFDForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savingsAccounts: [],
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
    // script.async = true;
    document.body.appendChild(script);

    script.onload = function () {
      const script2 = document.createElement("script");
      script2.src = "/dropdown.js";
      // script.async = true;
      document.body.appendChild(script2);
    };
  }

  render() {
    const token = sessionStorage.getItem("token");
    const branch_code = "sessionStorage.getItem";

    function onSubmit(event) {
      event.preventDefault();
      const account_number = Math.floor(
        1000000000 + Math.random() * 9000000000
      );
      const user = document.getElementById("user_id").value;
      const savings_account = document.getElementById("car").value;
      const note = document.getElementById("note").value;
      const fd = {
        account_number: account_number,
        customer_id: user,
      };

      axios
        .post("http://localhost:4000/addFD", fd, {
          headers: {
            "content-Type": "application/json",
            authorization: token,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            toast.success("Fixed deposit successfully created");
            window.location.href = "/mDashboard";
          } else {
            toast.error("Error");
          }
        });
    }

    function checkAccounts(event) {
      event.preventDefault();
      let userID = document.getElementById("user_id").value;
      axios
        .get("http://localhost:4000/getEligibleSavingAccount?user=" + userID, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.setState({
            savingsAccounts: resp.data,
          });
        })
        .catch((error) => {});
    }

    return (
      <div className="card-body">
        <div className="font-weight-bold text-lg text-uppercase text-dark">
          Application to create Fixed Deposit
        </div>
        <form role="form" className="text-start">
          <div className="input-group input-group-outline mb-3">
            <input
              type="text"
              className="form-control"
              id="branch_code"
              value={"Branch Code: " + branch_code}
              disabled
            />
          </div>

          <div className="row my-3 mr-2">
            <div className="input-group input-group-outline w-75">
              <input
                id="user_id"
                type="text"
                className="form-control"
                value={"Customer Id : "}
              />
            </div>
            <Button
              className="btn bg-gradient-primary w-25 my-auto py-1 px-5 mx-5 h-auto w-auto"
              onClick={checkAccounts}
            >
              Check
            </Button>
          </div>

          <select
            name="savingsAccounts"
            id="car"
            className="w-100 js-states form-control"
          >
            {this.state.savingsAccounts.length > 0 ? (
              this.state.savingsAccounts.map((item, index) => {
                return (
                  <option value={item.account_number}>
                    {item.account_number}
                  </option>
                );
              })
            ) : (
              <option>No savings accounts to the user</option>
            )}
          </select>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Amount</label>
            <input type="number" className="form-control" id="deposit" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Phone No</label>
            <input type="number" className="form-control" />
          </div>

          <div className="input-group input-group-outline my-3">
            <label className="form-label">Note</label>
            <textarea id="note" className="form-control"></textarea>
          </div>

          <div></div>

          <div className="text-center">
            <button
              className="btn bg-gradient-primary w-100 my-4 mb-2"
              onClick={onSubmit}
            >
              Create Fixed Deposit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MFDForm;
