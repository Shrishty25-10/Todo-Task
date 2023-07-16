import './App.css'
import Home from './components/Home';
import Modal from './components/Modal';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </Router>
       
      </div>
    </>
  )
}

export default App
