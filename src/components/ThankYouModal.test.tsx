import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { ThankYouModal } from './ThankYouModal'

describe('ThankYouModal', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<ThankYouModal open={false} onClose={() => {}} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('shows the success title as a modal dialog', () => {
    render(<ThankYouModal open onClose={() => {}} />)
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByText('Gửi yêu cầu báo giá thành công!')).toBeInTheDocument()
  })

  it('closes on Escape, on the close button and on the backdrop', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ThankYouModal open onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(screen.getByRole('button', { name: 'Đóng' }))
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByTestId('modal-overlay'))
    expect(onClose).toHaveBeenCalledTimes(3)

    await user.click(screen.getByText('Gửi yêu cầu báo giá thành công!'))
    expect(onClose).toHaveBeenCalledTimes(3)
  })
})
