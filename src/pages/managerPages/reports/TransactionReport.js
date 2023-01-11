import React, {useEffect} from "react";
import Datatable from "./datatable";
import {useState} from "react";
import axios from "axios";
import {DownOutlined} from '@ant-design/icons';
import toast, {Toaster} from 'react-hot-toast';

const LoanReport = (props) => {
    const [state, setStateNew] = useState({isFirst: true, map: new Map(), keys: []})
    useEffect(() => {
        if (!state.isFirst) {
            return
        }
        axios.get('http://localhost:4000/getTransactionAll', {
            headers: {
                'authorization': sessionStorage.getItem('token')
            }
        }).then((resp) => {
            toast.success('Loading Finished!')
            const data = resp.data
            const branchTransactionMap = new Map()

            for (let i = 0; i < data.length; i++) {
                const item = data[i]
                if (!branchTransactionMap.has(item.branch_city)) {
                    branchTransactionMap.set(item.branch_city, [item])
                } else {
                    let mapItem = branchTransactionMap.get(item.branch_city)
                    mapItem.push(item)
                    branchTransactionMap.delete(item.branch_city)
                    branchTransactionMap.set(item.branch_city, mapItem)
                }
            }
            setStateNew({isFirst: false, map: branchTransactionMap, keys: Array.from(branchTransactionMap.keys())})

        }).catch(err => {
            setStateNew({isFirst: false, map: new Map()})
            toast.error(err.message)
        })
    })
    return (
        <div className="card my-4">
            <Toaster
                position="top-right"
                reverseOrder={false}/>
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Previous Transactions</h6>
                </div>
            </div>
            <div className="card-body px-0 pb-2">
                <div className="table-responsive p-4">
                    {
                        state.keys.map((item, index) => {
                            return (
                                <div>
                                    <h4 className='p-1 pb-3'>{item}</h4>
                                    <Datatable data={state.map.get(item)} x={900} y={1000}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default LoanReport;
