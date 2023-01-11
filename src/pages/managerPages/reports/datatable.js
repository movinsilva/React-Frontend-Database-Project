import {Table, Tag} from "antd";

const DataTable = (props) => {
    const data = props.data
    const newData = []
    data.map((item, index) => {
        let newDateTimeFormat = item.transaction_timestamp
        newDateTimeFormat = newDateTimeFormat.replace('T', ' ')
        newDateTimeFormat = newDateTimeFormat.replace( '.000Z', '')
        newData.push({
            key: index,
            TransactionID:item.transaction_id,
            DateTime:newDateTimeFormat,
            From:item.account_number_from,
            To:item.account_number_to,
            Amount:item.amount

        })
    })
    debugger
    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'TransactionID',
            key: 'TransactionID',
        },
        {
            title: 'Date/Time',
            dataIndex: 'DateTime',
            key: 'Date/Time',
        },
        {
            title: 'From A/C',
            dataIndex: 'From',
            key: 'FromA/C'
        },
        {
            title: 'To A/C',
            dataIndex: 'To',
            key: 'ToA/C',
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount'
        }

    ]

    return <Table
        columns={columns}
        dataSource={newData}
        scroll={{
            x: props.x, y: props.y,
        }}
    />


};
export default DataTable;