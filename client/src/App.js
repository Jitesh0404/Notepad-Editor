import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// lazy loading
const LoginOrRegister = lazy(() => import("./components/pages/LoginOrRegister")); 
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginOrRegister />} />
    </Routes>
  );
};

export default App;
