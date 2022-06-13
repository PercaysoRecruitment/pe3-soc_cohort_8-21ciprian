import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from './App'
test('Should render App component', async () => {
  render(<App />)
  const app = await screen.findByTestId('appTestId')
  expect(app).toBeInTheDocument()
  // screen.debug()
})