import Nav from "./pages/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Nav />

      <main className="appCSS">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
