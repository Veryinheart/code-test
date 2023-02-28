import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Favorites from '@/app/favorites/page';

describe('Home page', () => {
  test('should render the home page', () => {
    render(<Favorites />);
    const header = screen.getByRole('heading');

    const headerText = 'Favorites List';

    expect(header).toHaveTextContent(headerText);

    // expect(welcomeElement).toBe(
    //   'You can check 5th Dungeons & Dragons Spells here, please click Spells above to see all spells.'
    // );
  });
});
