import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import MainArticle from './MainArticle'
test('Should render MainArticle component', async () => {
  render(<MainArticle />)
  const article = await screen.findByTestId('maTestId')
  expect(article).toBeInTheDocument()
  // screen.debug()
})
test('Should render image in MainArticle component', async () => {
  render(<MainArticle />)
  const image = await screen.findByTestId('imgTestId')
  expect(image).toBeInTheDocument()
  // screen.debug()
})
test('Should render title in MainArticle component', async () => {
  render(<MainArticle />)
  const title = await screen.findByTestId('titleTestId')
  expect(title).toBeInTheDocument()
  // screen.debug()
})
test('Should render description in MainArticle component', async () => {
  render(<MainArticle />)
  const desc = await screen.findByTestId('descTestId')
  expect(desc).toBeInTheDocument()
  // screen.debug()
})
test('Should render article source in MainArticle component', async () => {
  render(<MainArticle />)
  const src = await screen.findByTestId('srcTestId')
  expect(src).toBeInTheDocument()
  // screen.debug()
})