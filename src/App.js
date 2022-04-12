import React from 'react';
import Header from "./components/Header.js";
import DogImages from "./components/DogImages.js"
import AddDogs from "./components/AddDogs.js"

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <h2 className='subtitle'>Um site para quem ama cachorrinhos!</h2>
      <DogImages/>
      <AddDogs/>
    </div>
  );
}

export default App;
