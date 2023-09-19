import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Splash from '../components/Splash'
import { log } from 'console'


function renderComponent() {
  return (
    render(
      <MemoryRouter>
        <Splash />
      </MemoryRouter>
    )
  )
}
test('Should have 11 links', () => {
renderComponent()
  const links = screen.getAllByRole('link')

  expect(links).toHaveLength(11)
})

test('Should render logo', () => {
  renderComponent()

  const logo = screen.getByRole('img')
  screen.debug()
  expect(logo).toBeInTheDocument()
})
   