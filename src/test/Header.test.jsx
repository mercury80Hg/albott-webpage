import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

function renderComponent() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
}

test('Should render name heading', () => {
  renderComponent()

  const headerComponent = screen.getByRole('banner')
  const nameText = screen.getByRole('heading', { name: /a llan e/i })
  
  expect(headerComponent).toBeInTheDocument()
  expect(nameText).toBeInTheDocument()
})

test('should render 7 links', () => {
  renderComponent()

  const headerComponent = screen.getByRole('banner')
  const links = within(headerComponent).getAllByRole('link')
  const aboutLink = screen.getByRole('link', { name: /about/i})
  const contactLink = screen.getByRole('link', { name: /contact/i})
  const projectsLink = screen.getByRole('link', { name: /projects/i})
  const bLink = screen.getByRole('link', { name: 'b' })
  const eLink = screen.getByRole('link', { name: 'E' })
  const aLink = screen.getByRole('link', { name: 'a' })
  const tLink = screen.getByRole('link', { name: 't' })

  expect(links).toHaveLength(7)
  expect(aboutLink).toBeInTheDocument()
  expect(contactLink).toBeInTheDocument()
  expect(projectsLink).toBeInTheDocument()
  expect(bLink).toBeInTheDocument()
  expect(eLink).toBeInTheDocument()
  expect(aLink).toBeInTheDocument()
  expect(tLink).toBeInTheDocument()
  
})

