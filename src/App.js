import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "./components/Fallback/Fallback";
import Layout from "./components/Layout/Layout";

const Home = React.lazy(() => import("./containers/Home/Home"));
const Login = React.lazy(() => import("./containers/Login/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
