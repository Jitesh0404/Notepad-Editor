import { lazy,Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/commonComponents/PrivateRoute";
// lazy loading
const LoginOrRegister = lazy(() =>
  import("./components/pages/LoginOrRegister")
);
const Home = lazy(() => import("./components/pages/Home"));
const App = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginOrRegister />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
};

export default App;
