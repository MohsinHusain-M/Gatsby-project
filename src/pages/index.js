import { Link, graphql } from "gatsby";
import React from "react";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
export default function IndexPage({
  data: {
    checMerchant: merchant,
    allChecCategory: categories,
    allChecProduct: products,
  },
}) {
  return (
    <React.Fragment>
      {/*<pre>{JSON.stringify(merchant, null, 2)}</pre>*/}
      <h1>{merchant.business_name}</h1>

      <h3>
        <Link to="/categories">Categories</Link>
      </h3>
      <CategoryList categories={categories.nodes} />

      <h3>
        <Link to="/product">Products</Link>
      </h3>
      <ProductList products={products.nodes} />
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  fragment PriceInfo on ChecProduct {
    price {
      formatted_with_symbol
    }
  }

  query IndexPageQuery {
    checMerchant {
      business_name
    }

    allChecCategory {
      nodes {
        name
        slug
      }
    }

    allChecProduct {
      nodes {
        permalink
        name
        ...PriceInfo
      }
    }
  }
`;
