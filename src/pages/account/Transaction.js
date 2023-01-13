import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: [],
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

    axios
      .get("http://localhost:4000/getBranch", {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      })
      .then((resp) => {
        this.setState({
          branch: resp.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      return h + ":" + m + ":" + s;
    }

    function formatDate() {
      var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-") + " " + startTime();
    }

    function onClick(event) {
      event.preventDefault();
      const token = sessionStorage.getItem("token");
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const branch = document.getElementById("car").value;
      const description = document.getElementById("desc").value;
      const timestamp = formatDate();
      const amount = document.getElementById("amount").value;
      const tid = Math.floor(1000 + Math.random() * 9000);
      debugger;
      const transaction = {
        transaction_id: "" + tid,
        account_number_to: to,
        account_number_from: from,
        transaction_description: description,
        amount: amount,
        transaction_timestamp: timestamp,
        execution_branch_code: branch,
      };

      axios
        .post("http://localhost:4000/addTransaction", transaction, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then(
          (response) => {
            console.log(response);
            if (response.data.success) {
              toast.success("transaction successful");
              window.location.href = "/account";
            } else {
              toast.error(response.error);
              // window.location.reload()
            }
          },
          (error) => {
            console.log(error);
            toast.error(error.message);
          }
        );
    }

    return (
      <div className="card-body">
        {/* Same as */}
        <Toaster position="top-right" reverseOrder={false} />
        <div className="font-weight-bold text-lg text-uppercase text-dark">
          Send a transfer
        </div>
        <form role="form" className="text-start">
          <div className="input-group input-group-outline my-3">
            <label className="form-label">From Account</label>
            <input type="text" className="form-control" id={"from"} />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">To Account</label>
            <input type="text" className="form-control" id={"to"} />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Amount</label>
            <input type="number" className="form-control" id={"amount"} />
          </div>

          <select name="car" id="car" className="w-100 js-states form-control">
            {this.state.branch.map((item, index) => {
              return (
                <option value={item.branch_code}>{item.branch_city}</option>
              );
            })}
          </select>

          <div className="input-group input-group-outline my-3">
            <label className="form-label">Description</label>
            <input className="form-control" id={"desc"}></input>
          </div>

          <div></div>

          <div className="text-center">
            <button
              className="btn bg-gradient-primary w-100 my-4 mb-2"
              onClick={onClick}
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Transaction;
