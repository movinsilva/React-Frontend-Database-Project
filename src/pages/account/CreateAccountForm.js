import React from "react";

class CreateAccountForm extends React.Component {
  render() {
    return (
      <div className="card-body">
        <form role="form" className="text-start">
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Account Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group input-group-outline my-3">
            <label className="form-label">Account Type</label>
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

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            ></input>
          </div>

          <div className="input-group input-group-outline my-3">
            <label className="form-label">Note</label>
            <textarea className="form-control"></textarea>
          </div>

          <div></div>

          <div className="text-center">
            <a
              className="btn bg-gradient-primary w-100 my-4 mb-2"
              href="/dashboard"
            >
              Request Permission from branch manager
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
