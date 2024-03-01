import Nav from './pages/Nav/Nav';
import About from './pages/About/About';
// import Blog from './pages/Blog/Blog';
// import Contact from './pages/Contract/Contact';
// import Error from './pages/Error/Error';
// import Resume from './pages/Resume/Resume';
// import Nav from './pages/Nav/Nav';
// import Portfolio from './pages/Portfolio/Portfolio';
// import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <>
    {/* add HEADER */}
      <Nav />
      <main className="mx-3">
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

