import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the brand logo', () => {
    render(<App />)
    // Logo được import qua bundler (src/assets) để bản demo một file nhúng được ảnh.
    expect(screen.getAllByAltText('Vieclam24h')[0].getAttribute('src')).toMatch(/src\/assets\/vieclam24h-logo\.png$/)
  })

  it('adds each card CTA to the form selection and scrolls to the form', async () => {
    const user = userEvent.setup()
    render(<App />)
    const card = (name: string) => screen.getByRole('heading', { name }).closest('article')!

    await user.click(within(card('Job Fair')).getByRole('button', { name: 'Nhận báo giá' }))
    await user.click(within(card('Livestream kết hợp tuyển dụng')).getByRole('button', { name: 'Nhận báo giá' }))

    const form = document.querySelector('form')!
    expect(within(form).getByRole('checkbox', { name: /Job Fair/ })).toBeChecked()
    expect(within(form).getByRole('checkbox', { name: /Livestream/ })).toBeChecked()
    expect(within(form).getByRole('checkbox', { name: /Workshop/ })).not.toBeChecked()
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
