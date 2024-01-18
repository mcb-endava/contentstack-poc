import React from 'react';
import { Link } from 'react-router-dom';
import { SectionWithCards } from "../typescript/components";

export default function CardSection({ cards }: SectionWithCards) {

  return (
    <div className='demo-section'>
      {cards?.map((card) => (
        <div className='cards' key={card.title_h3}>
          {card.image && (
            <div style={{ height: '100px', marginBottom: '15px'}}>
              <img 
              style={{ objectFit: 'cover', width: '100%', height: '100%'}}
              src={card.image.url}
              alt={card.image.filename}
              className="blog-post-img"
              {...(card.image.$?.url as {})}
              />
            </div>
          )}
          {card.title_h3 && <h3 {...card.$?.title_h3 as {}}>{card.title_h3}</h3>}
          {card.description && <p {...card.$?.description as {}}>{card.description}</p>}
          <div className='card-cta'>
            {card.call_to_action.title && card.call_to_action.href && (
              <Link to={card.call_to_action.href} className='btn primary-btn' {...card.call_to_action.$?.title as {}}>
                {card.call_to_action.title}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
