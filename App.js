import About from "./Components/About";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom';
import Courses from "./Components/Courses";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Hero/>
    <About/>
   
    <Routes>
      <Route>
      <Route path='/courses' element={<Courses/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
    
     
    </div>
  );
}

export default App;
