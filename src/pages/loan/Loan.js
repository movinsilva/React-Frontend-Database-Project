import React from "react";
import axios from "axios";
import {Toaster, toast} from "react-hot-toast";

class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loans: [], isFirst: true
        };
    }

    componentDidMount() {
        const token = sessionStorage.getItem("token");

        if (this.state.isFirst) {
            axios.get('http://localhost:4000/getLoanForecast?user=' + sessionStorage.getItem('user'), {
                headers: {
                    "Content-Type": "application/json", Authorization: token,
                },
            }).then(resp => {
                if (resp.data.success) {
                    this.setState({
                        loans: resp.data.data, isFirst: false
                    })
                    toast.success('download successful')
                } else {
                    toast.error('something happened!')
                }
            }).catch(err => {
                toast.error(err.message)
            });
        }

    }

    render() {
        return (<div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}/>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="card">
                            <div className="card-header pb-0 px-3">
                                <h6 className="mb-0">Loan Details</h6>
                            </div>
                            <div className="card-body pt-4 p-3">
                                <ul className="list-group">
                                    {this.state.loans.map((item, index) => {
                                        return (
                                            <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-3 text-sm">{item.type}</h6>
                                                    <span className="mb-2 text-xs">
                        Loan No:{" "}
                                                        <span className="text-dark font-weight-bold ms-sm-2">
                          {item.loan_number}
                        </span>
                      </span>
                                                    <span className="mb-2 text-xs">
                        Interest Rate:{" "}
                                                        <span className="text-dark ms-sm-2 font-weight-bold">
                          {item.interest_rate}
                        </span>
                      </span>
                                                    <span className="text-xs">
                        Installment:{" "}
                                                        <span className="text-dark ms-sm-2 font-weight-bold">
                          LKR {item.installment}
                        </span>
                      </span>
                                                </div>
                                                <div className="ms-auto text-end">
                                                    <div className="d-flex flex-column">
                                                        <span className="text-xs">Amount to settle: </span>
                                                        <div className="mt-3">
                                                                <span
                                                                    className="text-lg text-danger">{item.amount} </span>
                                                            <span className="text-sm text-dark font-weight-bold">
                            {" "}
                                                                LKR{" "}
                          </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <a
                                className="btn bg-gradient-success w-50"
                                href="../loan/loanApplicationForm"
                            >
                                <div>Request for a new loan</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Loan;
