import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "antd";

const MLoanApplication = (props) => {
  const [state, setStateNew] = useState({
    fdAccounts: [],
    branch_code: "",
    isFirst: true,
  });
  useEffect(() => {
    let buttonCheck = document.getElementById("checkButton");
    buttonCheck.onclick = (event) => {
      event.preventDefault();
      let userID = document.getElementById("user").value;
      axios
        .get("http://localhost:4000/getEligibleFDAccounts?user=" + userID, {
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("token"),
          },
        })
        .then((resp) => {
          console.log(resp.data);
          setStateNew({
            fdAccounts: resp.data,
            branch_code: resp.data[0].branch_code,
            isFirst: false,
          });
          console.log("state", state.savingsAccounts);
        })
        .catch((error) => {});
    };
    if (state.isFirst) {
    }
  });
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
    const loan_number = Math.floor(1000000000 + Math.random() * 9000000000);
    const duration = document.getElementById("duration").value;
    const amount = document.getElementById("amount").value;
    const loan_type = document.getElementsByName("loan_type")[0].value;
    const is_personal = document.getElementsByName("type")[0].value;
    const fd_account = document.getElementsByName("fdAccounts")[0].value;

    const loan = {
      loan_number: loan_number,
      loan_duration: duration,
      branch_code: state.branch_code,
      loan_type_id: loan_type,
      amount: amount,
      due_date: formatDate(
        new Date().setMonth(new Date().getMonth() + duration)
      ),
      is_personal: is_personal,
      is_online: 0,
      loan_status: 0,
      is_approved: 1,
      fd_account: fd_account,
      start_date: formatDate(new Date()),
    };

    axios
      .post("http://localhost:4000/addLoan", loan, {
        headers: {
          "content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          toast.success("Loan successfully created");

          window.location.href = "/mdashboard";
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
      <div className="font-weight-bold text-lg text-uppercase text-dark">
        Loan Application Form
      </div>
      <form role="form" className="text-start">
        <div className="input-group input-group-outline my-3">
          <label className="form-label">Duration from months</label>
          <input id="duration" type="number" className="form-control" />
        </div>

        <div className="row">
          <div className="input-group input-group-outline my-3 w-75">
            <label className="form-label">User ID</label>
            <input id="user" type="text" className="form-control" />
          </div>
          <Button
            className="w-auto bg-primary my-auto px-5 text-light font-weight-bold"
            id="checkButton"
          >
            Check for FD
          </Button>
        </div>

        <div className="mt-3 text-xs text-dark font-weight-bold">
          Choose the relevant fd account
        </div>
        {state.fdAccounts.length > 0 ? (
          <select
            name="fdAccounts"
            id="car"
            className="js-states form-control border px-3"
          >
            {state.fdAccounts.map((item, index) => {
              return (
                <option value={item.account_number}>
                  {item.account_number} -maximum amount eligible ({" "}
                  {item.balance * 0.6} )
                </option>
              );
            })}
          </select>
        ) : (
          <select
            name="fdAccounts"
            id="car"
            className="js-states form-control border px-3"
          >
            <option>No fd accounts to the user</option>
          </select>
        )}

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

        <div className="mt-3 text-xs text-dark font-weight-bold">
          Choose the loan type
        </div>
        <select
          name="loan_type"
          id="car"
          className="w-100 js-states form-control border px-3"
        >
          <option value="0000">small business loan @ 12.5%</option>
          <option value="0001">mortgage loan @ 12%</option>
          <option value="0002">mortgage loan @ 15%</option>
          <option value="0003">large business loan @ 18%</option>
          <option value="0004">vehicle loan @22.45%</option>
          <option value="0005">personal loan @21%</option>
        </select>

        <div className="input-group input-group-outline my-3">
          <label className="form-label">Amount</label>
          <input id="amount" type="text" className="form-control" />
        </div>

        <div></div>

        <div className="text-center" onClick={onSubmit}>
          <a className="btn bg-gradient-primary w-100 my-4 mb-2">
            Apply for loan
          </a>
        </div>
      </form>
    </div>
  );
};

export default MLoanApplication;
