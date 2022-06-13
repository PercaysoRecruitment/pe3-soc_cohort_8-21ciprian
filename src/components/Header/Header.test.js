import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'


test('Should render logo in Header component', () => {
  render(<Header />)
  const logo = screen.getByText(/pe3news/i)
  expect(logo).toBeInTheDocument()
  // screen.debug()
})
test('Should render input field in Header component', () => {
  render(<Header />)
  const input = screen.getByPlaceholderText(/search/i)
  expect(input).toBeInTheDocument()
  // screen.debug()
})
test('Should clear input field in Header component when enter key is pressed', () => {
  render(<Header />)
  const input = screen.getByPlaceholderText(/search/i)
  userEvent.keyboard('{t}{e}{s}{t}{Enter}')
  expect(input.value).toBe('')

})

test('Should render search button in Header component', () => {
  render(<Header />)
  const button = screen.getByText(/search/i)
  expect(button).toBeInTheDocument()
  // screen.debug()
})

