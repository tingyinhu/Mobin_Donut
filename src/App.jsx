// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Header from "./Components/global/Header";
import Footer from "./Components/global/Footer";
import HomePage from "./Components/page/HomePage";
import CheckoutPage from "./Components/page/CheckoutPage";
import NotFound from "./Components/page/NotFound";

const Layout = () => (
  <>
    <Header />
    <main className="min-h-screen grid grid-cols-12 gap-5 px-5 md:px-0">
      <div className="hidden md:block md:col-span-1"></div>
      <div className="col-span-12 md:col-span-10">
        <Outlet />
      </div>
      <div className="hidden md:block md:col-span-1"></div>
    </main>
    <Footer />
  </>
);

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (donut) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === donut.id);
      if (exists) return prev;
      return [...prev, { ...donut, qty: 1 }];
    });
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<HomePage cart={cart} addToCart={addToCart} />}
          />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
