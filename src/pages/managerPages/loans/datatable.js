import {Space, Table, Tag} from "antd";
import axios from "axios";
import toast from "react-hot-toast";

const DataTable = (props) => {
    const data = props.data
    const newData = []
    data.map((item, index) => {
        console.log(item.is_online)
        newData.push({
            key: index,
            loanNumber: item.loan_number,
            customerName: item.customer_name,
            requestDate: item.request_date,
            loanDuration: item.loan_duration,
            personalLoan: item.is_personal === 1 ? 'Yes' : 'No',
            isOnline: item.is_online === 1 ? 'Yes' : 'No',
            amount: item.amount
        })
    })
    const columns = [
        {
            title: 'Loan Number', dataIndex: 'loanNumber', key: 'loanNumber',
        },
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
            title: 'Personal loan', dataIndex: 'personalLoan', key: 'personalLoan', render: (_, record) => (
                <Space size="large">
                    <Tag color={record.personalLoan === 'Yes' ? 'green': 'gold'} key={'2'}>{record.personalLoan === 'Yes' ? 'Yes': 'No'}</Tag></Space>
            ),
        },
        {
            title: 'Online Request', dataIndex: 'isOnline', key: 'isOnline', render: (_, record) => (
                <Space size="large">
                    <Tag color={record.personalLoan === 'Yes' ? 'geekblue': 'gold'} key={'2'}>{record.isOnline === 'Yes' ? 'Yes': 'No'}</Tag></Space>
            ),
        },
        {
            title: 'Amount', dataIndex: 'amount', key: 'amount'
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 100,
            key: 'action',
            render: (_, record) => (
                <Space size="large">
                    <Tag color={'volcano'} key={'2'}><a onClick={
                        () => {
                            axios.post('http://localhost:4000/approveLoan', {
                                loan_number: record.loanNumber
                            }, {
                                headers: {
                                    'Content-Type': 'application/json', 'authorization': sessionStorage.getItem('token')
                                }
                            }).then((resp) => {
                                if (resp.success) {
                                    window.location.reload()
                                } else {
                                    toast.error('approval failed')
                                }

                            }).catch(err => {
                                toast.error(err.message)
                            })
                        }
                    }>Approve</a></Tag>
                </Space>
            ),
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