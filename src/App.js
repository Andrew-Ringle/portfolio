import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile.jsx'
import NavBar from './components/NavBar.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx'



function App() {
  return (
  <>
    
    <div className = 'HomePage'>
      
      <NavBar />
      <Profile href = '#profile' />
      <About href = '#about'/>
      <Experience href = '#expereince' />

    </div>
  </>   
    
  );
}

export default App;
