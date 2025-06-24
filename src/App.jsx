import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage/LoginPage"
import HomePage from "./Pages/HomePage/HomePage"
import NotificationPage from "./Pages/NotificationPage/NotificationPage"
import PostPage from "./Pages/PostPage/PostPage"


function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<HomePage/>}/>
          <Route path="/my/notification" element={<NotificationPage/>}/>
          <Route path="/posts/create" element={<PostPage/>}/>
          <Route path="/my/payments/add_card" element={<PostPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
