import logo from './logo.svg';
import './App.css';
import RegistryPage from "./components/shared/RegistryPage";
import LoginPage from "./components/pages/LoginPage";
import Post from "./components/components/PostComponent";
import NavigationBar from "./components/components/NavigationBar";
import ProfileHolder from "./components/components/ProfileHolder";
import React from "react";
import NewPost from "./components/components/NewPost";

function App() {

    const divs = Array.from({ length: 10 }, (_, index) => (
        <Post likeNumber={120}></Post>
    ));

  return (
      <div>
          <NavigationBar></NavigationBar>
          <ProfileHolder></ProfileHolder>
          <div className="inline-grid w-[100vw] mt-[10vh] pl-[4vw] gap-y-4 pt-10 h-[88vh] overflow-y-scroll">
              <NewPost></NewPost>
              {divs}
          </div>
      </div>
  );
}

export default App;
