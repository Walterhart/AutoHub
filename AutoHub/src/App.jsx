import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars, { loader as carsLoader } from "./pages/Cars/Cars";
import Layout from "./components/Layout";
import CarDetail, { loader as carDetailLoader } from "./pages/Cars/CarDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostCars, { loader as hostCarsLoader } from "./pages/Host/HostCars";
import HostCarDetail, {
  loader as hostCarDetailLoader,
} from "./pages/Host/HostCarDetail";
import HostCarInfo from "./pages/Host/HostCarInfo";
import HostCarPricing from "./pages/Host/HostCarPricing";
import HostCarImages from "./pages/Host/HostCarImages";
import Error404 from "./pages/Error/Error404";
import Error from "./pages/Error/Error";
import Login, { action as loginAction, loader as loginLoader} from "./pages/Login";
import { requireAuth } from "./utils.js/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="cars"
        element={<Cars />}
        loader={carsLoader}
        errorElement={<Error />}
      />
      <Route path="cars/:id" element={<CarDetail />} loader={carDetailLoader}   errorElement={<Error />}/>

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route path="cars" element={<HostCars />} loader={hostCarsLoader}  errorElement={<Error />}/>
        <Route
          path="cars/:id"
          element={<HostCarDetail />}
          loader={hostCarDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostCarInfo />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostCarPricing />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="images"
            element={<HostCarImages />}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
