
import ContextProvider from './Context/ContextProvider'
import Profile from './component/Profile'
import Login from './component/Login'


function App() {

  return (
    <ContextProvider>
    <Login/>
    <Profile/>
    </ContextProvider>
  )
}

export default App
