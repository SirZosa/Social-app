import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './page/layout/layout'
import Home from './page/home/home'
import UserPage from './page/user-page/user-page'
import Follow from './page/follow/follow'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='*' element={<h1 style={{textAlign:'center'}}>404 Not Found</h1>} />
          <Route path='user/:id' element={<UserPage/>}/>
          <Route path='user/:id/follow' element={<Follow/>}/>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
