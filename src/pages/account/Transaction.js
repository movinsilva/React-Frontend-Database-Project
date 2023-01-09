import React from "react";

class Transaction extends React.Component {
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
    return (
      <div className="card-body">
        <div className="font-weight-bold text-lg text-uppercase text-dark">
          Send a transfer
        </div>
        <form role="form" className="text-start">
          <div className="input-group input-group-outline my-3">
            <label className="form-label">From Account</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">To Account</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Bank</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Branch</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Phone No</label>
            <input type="number" className="form-control" />
          </div>

          <select name="car" id="car" className="w-100 ">
            <option value={"volvo"}>Savings Account</option>
            <option value={"volvo"}>Current Account</option>
            <option value={"volvo"}>Fixed Deposit</option>
            <option value={"volvo"}>Joined Account</option>
          </select>

          <div className="input-group input-group-outline my-3">
            <label className="form-label">Description</label>
            <textarea className="form-control"></textarea>
          </div>

          <div></div>

          <div className="text-center">
            <a
              className="btn bg-gradient-primary w-100 my-4 mb-2"
              href="/account"
            >
              Proceed
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Transaction;
