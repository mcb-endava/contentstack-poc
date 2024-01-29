import React from 'react';
import { Link } from 'react-router-dom';
import { SectionWithActivityCards } from "../typescript/components";

export default function ActivityCardSection({ activities }: SectionWithActivityCards) {

  return (
    <div className='demo-section'>
      {activities?.map((card) => (
        <div className='cards' key={card.title}>
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
          {card.title && <h3 {...card.$?.title as {}}>{card.title}</h3>}
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
