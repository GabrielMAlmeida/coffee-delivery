import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Checkout } from "./pages/checkout.jsx";
import { Success } from "./pages/success.jsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
  )
}
