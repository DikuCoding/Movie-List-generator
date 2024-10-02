import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import MovieList from './components/MovieList';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar />
        <Outlet/>
    </div>
  );
}

export default App;
