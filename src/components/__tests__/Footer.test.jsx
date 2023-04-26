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

  test('contains a clikable link that correctly opens in a new tab', async () => {
    const user = userEvent.setup()

    render(<Footer />)

    const linkElement = screen.getByRole('link', {
      name: /Jason Dsouza/i,
    })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.getAttribute('href')).toBe(
      'https://github.com/JasonDsouza212/free-hit'
    )

    await act(() => user.click(linkElement))

    /*
    if the button is not disabled and has a href attribute
    which is not '' or null then it will open the url in 
    a new tab when the user clicks on it
    */
    expect(document.activeElement).toBe(linkElement)
    expect(linkElement).not.toHaveAttribute('disabled')
    expect(linkElement).toHaveAttribute('href')
    expect(linkElement.getAttribute('href')).not.toBeNull()
    expect(linkElement.getAttribute('href')).length.greaterThan(5)
  })

  test('contains an unordered list with anchor element as the child of the listitems', () => {
    const user = userEvent.setup()

    render(<Footer />)

    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()

    const allListitemElements = screen.getAllByRole('listitem')
    expect(allListitemElements).toHaveLength(footerLinks.length)

    /* 
    number of children of listitem : 1
    which is the anchor element : a

    check if listitem contains an anchor element
    */
    allListitemElements.forEach((listItem) => {
      expect(listItem.childNodes[0].tagName.toLowerCase()).toBe('a')
      expect(listItem.children.length).toBe(1)
    })
  })
})
