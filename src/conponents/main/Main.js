import { Layout, Breadcrumb } from 'antd'
import Table from './table/Tables'
import Forms from './table/Forms'

const {Content } = Layout
const Main = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {/* <Table></Table> */ }
        <Forms></Forms>
      </div>
    </Content>
  )
}

export default Main
