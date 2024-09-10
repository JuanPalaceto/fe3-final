
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<Home/>} />
        <Route path={routes.Contact} element={<Contact/>} />
        <Route path={routes.Favs} element={<Favs />} />
        <Route path={routes.Detail} element={<Detail/>} />
        <Route path={routes.NotFound} element={<h1>Error 404: Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
