import React from 'react';
import ImageGallery from '../../src/components/ImageGallery';

import { it, expect, describe, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

const product = {
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
};

describe('ImageGallery', () => {
  const renderComponent = () => {
    render(<ImageGallery product={product} />);

    return {
      images: screen.getAllByAltText(product.title),
      buttons: screen.getAllByRole('button'),
    };
  };

  it('should render the ImageGallery component with the first image as main image', () => {
    const { images, buttons } = renderComponent();

    expect(images).toHaveLength(4); // 3 images + 1 main image
    expect(buttons).toHaveLength(3); // 3 buttons for each image

    const mainImage = images[images.length - 1];
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute(
      'src',
      'https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png'
    );

    screen.debug();
  });

  it('should change the main image when the last image is clicked', async () => {
    const { images, buttons } = renderComponent();

    const user = userEvent.setup();
    await user.click(buttons[2]);

    const mainImage = images[images.length - 1];
    expect(mainImage).toHaveAttribute(
      'src',
      'https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/3.png'
    );

    screen.debug();
  });

  afterEach(cleanup);
});
