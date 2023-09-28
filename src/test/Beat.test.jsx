import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Beat from '../components/Beat';

const data = {
  title: 'Wowtastic',
  images: 'really cool Image',
  text: 'How about some text',
};

function renderComponent() {
  return render(
    <MemoryRouter>
      <Beat data={data} />
    </MemoryRouter>
  );
}

/* TODO: Having trouble testing with slick-slider and
getting it to pollyfill */
