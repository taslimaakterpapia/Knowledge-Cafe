import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&display=swap');
</style>

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
