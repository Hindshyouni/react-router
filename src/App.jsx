import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";


function App() {
  return (
    <>
      <NavbarComponent />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
