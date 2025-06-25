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
import SettingsPage from "./Pages/SettingsPage/SettingsPage"
import DisplaysettingsPage from "./Pages/DisplaysettingPage/Displaysettings"
import AccountPage from "./Pages/AccountsettingsPage/AccountPage"
import PrivacyPage from "./Pages/PrivacysettingsPage/PrivacyPage"
import SubscriptionsettingPage from "./Pages/SubscriptionSettingPage/subcriptionsetting"
import NotificationsettingPage from "./Pages/NotificationSettingsPage/NotificationsettingPage"



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
          <Route path="/my/settings/profile" element={<SettingsPage/>}/>
          <Route path="/my/settings/account" element={<AccountPage/>}/>
          <Route path="/my/settings/privacy" element={<PrivacyPage/>}/>
          <Route path="/my/settings/subscription" element={<SubscriptionsettingPage/>}/>
          <Route path="/my/settings/notifications" element={<NotificationsettingPage/>}/>
          <Route path="/my/settings/display" element={<DisplaysettingsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
