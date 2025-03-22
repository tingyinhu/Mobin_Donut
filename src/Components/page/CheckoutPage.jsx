// CheckoutPage.jsx
import React from "react";
import CheckoutContent from "../section/CheckoutPage/CheckoutContent";

const CheckoutPage = ({ cart }) => {
  return (
      <CheckoutContent cart={cart} />
  );
};

export default CheckoutPage;