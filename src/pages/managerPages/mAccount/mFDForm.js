import { Button } from "antd";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MFDForm = (props) => {
  const [state, setStateNew] = useState({ savingsAccounts: [] });
  useEffect(() => {
    const buttonCheck = document.getElementById("checkBtn");
    buttonCheck.onclick = (event) => {
      event.preventDefault();
      let userID = document.getElementById("user_id").value;

      axios
        .get("http://localhost:4000/getEligibleSavingAccounts?user=" + userID, {
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("token"),
          },
        })
        .then((resp) => {
          console.log(resp.data);
          setStateNew({
            savingsAccounts: resp.data,
          });
          console.log("state", state.savingsAccounts);
        })
        .catch((error) => {});
    };
  });

  const token = sessionStorage.getItem("token");
  const branch_code = sessionStorage.getItem("branch_code");

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
    const account_number = Math.floor(1000000000 + Math.random() * 9000000000);
    const user = document.getElementById("user_id").value;
    const savings_account = document.getElementById("car").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;
    const duration = document.getElementsByName("duration")[0].value;
    const type = document.getElementsByName("type")[0].value;
    const fd = {
      account_number: account_number,
      customer_id: user,
      branch_code: branch_code,
      account_type_id: duration,
      balance: amount,
      account_number_from: account_number,
      account_number_to: savings_account,
      is_personal: type,
      open_date: formatDate(Date.now),
    };

    console.log("clicked", fd);

    axios
      .post("http://localhost:4000/addAccountFD", fd, {
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
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <div className="card-body">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="font-weight-bold text-lg text-uppercase text-dark mb-3">
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
        <div className="input-group input-group-outline my-3">
          <label className="form-label">Amount</label>
          <input type="number" className="form-control" id="amount" />
        </div>

        <div className="row my-3 mr-2">
          <div className="input-group input-group-outline w-75">
            <label className="form-label">User ID</label>
            <input id="user_id" type="text" className="form-control" />
          </div>
          <button
            id="checkBtn"
            className="btn bg-gradient-primary w-25 my-auto py-1 px-5 mx-5 h-auto w-auto"
          >
            Check
          </button>
        </div>

        <div className="mt-5 text-xs text-dark font-weight-bold">
          Choose the savings account to be linked
        </div>

        {state.savingsAccounts.length > 0 ? (
          <select
            name="savingsAccounts"
            id="car"
            className="w-100 js-states form-control border px-3"
          >
            {state.savingsAccounts.map((item, index) => {
              return (
                <option value={item.account_number}>
                  {item.account_number}
                </option>
              );
            })}
          </select>
        ) : (
          <select
            name="savingsAccounts"
            id="car"
            className="w-100 js-states form-control  border px-3"
          >
            <option>No savings accounts to the user</option>
          </select>
        )}

        <div className="mt-3 text-xs text-dark font-weight-bold">
          Choose the duration
        </div>
        <select
          name="duration"
          id="car"
          className="w-100 js-states form-control border px-3"
        >
          <option value="f001">6 months</option>
          <option value="f002">1 year</option>
          <option value="f003">3 years</option>
        </select>

        <div className="mt-3 text-xs text-dark font-weight-bold">
          Choose the account type
        </div>
        <select
          name="type"
          id="car"
          className="w-100 js-states form-control border px-3"
        >
          <option value="1">Individual</option>
          <option value="0">Business</option>
        </select>

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
};

export default MFDForm;
