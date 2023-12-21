import logo from './logo.svg';
import './App.css';
import RegistryPage from "./components/shared/RegistryPage";
import LoginPage from "./components/pages/LoginPage";
import Post from "./components/components/PostComponent";
import Notification from './components/components/Notification';
import NavigationBar from "./components/components/NavigationBar";
import ProfileHolder from "./components/components/ProfileHolder";
import React from "react";
import NewPost from "./components/components/NewPost";
import SuggestionHolder from "./components/components/SuggestionHolder";
import PagePost from "./components/pages/PagePost";
import HomePage from "./components/HomePage/HomePage";
import AssociationForm from "./components/pages/AssociationForm";
import Settings from "./components/components/settings";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error from "./components/pages/Error404";


function App() {


  return (
      <React.StrictMode>
              <Router>
                  <Routes>
                      <Route path="/Posts" element={<PagePost/>} />
                      <Route path='/Login' element={<LoginPage/>} />
                      <Route path={"/"} element={<HomePage/>}/>
                      <Route path="/association-form" element={<AssociationForm/>} />
                      <Route path="/Settings" element={<Settings/>}/>
                      <Route path="/*" element={<Error/>} />
                  </Routes>
              </Router>
      </React.StrictMode>
  );
}

export default App;
