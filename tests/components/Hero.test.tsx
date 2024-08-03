import React from 'react';
import Hero from '../../src/components/Hero';

import { it, expect, describe, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

describe('Hero', () => {
  it('should render the company name when passed', () => {
    render(<Hero companyName="My Company" />);

    screen.debug();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveTextContent('My Company');
    expect(heading).toHaveTextContent(/^Welcome to the world of My Company!$/);
  });

  it('should render the default company name when none is passed', () => {
    render(<Hero />);

    screen.debug();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/vogue junction/i);
  });

  afterEach(cleanup);
});
