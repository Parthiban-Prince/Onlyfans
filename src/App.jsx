import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import LoginLayout from "./layout/LoginLayout";

import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import NotificationPage from "./Pages/NotificationPage/NotificationPage";
import PostPage from "./Pages/PostPage/PostPage";
import AddcardPage from "./Pages/AddcardPage/AddCardPage";
import MessagePage from "./Pages/MessagePage/MessagePage";
import CollectionPage from './Pages/CollectionPage/CollectionPage';
import SubscriptionsPage from './Pages/SubscriptionsPage/SubscriptionsPage';
import ProfilePage from "./Pages/MyProfile/ProfilePage";
import ProfileDetails from "./Component/ProfileDetails/ProfileDetails";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import DisplaysettingsPage from "./Pages/DisplaysettingPage/Displaysettings";
import AccountPage from "./Pages/AccountsettingsPage/AccountPage";
import PrivacyPage from "./Pages/PrivacysettingsPage/PrivacyPage";
import SubscriptionsettingPage from "./Pages/SubscriptionSettingPage/subcriptionsetting";
import NotificationsettingPage from "./Pages/NotificationSettingsPage/NotificationsettingPage";

import Settingscenter from "./Component/Settingscenter/Settingscenter";
import Profilesettings from "./Component/Profilesettings/Profilesettings";
import Accountsettings from "./Component/AccountRight/Accountright";
import Privacysettings from "./Component/PrivacyRight/Privacyright";
import Subscriptionsettings from "./Component/Subcriptionsright/Subscriptionsettingsright";
import Notificationsettings from "./Component/NotificationRight/NotificationRight";
import Displaysettings from "./Component/DisplaySettingsRight/DisplaySettingsRight";

import PublicProfilePage from './Pages/PublicProfile/PublicProfilePage';
import Notfound from './Component/NotFound/Notfound';



// ----- AUTH COMPONENTS -----
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
};

const RedirectIfAuthenticated = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/my/:username" replace /> : children;
};


// ----- MAIN APP -----
function App() {
  //useEffect(() => {
    //const socket = io("http://localhost:3000");
    //socket.on('connect', () => {
   //   console.log(`Connected to socket server with id: ${socket.id}`);
    //});
    //return () => socket.disconnect();
  //}, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginLayout />} errorElement={<Notfound />}>
        <Route
          index
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />

        {/* Protected Routes */}
        <Route path="my/:username" element={<MainLayout />} errorElement={<Notfound />}>
          <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="notification" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>}>
            <Route path="notificationsettings" element={<ProtectedRoute><NotificationsettingPage/></ProtectedRoute>}/>
          </Route>
          <Route path="posts/create" element={<ProtectedRoute><PostPage /></ProtectedRoute>} />
          <Route path="payments/add_card" element={<ProtectedRoute><AddcardPage /></ProtectedRoute>} />
          <Route path="chats" element={<ProtectedRoute><MessagePage /></ProtectedRoute>} />
          <Route path="collection/user-lists/subscribers/active" element={<ProtectedRoute><CollectionPage /></ProtectedRoute>} />
          <Route path="collections/user-lists/subscriptions" element={<ProtectedRoute><SubscriptionsPage /></ProtectedRoute>} />
          <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="ProfileDetails" element={<ProtectedRoute><ProfileDetails /></ProtectedRoute>} />
          <Route path="settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          <Route path="settings/profile" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          <Route path="settings/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="settings/privacy" element={<ProtectedRoute><PrivacyPage /></ProtectedRoute>} />
          <Route path="settings/subscription" element={<ProtectedRoute><SubscriptionsettingPage /></ProtectedRoute>} />
          <Route path="settings/notifications" element={<ProtectedRoute><NotificationsettingPage /></ProtectedRoute>} />
          <Route path="settings/display" element={<ProtectedRoute><DisplaysettingsPage /></ProtectedRoute>} />

          {/* Sub-settings */}
          <Route path="mobile/settings" element={<ProtectedRoute><Settingscenter /></ProtectedRoute>} />
          <Route path="settings/profile/profileSettings" element={<ProtectedRoute><Profilesettings /></ProtectedRoute>} />
          <Route path="settings/account/accountSettings" element={<ProtectedRoute><Accountsettings /></ProtectedRoute>} />
          <Route path="settings/privacy/privacySettings" element={<ProtectedRoute><Privacysettings /></ProtectedRoute>} />
          <Route path="settings/subscription/subscriptionSettings" element={<ProtectedRoute><Subscriptionsettings /></ProtectedRoute>} />
          <Route path="settings/notifications/notificationsSettings" element={<ProtectedRoute><Notificationsettings /></ProtectedRoute>} />
          <Route path="settings/display/displaySettings" element={<ProtectedRoute><Displaysettings /></ProtectedRoute>} />

          <Route path="*" element={<Notfound />} />
        </Route>

        {/* Public Profile */}
        <Route path=":username" element={<PublicProfilePage />} />

        {/* Catch-all top-level */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
