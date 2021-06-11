import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Footers from './conponents/footer/Footers'
import Headers from './conponents/header/Headers'
import Main from './conponents/main/Main'
import Menus from './conponents/menu/Menus'
import Account from './conponents/account/Account'
import Login from './conponents/account/Login'

function App() {
  return (
    <Router className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Menus></Menus>
        <Layout className="site-layout">
          <Headers />
          <Main />
          <Footers />
        </Layout>
        {/* <Login/> */}
        {/* <Account/> */}
      </Layout>
    </Router>
  )
}

export default App
