import {Space, Table, Tag} from "antd";
import axios from "axios";
import toast from "react-hot-toast";

const DataTable = (props) => {
    const data = props.data
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

    data.map((item, index) => {
        const lastPayDate = getLastPaymentDate(item.payment_count, item.start_date);
        if (lastPayDate < new Date()) {
            newData.push({
                key: index,
                loanNumber: item.loan_number,
                customerName: item.customer_name,
                startDate: item.start_date.substring(0, 10),
                customerId: item.customer_id,
                lastPaymentDate: formatDate(lastPayDate),
                loanDuration: item.loan_duration

            })
        }

    })
    const columns = [{
        title: 'Customer ID', dataIndex: 'customerId', key: 'customerId'
    }, {
        title: 'Loan Number', dataIndex: 'loanNumber', key: 'loanNumber',
    }, {
        title: 'Customer Name', dataIndex: 'customerName', key: 'customerName',
    }, {
        title: 'Start Date', dataIndex: 'startDate', key: 'startDate', render: (_, record) => (<Space size="large">
            <Tag color={'geekblue'}
                 key={'2333'}>{record.startDate}</Tag></Space>),
    }, {
        title: 'loanDuration',
        dataIndex: 'loanDuration',
        key: 'loanDuration',
        render: (_, record) => (<Space size="large">
            <Tag color={'gold'}
                 key={'2'}>{record.loanDuration + 'Months'}</Tag></Space>),
    }, {
        title: 'Last Payment Date',
        dataIndex: 'lastPaymentDate',
        key: 'lastPaymentDate',
        fixed: 'right',
        render: (_, record) => (<Space size="large">
            <Tag color={'volcano'}
                 key={'20'}>{record.lastPaymentDate}</Tag></Space>),
    },]

    return <Table
        columns={columns}
        dataSource={newData}
        scroll={{
            x: props.x, y: props.y,
        }}
    />


};
export default DataTable;