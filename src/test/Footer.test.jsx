import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from '../components/Footer'

function renderComponent() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
}

test('Should render 1 link', () => {
  renderComponent()

  const link = screen.getByRole('link')

  expect(link).toHaveAttribute('href', 'https://www.flaticon.com/')

})

test('Should contain various text', () => {
  renderComponent()

  const texts = [
    /an original design/i,
    /original branding/i,
    /photography/i,
    /resources/i,
    /allanbott.com/i,
    /logo/i,
    /web design/i,
    /copyright/i
  ]

  for( let text of texts ) {
    const excerpt = screen.getByText(text)
    expect(excerpt).toBeInTheDocument()
  }


})