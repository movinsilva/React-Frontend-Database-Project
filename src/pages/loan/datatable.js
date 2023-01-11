import {Table, Tag} from "antd";
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         sorter: (a, b) => a.age - b.age,
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         filters: [
//             {
//                 text: 'London',
//                 value: 'London',
//             },
//             {
//                 text: 'New York',
//                 value: 'New York',
//             },
//         ],
//         onFilter: (value, record) => record.address.indexOf(value) === 0,
//     },
// ];
// const data = [];
// for (let i = 1; i <= 10; i++) {
//     data.push({
//         key: i,
//         name: 'John Brown',
//         age: Number(`${i}2`),
//         address: `New York No. ${i} Lake Park`,
//         description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
//     });
// }
const DataTable = (props) => {
    return <Table
        columns={props.columns}
        dataSource={props.data}
        scroll={{
            x: props.x, y: props.y,
        }}
    />


};
export default DataTable;