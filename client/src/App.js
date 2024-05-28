import { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// lazy loading
const LoginOrRegister = lazy(() =>
  import("./components/pages/LoginOrRegister")
);
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginOrRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
