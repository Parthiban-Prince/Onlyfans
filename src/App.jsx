import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
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
import ProtectedRoute from "./Component/ProtectedRouted/Protected"



function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={ <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>}/>

          <Route path="/my/notification" element={ <ProtectedRoute><NotificationPage/></ProtectedRoute>    }/>
          <Route path="/posts/create" element={ <ProtectedRoute> <PostPage/> </ProtectedRoute>  }/>
          <Route path='/my/payments/add_card' element={<ProtectedRoute><AddcardPage/></ProtectedRoute>}/>
          <Route path='my/chats/' element={<ProtectedRoute><MessagePage/></ProtectedRoute>}/>
          <Route path='my/collection/user-lists/subscribers/active' element={<ProtectedRoute><CollectionPage/></ProtectedRoute>}/>
          <Route path="my/collections/user-lists/subscriptions" element={<ProtectedRoute><SubscriptionsPage/></ProtectedRoute>}/>
          <Route path="/_idu507114711" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
          <Route path="/my/settings/profile" element={<ProtectedRoute><SettingsPage/></ProtectedRoute>}/>
          <Route path="/my/settings/account" element={<ProtectedRoute><AccountPage/></ProtectedRoute>}/>
          <Route path="/my/settings/privacy" element={<ProtectedRoute><PrivacyPage/></ProtectedRoute>}/>
          <Route path="/my/settings/subscription" element={<ProtectedRoute><SubscriptionsettingPage/></ProtectedRoute>}/>
          <Route path="/my/settings/notifications" element={<ProtectedRoute><NotificationsettingPage/></ProtectedRoute>}/>
          <Route path="/my/settings/display" element={<ProtectedRoute><DisplaysettingsPage/></ProtectedRoute>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App







