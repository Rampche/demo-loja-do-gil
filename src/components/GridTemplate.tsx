import React from 'react';

const GridTemplate = () => {
  interface CardProps {
    image: string;
    title: string;
    price: number;
  }

  const cards: CardProps[] = [
    {
      image:
        'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7703654710259757377/products/69404206.TSHIRT_DOUBLE_TRKK_JUMP_FOREST-2.jpg',
      title: 'Camisa Básica',
      price: 10,
    },
    {
      image:
        'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7703654710259757377/products/69404206.TSHIRT_DOUBLE_TRKK_JUMP_FOREST-2.jpg',
      title: 'Camisa Básica',
      price: 10,
    },
    {
      image:
        'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7703654710259757377/products/69404206.TSHIRT_DOUBLE_TRKK_JUMP_FOREST-2.jpg',
      title: 'Camisa Básica',
      price: 10,
    },
    {
      image:
        'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7703654710259757377/products/69404206.TSHIRT_DOUBLE_TRKK_JUMP_FOREST-2.jpg',
      title: 'Camisa Básica',
      price: 10,
    },
    {
      image:
        'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7703654710259757377/products/69404206.TSHIRT_DOUBLE_TRKK_JUMP_FOREST-2.jpg',
      title: 'Camisa Básica',
      price: 10,
    },
    {
      image:
        'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7703654710259757377/products/69404206.TSHIRT_DOUBLE_TRKK_JUMP_FOREST-2.jpg',
      title: 'Camisa Básica',
      price: 10,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 space-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:px-14 px-4 py-4 justify-center items-center">
      {cards.map(({ image, title, price }, index) => (
        <div
          className="bg-[#F7F7F7] hover:bg-[#1a6887] text-[#1a6887] hover:text-[#F7F7F7] rounded-lg shadow font-primary h-24 flex justify-center items-center leading-loose tracking-wide"
          key={index}
        >
          <a>{image}</a>
          <h1 className="text-md font-normal p-2">{title}</h1>
          <p className="text-md font-normal p-2">{price}</p>
        </div>
      ))}
    </div>
  );
};

export default GridTemplate;
