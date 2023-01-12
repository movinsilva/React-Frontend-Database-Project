import React from "react";
import axios from "axios";

class CreateAccountForm extends React.Component {
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
    const customer_id = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    const account_number = Math.floor(1000000000 + Math.random() * 9000000000);
    function formatDate() {
      var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
    function onSubmit(event) {
      event.preventDefault();
      var datetime = formatDate();
      const deposit = parseInt(document.getElementById("deposit").value);

      if (deposit < 0) {
        return;
      }

      const body = {
        account_number: account_number,
        customer_id: customer_id,
        branch_code: document.getElementById("branch_code").value,
        account_type_id: document.getElementById("car").value,
        balance: deposit,
        last_active_date: datetime,
        open_date: datetime,
      };
      axios
        .post("http://localhost:4000/addAccount", body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then(
          (response) => {
            console.log(response);
            if (response.data.success) {
              window.location.href = "/dashboard";
            } else {
              // window.location.reload()
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }

    return (
      <div className="card-body">
        <div className="font-weight-bold text-lg text-uppercase text-dark">
          Application to create account
        </div>
        <form role="form" className="text-start">
          <div className="input-group input-group-outline my-3">
            <input
              type="text"
              className="form-control"
              id="account_number"
              value={"Account Number: " + account_number}
              disabled
            />
          </div>
          <div className="input-group input-group-outline my-3">
            <input
              type="text"
              className="form-control"
              value={"Customer Id : " + customer_id}
            />
          </div>
          <div className="input-group input-group-outline mb-3">
            <label className="form-label">Branch Code</label>
            <input type="text" className="form-control" id="branch_code" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Initial Deposit</label>
            <input type="number" className="form-control" id="deposit" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Phone No</label>
            <input type="number" className="form-control" />
          </div>

          <select name="car" id="car" className="w-100 js-states form-control">
            <option value={"s001"}>Savings Child Account</option>
            <option value={"s002"}>Saving Teen Account</option>
            <option value={"s003"}>Saving Adult Deposit</option>
            <option value={"s004"}>Saving Senior Account</option>
          </select>

          <div className="input-group input-group-outline my-3">
            <label className="form-label">Note</label>
            <textarea className="form-control"></textarea>
          </div>

          <div></div>

          <div className="text-center">
            <button
              className="btn bg-gradient-primary w-100 my-4 mb-2"
              onClick={onSubmit}
            >
              Request Permission from branch manager
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
