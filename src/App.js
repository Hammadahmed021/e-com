import './App.css';
import { Home , About , Contact , Header , Footer, Products } from './components'
import { Route , Routes, Navigate} from 'react-router-dom'

function App() {
  return (
   <>
   <Header />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<About />} />
     <Route path="/products" element={<Products />} />      
    </Routes>
   <Footer />
   </>
  );
}

export default App;
