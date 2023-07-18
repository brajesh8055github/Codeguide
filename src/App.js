import Home from './pages/Home';
import Technology from './pages/Technology';
import About from './pages/About';
// import NotFound from './pages/NotFound';
import PaymentStatus from './pages/PaymentStatus';
import CoursePage from './pages/CoursePage';
import { Route,Routes,Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Coursedetails from './pages/Coursedetails';
import Contact from './pages/Contact';
import Contactstatus from './pages/Contactstatus';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg head">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold" href="/">CodeGuide</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white align-items-center">
        <li className="nav-item">
          <Link to='/' className="nav-link text-white" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link text-white">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/course-page' className="nav-link text-white">Courses</Link>
        </li>
        <li className="nav-item">
          <Link to='/technology' className="nav-link text-white">Technology</Link>
        </li>
        <a href='/contact'><button className="btn-h">Contact Us</button></a>
      </ul>
    </div>
  </div>
</nav>
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-page' element={<CoursePage />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact-status' element={<Contactstatus />} />
        <Route path='/course-details' element={<Coursedetails />} />
        <Route path='/error' element={<PaymentStatus />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms & conditions' element={<Terms />} />
      </Routes>


      
    </div>
  );
}

export default App;
