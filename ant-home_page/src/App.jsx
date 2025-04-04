import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import Navbar  from './components/NavBar.jsx';




function App() {
  return(
    <>

    <Router>
    <Navbar />

      <Routes>
        <Route path='/' element = { < HomePage/> }/>
      </Routes>
    </Router>
    
  

    </>
  )
}

export default App;