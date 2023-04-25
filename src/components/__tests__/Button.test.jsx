import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, vi } from 'vitest'
import Button from '../Button'
import { All } from '../Icons'

describe('Button', () => {
  it('renders correctly', () => {
    let name = 'All'
    let category = 'all'

    const clickHandler = vi.fn()

    render(
      <Button
        button={{ name, category, icon: <All /> }}
        filterProduct={clickHandler}
      />
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()

    const nameElement = screen.getByText(/all/i)
    expect(nameElement).toBeInTheDocument()
  })

  it('works correctly when clicked', async () => {
    const user = userEvent.setup()

    const clickHandler = vi.fn()

    render(
      <Button
        button={{ name: 'All', category: 'all', icon: <All /> }}
        filterProduct={clickHandler}
      />
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()

    await act(() => user.click(buttonElement))

    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
