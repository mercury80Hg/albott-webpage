import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../components/Contact';

function renderComponent() {
  return render(
   <MemoryRouter>
    <Contact />
   </MemoryRouter>
  ); 
}

test('Should render links Component', () => {
  renderComponent();

  const allLinks = screen.getAllByRole('link');
  const contactContainer = screen.getByTestId('contact-container') 
  const contactLinks = within(contactContainer).getAllByRole('link')
  expect(allLinks).toHaveLength(5)
  expect(contactLinks).toHaveLength(4)
  
});

test('Should have varioius texts present"', () => {
  renderComponent()

  const textDesign = screen.getByText(/an original design/i)
  const

  expect(textDesign).toBeInTheDocument()

})
