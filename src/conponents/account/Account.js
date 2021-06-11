import { Switch, Route } from 'react-router-dom'
import Login from './Login'

const Main = () => {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
    </Switch>
  )
}

export default Main
