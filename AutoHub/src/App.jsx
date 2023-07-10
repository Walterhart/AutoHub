import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Cars from "./pages/Cars";
import Layout from "./components/Layout";
import CarsDetail from "./components/CarDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="cars" element={<Cars />}/>
            <Route path="cars/:id" element={<CarsDetail />}></Route>
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
