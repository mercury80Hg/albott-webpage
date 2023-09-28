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

test('Should render links', () => {
  renderComponent();

  const allLinks = screen.getAllByRole('link');
  const contactContainer = screen.getByTestId('contact-container') 
  const contactLinks = within(contactContainer).getAllByRole('link')
  expect(allLinks).toHaveLength(5)
  expect(contactLinks).toHaveLength(4)
  
});

test('Should have varioius texts present', () => {
  renderComponent()
  const texts = [
    /an original design/i,
    /original branding/i,
    /take me out to lunch/i,
    /copyright/i
  ]

  for( let text of texts ) {
    const excerpt = screen.getByText(text)
    expect(excerpt).toBeInTheDocument()
  }

}) 

test('Should render 3 conact method links, and images', () => {
  renderComponent()

  const contactMethods = screen.getByTestId('contact-methods') 
  const contactLinks = within(contactMethods).getAllByRole('link')
  const contactImages = within(contactMethods).getAllByRole('img')
  const linkedIn = screen.getByRole('link', { name: /linked in logo/i })
  const phone = screen.getByRole('link', { name: /telephone/i })
  const email = screen.getByRole('link', { name: /piece of mail/i })
  

  expect(contactLinks).toHaveLength(3)
  expect(contactImages).toHaveLength(3)
  expect(linkedIn).toBeInTheDocument()
  expect(phone).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(linkedIn).toHaveAttribute('href', 'https://www.linkedin.com/in/allan-bott/')
  expect(phone).toHaveAttribute('href', 'tel:+12068091032')
  expect(email).toHaveAttribute('href', 'mailto:[mercury80hg200@gmail.com]?subject=Email from allanbott.com, RE: &body=Your favorite color is: %0A%0AIf you could be an animal: %0A%0ASince you are human, what kind of robot would you like to be?: %0A%0A%0A')
  
})
