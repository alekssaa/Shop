import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Prijavi se na nasu email listu:</h3>
        <div className="content">
          <p>
            Eiusmod proident labore officia ut non officia culpa et sint.
            Aliquip tempor fugiat officia voluptate minim ex labore voluptate
            elit voluptate sunt excepteur amet reprehenderit. Enim do magna
            exercitation et sint aliqua eu aliquip ipsum velit do. Minim dolor
            cillum tempor amet duis deserunt magna.
          </p>
          <form className="contact-form">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Unesite email"
            />
            <button className="submit-btn" type="submit">
              Pretplati se
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
