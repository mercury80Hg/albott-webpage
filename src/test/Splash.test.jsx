import { render, screen, within } from '@testing-library/react';
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
  const beautyLink = screen.getByRole('link', { name: /beauty/i })
  const excitementLink = screen.getByRole('link', { name: /excite/i })
  const adventureLink = screen.getByRole('link', { name: /advent/i })
  const travelLink = screen.getByRole('link', { name: /trav/i })

  expect(links).toHaveLength(11);
  expect(beautyLink).toBeInTheDocument()
  expect(excitementLink).toBeInTheDocument()
  expect(adventureLink).toBeInTheDocument()
  expect(travelLink).toBeInTheDocument()
  
});

test('Should render Header component', () => {
  renderComponent()
  const headerComponent = screen.getByRole('banner')
  const links = within(headerComponent).getAllByRole('link')
  const nameText = screen.getByRole('heading', { name: /a llan e/i })
  const aboutLink = screen.getByRole('link', { name: /about/i})
  const contactLink = screen.getByRole('link', { name: /contact/i})
  const projectsLink = screen.getByRole('link', { name: /projects/i})


  expect(links).toHaveLength(7)
  expect(headerComponent).toBeInTheDocument()
  expect(nameText).toBeInTheDocument()
  expect(aboutLink).toBeInTheDocument()
  expect(contactLink).toBeInTheDocument()
  expect(projectsLink).toBeInTheDocument()
  
})

test('Should render logo', () => {
  renderComponent();

  const logoImage = screen.getByRole('img');
  const logoAlt = screen.getByAltText(/logo:/i)

  expect(logoImage).toBeInTheDocument();
  expect(logoAlt).toBeInTheDocument()
});


