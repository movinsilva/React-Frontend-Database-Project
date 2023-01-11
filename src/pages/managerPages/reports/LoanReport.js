import React, {useEffect} from "react";
import Datatable from "./datatable";
import {useState} from "react";
import axios from "axios";

const LoanReport = () => {
    const [columns, setColumns] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/getLoans?user_id=' + sessionStorage.getItem('user'), {
            headers : {
                'authorization' : sessionStorage.getItem('token')
            }
        }).then((resp) => {
            setColumns([
                {
                    title: 'Loan Number',
                    dataIndex: 'LoanNumber',
                },
                {
                    title: 'Start Date',
                    dataIndex: 'StartDate',
                },
                {
                    title: 'End Date',
                    dataIndex: 'EndDate',
                },
                {
                    title: 'Interest Rate'
                }

            ])
        }).catch(err => {

        })
    })
    return (
        <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Previous Transactions</h6>
                </div>
            </div>
            <div className="card-body px-0 pb-2">
                <div className="table-responsive p-4">
                    <Datatable columns={columns} data={data} x={1000} y={1000}/>
                </div>
            </div>
        </div>
    );
}

export default LoanReport;
