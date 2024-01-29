import React from "react";
import { Link } from "react-router-dom";
import { SectionWithProducts } from "../typescript/components";

export default function ProductSection({
  product_reference: products,
}: SectionWithProducts) {

  return (
    <div className="home-featured-blogs">
      {products?.map((product) => (
        <div className="featured-blog" key={product.title}>
          {product.featured_image[0] && (
            <div>
              <img style={{ margin: 'auto', display: 'block'}}
              src={product.featured_image[0].url}
              alt={product.featured_image[0].filename}
              className="blog-post-img"
              {...(product.featured_image[0].$?.url as {})}
              />
            </div>
          )}
          <div className="featured-content">
            {product.title && <h2 {...(product.$?.title as {})}>{product.title}</h2>}
            <div>
            {product.price && <h3 {...(product.$?.price as {})}>Price: {product.price}</h3>}
            </div>
            {product.url && (
              <Link to={'/'} className="blogpost-readmore">
                {`${product.call_to_action?.title} -->`}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
