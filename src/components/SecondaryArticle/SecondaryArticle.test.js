import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import SecondaryArticle from './SecondaryArticle'
test('Should render SecondaryArticle component', async () => {
  render(<SecondaryArticle />)
  const article = await screen.findByTestId('saTestId')
  expect(article).toBeInTheDocument()
  // screen.debug()
})
test('Should render image in SecondaryArticle component', async () => {
  render(<SecondaryArticle />)
  const image = await screen.findByTestId('saImgTestId')
  expect(image).toBeInTheDocument()
  // screen.debug()
})
test('Should render title in SecondaryArticle component', async () => {
  render(<SecondaryArticle />)
  const title = await screen.findByTestId('saTitleTestId')
  expect(title).toBeInTheDocument()
  // screen.debug()
})
test('Should render description in SecondaryArticle component', async () => {
  render(<SecondaryArticle />)
  const desc = await screen.findByTestId('saDesceTestId')
  expect(desc).toBeInTheDocument()
  // screen.debug()
})
test('Should render article source in SecondaryArticle component', async () => {
  render(<SecondaryArticle />)
  const src = await screen.findByTestId('saSrcTestId')
  expect(src).toBeInTheDocument()
  // screen.debug()
})