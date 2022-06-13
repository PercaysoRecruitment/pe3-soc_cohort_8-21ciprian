import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Main from './Main'
test('Should render Main component', async () => {
  render(<Main />)
  const main = await screen.findByTestId('mainTestId')
  expect(main).toBeInTheDocument()
  // screen.debug()
})
test('Should render main section in Main component', async () => {
  render(<Main />)
  const section = await screen.findByTestId('mainSectionTestId')
  expect(section).toBeInTheDocument()
  // screen.debug()
})

