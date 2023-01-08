import React from "react";
import CreateAccountForm from "./../account/CreateAccountForm";

class LoanApplicationForm extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="font-weight-bold text-lg text-uppercase text-dark">
          Loan Application Form
        </div>
        <form role="form" className="text-start">
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Loan Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Loan Type</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline mb-3">
            <label className="form-label">Address</label>
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
            <option value={"volvo"}>Housing Loan</option>
            <option value={"volvo"}>Business Loan</option>
            <option value={"volvo"}>Vehicle Loan</option>
          </select>

          <div className="input-group input-group-outline my-3">
            <label className="form-label">Note</label>
            <textarea className="form-control"></textarea>
          </div>

          <div></div>

          <div className="text-center">
            <a className="btn bg-gradient-primary w-100 my-4 mb-2" href="/loan">
              Request Permission from branch manager
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
