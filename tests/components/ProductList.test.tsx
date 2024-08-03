import React from 'react';
import ProductList from '../../src/components/ProductList';

import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

const products = [
  {
    id: 174,
    title: 'Prada Women Bag',
    description:
      "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    category: 'womens-bags',
    price: 599.99,
    discountPercentage: 18.3,
    rating: 3.52,
    stock: 43,
    tags: ['fashion accessories', 'designer bags'],
    brand: 'Prada',
    sku: 'WXX4YTJM',
    weight: 4,
    dimensions: { width: 23.45, height: 16.1, depth: 5.78 },
    warrantyInformation: '1 week warranty',
    shippingInformation: 'Ships overnight',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 5,
        comment: 'Excellent quality!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Samantha Howard',
        reviewerEmail: 'samantha.howard@x.dummyjson.com',
      },
      {
        rating: 4,
        comment: 'Would buy again!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Henry Hill',
        reviewerEmail: 'henry.hill@x.dummyjson.com',
      },
      {
        rating: 3,
        comment: 'Not worth the price!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Lucas Ramirez',
        reviewerEmail: 'lucas.ramirez@x.dummyjson.com',
      },
    ],
    returnPolicy: '7 days return policy',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: new Date('2024-05-23T08:56:21.627Z'),
      updatedAt: new Date('2024-05-23T08:56:21.627Z'),
      barcode: '4590351278063',
      qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
    },
    images: [
      'https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png',
      'https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/2.png',
      'https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/3.png',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/thumbnail.png',
  },
  {
    id: 90,
    title: 'Puma Future Rider Trainers',
    description:
      'The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.',
    category: 'mens-shoes',
    price: 89.99,
    discountPercentage: 3.64,
    rating: 4.85,
    stock: 10,
    tags: ['footwear', 'casual shoes'],
    brand: 'Puma',
    sku: '64ORN32I',
    weight: 8,
    dimensions: { width: 14.58, height: 25.54, depth: 19.57 },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 5,
        comment: 'Very happy with my purchase!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Lucas Allen',
        reviewerEmail: 'lucas.allen@x.dummyjson.com',
      },
      {
        rating: 4,
        comment: 'Awesome product!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Mason Pearson',
        reviewerEmail: 'mason.pearson@x.dummyjson.com',
      },
      {
        rating: 4,
        comment: 'Very satisfied!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Hunter Gordon',
        reviewerEmail: 'hunter.gordon@x.dummyjson.com',
      },
    ],
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: 9,
    meta: {
      createdAt: new Date('2024-05-23T08:56:21.627Z'),
      updatedAt: new Date('2024-05-23T08:56:21.627Z'),
      barcode: '3562849555769',
      qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
    },
    images: [
      'https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png',
      'https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png',
      'https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png',
      'https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png',
  },
  {
    id: 101,
    title: 'Apple AirPods Max Silver',
    description:
      'The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.',
    category: 'mobile-accessories',
    price: 549.99,
    discountPercentage: 11.7,
    rating: 3.11,
    stock: 7,
    tags: ['electronics', 'over-ear headphones'],
    brand: 'Apple',
    sku: 'HPK82VDE',
    weight: 4,
    dimensions: { width: 7.73, height: 18.36, depth: 17.87 },
    warrantyInformation: '3 months warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 1,
        comment: 'Waste of money!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Harper Kelly',
        reviewerEmail: 'harper.kelly@x.dummyjson.com',
      },
      {
        rating: 3,
        comment: 'Not as described!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Abigail Rivera',
        reviewerEmail: 'abigail.rivera@x.dummyjson.com',
      },
      {
        rating: 5,
        comment: 'Excellent quality!',
        date: new Date('2024-05-23T08:56:21.627Z'),
        reviewerName: 'Nora Russell',
        reviewerEmail: 'nora.russell@x.dummyjson.com',
      },
    ],
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: 2,
    meta: {
      createdAt: new Date('2024-05-23T08:56:21.627Z'),
      updatedAt: new Date('2024-05-23T08:56:21.627Z'),
      barcode: '9261269777547',
      qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
    },
    images: [
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png',
  },
];

describe('ProductList', () => {
  it('should render the product list correctly with the title, image and price', () => {
    render(
      <MemoryRouter>
        <ProductList data={products} />
      </MemoryRouter>
    );

    screen.debug();

    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();

      const image = screen.getByAltText(product.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', product.thumbnail);

      const price = screen.getByText(`$${product.price}`);
      expect(price).toBeInTheDocument();
    });
  });
});
