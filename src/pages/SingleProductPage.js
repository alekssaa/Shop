import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      if (error) {
        history.push("/");
      }
    }, 3000);
  }, []);

  const {
    name,
    stars,
    reviews,
    id: sku,
    company,
    images,
    price,
    stock,
  } = product;

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <PageHero title={product.name?.toUpperCase()} product={product} />
      <section className="section section-center page">
        <Link to="/products" className="btn">
          Nazad na proizvode
        </Link>
        <div className="products-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{product.name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(product.price)}</h5>
            <p className="desc">{product.description}</p>
            <p className="info">
              <span>dostupno:</span>
              {product.stock > 0
                ? `${product.stock} proizvoda na stanju`
                : "Nije na stanju"}
            </p>
            <p className="info">
              <span>ID : </span>
              {product.id}
            </p>
            <p className="info">
              <span>Brend:</span>
              {product.company}
            </p>
            <hr />
            {product.stock && <AddToCart product={product} />}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;

{
  /* const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    reseterror,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  if (error) {
    setTimeout(() => {
      history.push("/");
      reseterror();
    }, 2500);
  }

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <h1>ok</h1>
      <PageHero title={product.name.toUpperCase()} product={product} />
      <section className="section section-center page">
        <Link to="/products" className="btn">
          Nazada na proizvode
        </Link>
        <ProductImages images={product.images} />
        <div className="contenet">
          <h2>{product.name}</h2>
          <Stars stars={product.stars} reviews={product.reviews} />
          <h5 className="price">{formatPrice(product.price)}</h5>
          <p className="desc">{product.description}</p>
          <p className="info">
            <span>Dostupno:</span>{" "}
            {product.stock > 0
              ? `${product.stock} proizvoda na stanju `
              : "Proizvod nije dostupan"}
          </p>
          <p className="info">
            <span>Brend</span>
            {product.company}
          </p>
          <hr />
          {product.stock && <AddToCart product={product} />}
        </div>
      </section> */
}
