import "./App.css";

import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React, {useContext} from "react";

import {AuthContext} from "./Hooks/Auth/AuthContext";
import CreatePost from "./AppPages/CreatePost";
import Feed from "./AppPages/Feed";
import Header from "./Components/Header/Header";
import Login from "./AppPages/Login";
import Post from "./AppPages/Post";
import Profile from "./AppPages/Profile";
import Relations from "./AppPages/Relations";
import Settings from "./AppPages/Settings";

function App() {
  // / in route means from base address, not relative
  const {isAuth} = useContext(AuthContext); // without this, component will never re render unless page is reloaded

  return (
      <Router>
        {!isAuth ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/:username" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createpost" element={<CreatePost />} />
              {/* <Route path="/notifications" element={<Notifications />} /> */}
              <Route path="/relations" element={<Relations />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
            {/* Profile page */}
          </div>
        )}
      </Router>
  );
}

export default App;
