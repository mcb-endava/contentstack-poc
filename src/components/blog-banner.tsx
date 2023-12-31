import React from 'react';
import { HeroBanner } from "../typescript/components";

export default function BlogBanner({ blog_banner }: {blog_banner : HeroBanner}) {

  return (
    <div className='blog-page-banner' style={{ background: `${blog_banner?.bg_color}` }}>
      <div className='blog-page-content'>
        {blog_banner.banner_title && (
          <h1 {...blog_banner.$?.banner_title as {}} className='hero-title'>
            {blog_banner.banner_title}
          </h1>
        )}

        {blog_banner.banner_description && (
          <p {...blog_banner.$?.banner_description as {}} className='hero-description'>
            {blog_banner.banner_description}
          </p>
        )}
      </div>
    </div>
  );
}
