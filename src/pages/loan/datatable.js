import {Space, Table, Tag} from "antd";
import axios from "axios";
import toast from "react-hot-toast";

const DataTable = (props) => {
    const data = props.data[0]
    const newData = []

    function formatDate(d) {
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    }

    function getLastPaymentDate(paymentCount, start_date) {
        const startDateString = start_date.substring(0, 10);
        const start = new Date(startDateString)

        return new Date(start.setMonth(start.getMonth() + paymentCount));
    }

       for (let i = 0; i < data.loan_duration; i++) {
           if (i < data.payment_count) {
               newData.push({
                   key: i,
                   installmentNumber: i + 1,
                   paymentDate: 'Settled Date: ' + 'data.payment_date',
                   nextInstallment: 'Payment Date: ' +formatDate(getLastPaymentDate(i+1, data.start_date)),
                   loanNumber: data.loan_number,
                   place: 'p'

               })
           } else {
               newData.push({
                   key: i,
                   installmentNumber: i + 1,
                   paymentDate: '',
                   nextInstallment: 'Payment Date: ' +formatDate(getLastPaymentDate(i+1, data.start_date)),
                   loanNumber: data.loan_number,
                   place: 'a'
               })
           }
       }

       const columns = [{
           title: "No", dataIndex: 'installmentNumber', key: 'installmentNumber', width: '5%'
       },{
           title: "Loan Number", dataIndex: 'loanNumber', key: 'loanNumber'
       }, {
           title: 'Payment Date',
           dataIndex: 'paymentDate',
           key: 'paymentDate',
           render: (_, record) => (<Space size="large">
               <Tag color={record.place === 'p' ? 'geekblue': 'gold'}
                    key={'20'}>{record.place === 'p' ? record.paymentDate: 'N/A'}</Tag></Space>),
       }, {
           title: 'Next Installment',
           dataIndex: 'nextInstallment',
           key: 'nextInstallment',
           render: (_, record) => (<Space size="large">
               <Tag color={record.place === 'p' ? 'green': 'volcano'}
                    key={'20'}>{record.nextInstallment}</Tag></Space>),
       }]

       return <Table
           columns={columns}
           dataSource={newData}
           scroll={{
               x: props.x, y: props.y,
           }}
       />



};
export default DataTable;