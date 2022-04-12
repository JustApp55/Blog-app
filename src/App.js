import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Show from './components/Show'
import Edit from './components/Edit'
import Create from './components/Create'

function App() {
  return (
    <Router className="App">
          <nav id="home">
            <Link to='/'>HomePage</Link>
          </nav>
      <Routes className="route">
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Show/>}/>
        <Route path='/:id/edit' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </Router>
  );
}

export default App;
