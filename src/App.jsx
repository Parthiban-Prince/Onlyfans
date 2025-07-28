import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
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

import Notfound from './Component/NotFound/Notfound';
import ProtectedRoute from "./routes/ProtectedRouted/Protected";
import ProfileDetails from "./Component/ProfileDetails/ProfileDetails";
import PublicProfileLayout from "./layout/PublicProfileLayout";

function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginLayout />}>
      <Route index element={<LoginPage />} />
      <Route path="/:user" element={<MainLayout />}>
        <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/:user/notification" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />

        <Route path="/:user/posts/create" element={<ProtectedRoute><PostPage /></ProtectedRoute>} />
        <Route path="/:user/payments/add_card" element={<ProtectedRoute><AddcardPage /></ProtectedRoute>} />
        <Route path="/:user/chats" element={<ProtectedRoute><MessagePage /></ProtectedRoute>} />
        <Route path="/:user/collection/user-lists/subscribers/active" element={<ProtectedRoute><CollectionPage /></ProtectedRoute>} />
        <Route path="/:user/collections/user-lists/subscriptions" element={<ProtectedRoute><SubscriptionsPage /></ProtectedRoute>} />
        <Route path="/:user/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
         <Route path="/:user/ProfileDetails" element={<ProtectedRoute><ProfileDetails /></ProtectedRoute>} />

        {/* Settings Pages */}
        <Route path="/:user/settings" element={<ProtectedRoute><Settingscenter /></ProtectedRoute>} />
        <Route path="/:user/settings/profile" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="/:user/settings/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
        <Route path="/:user/settings/privacy" element={<ProtectedRoute><PrivacyPage /></ProtectedRoute>} />
        <Route path="/:user/settings/subscription" element={<ProtectedRoute><SubscriptionsettingPage /></ProtectedRoute>} />
        <Route path="/:user/settings/notifications" element={<ProtectedRoute><NotificationsettingPage /></ProtectedRoute>} />
        <Route path="/:user/settings/display" element={<ProtectedRoute><DisplaysettingsPage /></ProtectedRoute>} />

        {/* Sub-settings */}
        <Route path="/:user/settings/profile/profileSettings" element={<ProtectedRoute><Profilesettings /></ProtectedRoute>} />
        <Route path="/:user/settings/account/accountSettings" element={<ProtectedRoute><Accountsettings /></ProtectedRoute>} />
        <Route path="/:user/settings/privacy/privacySettings" element={<ProtectedRoute><Privacysettings /></ProtectedRoute>} />
        <Route path="/:user/settings/subscription/subscriptionSettings" element={<ProtectedRoute><Subscriptionsettings /></ProtectedRoute>} />
        <Route path="/:user/settings/notifications/notificationsSettings" element={<ProtectedRoute><Notificationsettings /></ProtectedRoute>} />
        <Route path="/:user/settings/display/displaySettings" element={<ProtectedRoute><Displaysettings /></ProtectedRoute>} />

        {/* Catch-all 404 */}
        <Route path="*" element={<Notfound />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
