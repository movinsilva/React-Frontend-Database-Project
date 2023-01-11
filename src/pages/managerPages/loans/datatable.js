import {Table, Tag} from "antd";

const DataTable = (props) => {
    const data = props.data
    const newData = []
    data.map((item, index) => {
        newData.push({
            key: index,
            customerName: item.customer_name,
            requestDate: item.request_date,
            loanDuration: item.loan_duration,
            personalLoan: item.is_personal === 1? 'Yes':'No',
            isOnline: item.is_online === 1? 'Yes':'No',
            amount: item.amount

        })
    })
    const columns = [
        {
            title: 'Customer Name', dataIndex: 'customerName', key: 'customerName',
        },
        {
            title: 'Request Date', dataIndex: 'requestDate', key: 'requestDate',
        },
        {
            title: 'Loan Duration', dataIndex: 'loanDuration', key: 'loanDuration'
        },
        {
            title: 'Personal loan', dataIndex: 'personalLoan', key: 'personalLoan'
        },
        {
            title: 'Online Request', dataIndex: 'isOnline', key: 'isOnline'
        },
        {
            title: 'Amount', dataIndex: 'amount', key: 'amount'
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