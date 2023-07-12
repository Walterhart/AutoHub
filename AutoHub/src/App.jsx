import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Cars from "./pages/Cars/Cars";
import Layout from "./components/Layout";
import CarsDetail from "./pages/Cars/CarDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostCars from "./pages/Host/HostCars";
import HostCarDetail from "./pages/Host/HostCarDetail";
import HostCarInfo from "./pages/Host/HostCarInfo";
import HostCarPricing from "./pages/Host/HostCarPricing";
import HostCarImages from "./pages/Host/HostCarImages";
import Error404 from "./pages/Error/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:id" element={<CarsDetail />}></Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="cars" element={<HostCars />} />
              <Route path="cars/:id" element={<HostCarDetail />}>
                <Route index element={<HostCarInfo/>}/>
                <Route path="pricing" element={<HostCarPricing/>} />
                <Route path="images" element={<HostCarImages/>}/>
              </Route>
            </Route>
            <Route path="*" element={<Error404/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
