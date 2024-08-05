import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <maine>
      <PageHero title="Naplata"></PageHero>
      <Wrapper className="page">Naplata</Wrapper>
    </maine>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
