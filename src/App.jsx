import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
