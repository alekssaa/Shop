import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images }) => {
  const [maineImg, setMaineImg] = useState(images[0].url);
  return (
    <Wrapper>
      <img src={maineImg} className="main" alt="main-img" />
      <div className="gallery">
        {images.map((image) => {
          return (
            <img
              src={image.url}
              className={`${image.url === maineImg ? "active" : ""}`}
              key={image.id}
              onClick={() => {
                setMaineImg(image.url);
              }}
            ></img>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 4px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
