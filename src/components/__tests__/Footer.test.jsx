import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, vi, describe } from 'vitest'
import Footer, { footerLinks } from '../footer'

describe('Footer', () => {
  test('renders correctly', () => {
    render(<Footer />)

    const divWrapperElement = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'div' &&
        element.className === 'footer'
      )
    })
    expect(divWrapperElement).toBeInTheDocument()

    const paragraphElement = screen.getByText(/Crafted with */i)
    expect(paragraphElement).toBeInTheDocument()

    const linkElement = screen.getByRole('link', {
      name: /Jason Dsouza/i,
    })
    expect(linkElement).toBeInTheDocument()

    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
})
