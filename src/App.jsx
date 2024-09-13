
import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={routes.Home} element={<Home/>} />
        <Route path={routes.Contact} element={<Contact/>} />
        <Route path={routes.Favs} element={<Favs />} />
        <Route path={routes.Detail} element={<Detail/>} />
        <Route path={routes.NotFound} element={<h1>Error 404: Page Not Found</h1>} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
