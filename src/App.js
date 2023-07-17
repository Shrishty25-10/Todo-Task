import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import UserSign from './components/UserSign';

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route exact path='/' element={<UserSign/>}/>
            <Route exact path='/user_profile' element={<Home/>}/>
          </Routes>
        </Router>
       
      </div>
    </>
  )
}

export default App
