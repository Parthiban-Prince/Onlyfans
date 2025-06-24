import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage/LoginPage"
import HomePage from "./Pages/HomePage/HomePage"
import NotificationPage from "./Pages/NotificationPage/NotificationPage"
import PostPage from "./Pages/PostPage/PostPage"
import AddcardPage from "./Pages/AddcardPage/addCardPage"
import MessagePage from "./Pages/MessagePage/MessagePage"
import CollectionPage from './Pages/CollectionPage/CollectionPage'
import SubscriptionsPage from './Pages/SubscriptionsPage/SubscriptionsPage'
import ProfilePage from "./Pages/MyProfile/ProfilePage"



function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<HomePage/>}/>
          <Route path="/my/notification" element={<NotificationPage/>}/>
          <Route path="/posts/create" element={<PostPage/>}/>
          <Route path='/my/payments/add_card' element={<AddcardPage/>}/>
          <Route path='my/chats/' element={<MessagePage/>}/>
          <Route path='my/collection/user-lists/subscribers/active' element={<CollectionPage/>}/>
          <Route path="my/collections/user-lists/subscriptions" element={<SubscriptionsPage/>}/>
          <Route path="/_idu507114711" element={<ProfilePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
