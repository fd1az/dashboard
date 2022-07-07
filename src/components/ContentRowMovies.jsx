import React from 'react';
import CardTotals from './CardTotals';

const ContentRowMovies = () => {
  const cardProps = [
    {
      title: 'MOVIES IN DATA BASE',
      color: 'primary',
      quantity: 21,
      icon: 'fas fa-film',
    },
    {
      title: 'TOTAL AWARDS',
      color: 'success',
      quantity: 79,
      icon: 'fas fa-award',
    },
    {
      title: 'ACTORS QUANTITY',
      color: 'warning',
      quantity: 49,
      icon: 'fas fa-user',
    },
    {},
  ];

  return (
    <>
      {/* <!-- Content Row Movies--> */}
      <div className="row">
        {cardProps.map((cardObj, i) => (
          <CardTotals
            title={cardObj.title}
            color={cardObj.color}
            quantity={cardObj.quantity}
            icon={cardObj.icon}
            key={cardObj.title + '-' + i}
          />
        ))}
      </div>
    </>
  );
};

export default ContentRowMovies;
