import { Table } from 'antd'


const Tables = () => {
  const data = [
    {
      name: 'Name1',
      age: 10,
      address: 'address 1',
      key: '1'
    },
    {
      name: 'Name2',
      age: 20,
      address: 'address 2',
      key: '2'
    },
    {
      name: 'Name3',
      age: 30,
      address: 'address 3',
      key: '3'
    },
    {
      name: 'Name1',
      age: 10,
      address: 'address 1',
      key: '1'
    },
    {
      name: 'Name5',
      age: 20,
      address: 'address 2',
      key: '2'
    },
    {
      name: 'Name6',
      age: 30,
      address: 'address 3',
      key: '3'
    },
    {
      name: 'Name7',
      age: 10,
      address: 'address 1',
      key: '1'
    },
    {
      name: 'Name8',
      age: 20,
      address: 'address 2',
      key: '2'
    },
    {
      name: 'Name9',
      age: 30,
      address: 'address 3',
      key: '3'
    },
    {
      name: 'Name10',
      age: 10,
      address: 'address 1',
      key: '1'
    } 
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'key',
      sorter:(a,b)=>a.age - b.age
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'key'
    }
  ]
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1000, y: 300 }}
    ></Table>
  )
}

export default Tables
