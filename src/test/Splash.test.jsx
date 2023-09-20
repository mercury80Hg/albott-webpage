import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Splash from '../components/Splash';

function renderComponent() {
  return render(
    <MemoryRouter>
      <Splash />
    </MemoryRouter>
  );
}
test('Should have 11 links', () => {
  renderComponent();
  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(11);
});

test('Should render logo', () => {
  renderComponent();

  const logo = screen.getByRole('img');

  expect(logo).toBeInTheDocument();
});

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
