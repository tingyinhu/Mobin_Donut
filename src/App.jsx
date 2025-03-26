import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./Components/global/Header";
import Footer from "./Components/global/Footer";
import HomePage from "./Components/page/HomePage";
import CheckoutPage from "./Components/page/CheckoutPage";
import NotFound from "./Components/page/NotFound";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  return (
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
};

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (donut) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === donut.id);
      if (exists) return prev;
      return [...prev, { ...donut, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCart((prev) => 
      prev.map(item => 
        item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path="/" 
            element={<HomePage cart={cart} addToCart={addToCart} />} 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckoutPage 
                cart={cart} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;