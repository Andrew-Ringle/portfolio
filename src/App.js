import './App.css';
import Profile from './pages/Profile.jsx'
import NavBar from './components/NavBar.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'





function App() {
  return (
  <>
    
    
    <div className = 'HomePage'>
      
      
      <NavBar />
      <Profile href = '#profile' />
      <About href = '#about'/>
      <Experience href = '#expereince' />
      <Contact href = '#expereince'/>
    

    </div>
  </>   
    
  );
}

export default App;
