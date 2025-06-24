import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage/LoginPage"
import HomePage from "./Pages/HomePage/HomePage"
import NotificationPage from "./Pages/NotificationPage/NotificationPage"
import PostPage from "./Pages/PostPage/PostPage"
import AddcardPage from "./Pages/AddcardPage/addCardPage"



function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<HomePage/>}/>
          <Route path="/my/notification" element={<NotificationPage/>}/>
          <Route path="/posts/create" element={<PostPage/>}/>
          <Route path='/my/payments/addcard' element={<AddcardPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
