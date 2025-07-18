import React, { useState } from "react"
import {Routes,Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage/LoginPage"
import HomePage from "./Pages/HomePage/HomePage"
import NotificationPage from "./Pages/NotificationPage/NotificationPage"
import PostPage from "./Pages/PostPage/PostPage"
import AddcardPage from "./Pages/AddcardPage/AddCardPage"
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
import ProtectedRoute from "./routes/ProtectedRouted/Protected"
import Settingscenter from "./Component/Settingscenter/Settingscenter"
import Profilesettings from "./Component/Profilesettings/Profilesettings"
import Accountsettings from "./Component/AccountRight/Accountright"
import Privacysettings from "./Component/PrivacyRight/Privacyright"
import Subscriptionsettings from "./Component/Subcriptionsright/Subscriptionsettingsright"
import Notificationsettings from "./Component/NotificationRight/NotificationRight"
import Displaysettings from "./Component/DisplaySettingsRight/DisplaySettingsRight"
import { useEffect } from "react"
import SideNavigation from "./Component/SideNavigation/SideNavigation"


function App() {




  const [auth ,setAuth] = useState(false)

useEffect(() => {
  const token = localStorage.getItem("token");
  setAuth(!!token);
}, []);


  
  return (
        <Routes>
          <Route path="/" element={auth ? <HomePage/> : <LoginPage/>}/>

          
                    <Route path="/:user" element={ <ProtectedRoute><HomePage/></ProtectedRoute>}/>
          <Route path="/my/notification" element={ <ProtectedRoute><NotificationPage/></ProtectedRoute>    }>
              <Route path="settings" element={<ProtectedRoute><NotificationsettingPage/></ProtectedRoute>}/>
          </Route>
          <Route path="/posts/create" element={ <ProtectedRoute> <PostPage/> </ProtectedRoute>  }/>
          <Route path='/my/payments/add_card' element={<ProtectedRoute><AddcardPage/></ProtectedRoute>}/>
          <Route path='my/chats/' element={<ProtectedRoute><MessagePage/></ProtectedRoute>}/>
          <Route path='my/collection/user-lists/subscribers/active' element={<ProtectedRoute><CollectionPage/></ProtectedRoute>}/>
          <Route path="my/collections/user-lists/subscriptions" element={<ProtectedRoute><SubscriptionsPage/></ProtectedRoute>}/>
          <Route path="/Profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
          <Route path="/my/settings/profile" element={<ProtectedRoute><SettingsPage/></ProtectedRoute>}/>
          <Route path="/my/settings/account" element={<ProtectedRoute><AccountPage/></ProtectedRoute>}/>
          <Route path="/my/settings/privacy" element={<ProtectedRoute><PrivacyPage/></ProtectedRoute>}/>
          <Route path="/my/settings/subscription" element={<ProtectedRoute><SubscriptionsettingPage/></ProtectedRoute>}/>
          <Route path="/my/settings/notifications" element={<ProtectedRoute><NotificationsettingPage/></ProtectedRoute>}/>
          <Route path="/my/settings/display" element={<ProtectedRoute><DisplaysettingsPage/></ProtectedRoute>}/>
          <Route path="/my/settings" element={<ProtectedRoute><Settingscenter/></ProtectedRoute>}/>
          <Route path="/my/settings/profile/profileSettings" element={<ProtectedRoute><Profilesettings/></ProtectedRoute>}/>
          <Route path="/my/settings/account/accountSettings" element={<ProtectedRoute><Accountsettings/></ProtectedRoute>}/>
          <Route path="/my/settings/privacy/privacySettings" element={<ProtectedRoute><Privacysettings/></ProtectedRoute>}/>
          <Route path="/my/settings/subscription/subscriptionSettings" element={<ProtectedRoute><Subscriptionsettings/></ProtectedRoute>}/>
          <Route path="/my/settings/notifications/notificationsSettings" element={<ProtectedRoute><Notificationsettings/></ProtectedRoute>}/>
          <Route path="/my/settings/display/displaySettings" element={<ProtectedRoute><Displaysettings/></ProtectedRoute>}/>
          
          </Routes> 
  )
}

export default App







