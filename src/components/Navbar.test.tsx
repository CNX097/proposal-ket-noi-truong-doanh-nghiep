import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('links only to in-page anchors', () => {
    render(<Navbar onQuote={() => {}} />)
    const nav = screen.getByRole('navigation')
    const links = within(nav).getAllByRole('link')
    expect(links.map((a) => a.getAttribute('href'))).toEqual(['#packages', '#values', '#process', '#contact'])
    expect(links.map((a) => a.textContent)).toEqual(['Các gói', 'Giá trị', 'Quy trình', 'Liên hệ'])
  })

  it('opens the mobile menu and closes it after picking a link', async () => {
    const user = userEvent.setup()
    render(<Navbar onQuote={() => {}} />)
    const toggle = screen.getByRole('button', { name: 'Mở menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('nav-menu')).toHaveClass('open')

    await user.click(screen.getByRole('link', { name: 'Quy trình' }))
    expect(screen.getByTestId('nav-menu')).not.toHaveClass('open')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('calls onQuote from the header CTA', async () => {
    const user = userEvent.setup()
    const onQuote = vi.fn()
    render(<Navbar onQuote={onQuote} />)
    await user.click(screen.getByRole('button', { name: 'Nhận báo giá' }))
    expect(onQuote).toHaveBeenCalledTimes(1)
  })
})
