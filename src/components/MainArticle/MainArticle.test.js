import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import MainArticle from './MainArticle'
test.only('Should render MainArticle component', async () => {
  render(<MainArticle />)
  const article = await screen.findByTestId('maTestId')
  expect(article).toBeInTheDocument()
  // screen.debug()
})