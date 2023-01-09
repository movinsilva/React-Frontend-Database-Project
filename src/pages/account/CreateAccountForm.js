import React from "react";

class CreateAccountForm extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
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

        function onSubmit(event) {
            // const body = {
            //     account_number: account.account_number,
            //     customer_id: account.customer_id,
            //     branch_code: account.branch_code,
            //     account_type_id: account.account_type_id,
            //     balance: account.balance,
            //     last_active_date: account.last_active_date,
            //     open_date: account.open_date
            // }
        }

        return (<div className="card-body">
            <div className="font-weight-bold text-lg text-uppercase text-dark">
                Application to create account
            </div>
            <form role="form" className="text-start">
                <div className="input-group input-group-outline my-3">
                    <input type="text" className="form-control" value={Math.floor(10000000000 + Math.random() * 90000000000)} disabled/>
                </div>
                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Account Type</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Phone No</label>
                    <input type="number" className="form-control"/>
                </div>

                <select name="car" id="car" className="w-100 js-states form-control">
                    <option value={"volvo"}>Savings Account</option>
                    <option value={"volvo"}>Current Account</option>
                    <option value={"volvo"}>Fixed Deposit</option>
                    <option value={"volvo"}>Joined Account</option>
                </select>

                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Note</label>
                    <textarea className="form-control"></textarea>
                </div>

                <div></div>

                <div className="text-center">
                    <a
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                        href="/account"
                    >
                        Request Permission from branch manager
                    </a>
                </div>
            </form>
        </div>);
    }
}

export default CreateAccountForm;
