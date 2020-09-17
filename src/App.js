import React from 'react';
import './App.css';
import FullName from "./components/profile/FullName"
import ProfilePhoto from './components/profile/profilePhoto';
import Adress from './components/profile/Adress';

function App() {
  return (
    <div className="app">
   <FullName/>
   <Adress/>
   <ProfilePhoto/>
 
    </div>
  );
}

export default App;
