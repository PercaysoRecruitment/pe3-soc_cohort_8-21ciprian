import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'
test('Should render Navbar component', () => {
  render(<Navbar />)
  const nav = screen.getByTestId('navTestId')
  expect(nav).toBeInTheDocument()
  // screen.debug()
})
test('Should render select topic in Navbar component', () => {
  render(<Navbar />)
  const select = screen.getByTestId('selectTestId')
  expect(select).toBeInTheDocument()
  // screen.debug()
})
test('Should render default topics option Navbar component', () => {
  render(<Navbar />)
  const topics = screen.getByText(/topic/i)
  expect(topics).toBeInTheDocument()
  // screen.debug()
})
test('Should render option topic in Navbar component', () => {
  render(<Navbar />)
  const option = screen.getByTestId('opTestId-0')
  expect(option).toHaveTextContent('Business')
  // screen.debug()
})
test('Should render teh correct text content of option topic in Navbar component', () => {
  render(<Navbar />)
  const option = screen.getByTestId('opTestId-0')
  expect(option).not.toHaveTextContent('Technology')
  // screen.debug()
})
test('Should render <li>topics list</li> in Navbar component', () => {
  render(<Navbar />)
  const liTopic = screen.getByTestId('liTestId-0')
  expect(liTopic).toHaveTextContent('Business')
  // screen.debug()
})
test('Should render the correct text content of <li>topics list</li> in Navbar component', () => {
  render(<Navbar />)
  const liTopic = screen.getByTestId('liTestId-0')
  expect(liTopic).not.toHaveTextContent('Technology')
  // screen.debug()
})
