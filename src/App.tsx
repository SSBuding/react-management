import router from '@/router'
import { useRoutes, Link } from 'react-router-dom'

function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">

      <Link to='/home'>Home</Link>|
      <Link to='/about'>About</Link>
      {outlet}
    </div>
  )
}

export default App
