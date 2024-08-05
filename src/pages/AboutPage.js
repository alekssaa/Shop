import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title=" O nama"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="slika" />
        <article>
          <h2>Nasa prica</h2>
          <div className="underline"></div>
          <p>
            Ut occaecat commodo tempor sit veniam veniam. Adipisicing veniam
            occaecat aliquip sunt magna commodo reprehenderit. Anim occaecat
            veniam proident cupidatat sit. Reprehenderit enim duis Lorem
            reprehenderit. Ut occaecat commodo tempor sit veniam veniam.
            Adipisicing veniam occaecat aliquip sunt magna commodo
            reprehenderit. Anim occaecat veniam proident cupidatat sit.
            Reprehenderit enim duis Lorem reprehenderit.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
