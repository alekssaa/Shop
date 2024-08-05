import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <div className="contenet">
        <h1>
          Dizajnirajte svoju zonu <br />
          Komfora
        </h1>
        <p>
          Sint sint id laboris voluptate anim nostrud cupidatat veniam do
          ullamco commodo minim. Irure ea duis culpa laborum pariatur aliqua do
          cupidatat sint excepteur pariatur quis. Deserunt consequat irure ipsum
          occaecat fugiat id officia laboris excepteur irure cillum ex. Sunt
          deserunt proident aliquip anim Lorem. Mollit magna commodo veniam
          labore elit do ea eiusmod ea.
        </p>
        <Link to="/products" className="btn hero-btn">
          Kupi sada
        </Link>
      </div>
      <article className="img-container">
        <img src={heroBcg} alt="slika" className="main-img"></img>
        <img src={heroBcg2} alt="slika2" className="accent-img"></img>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
