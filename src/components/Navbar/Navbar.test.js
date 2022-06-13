import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'
test('Should topics option Navbar component', () => {
  render(<Navbar />)
  const topics = screen.getByText(/topic/i)
  expect(topics).toBeInTheDocument()
  // screen.debug()
})