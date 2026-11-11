import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AgendaTabs } from './AgendaTabs'

describe('AgendaTabs', () => {
  it('shows the Job Fair agenda by default', () => {
    render(<AgendaTabs />)
    const tabs = screen.getAllByRole('tab')
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Sinh viên tham quan gian hàng')).toBeInTheDocument()
  })

  it('switches to the Livestream agenda on click', async () => {
    const user = userEvent.setup()
    render(<AgendaTabs />)
    await user.click(screen.getByRole('tab', { name: /Livestream/ }))
    const panel = screen.getByRole('tabpanel')
    expect(panel.querySelectorAll('li')).toHaveLength(6)
    expect(screen.getByText('Tổng thời lượng dự kiến: 2 giờ 10 phút')).toBeInTheDocument()
  })

  it('moves to the next tab with ArrowRight', async () => {
    const user = userEvent.setup()
    render(<AgendaTabs />)
    screen.getAllByRole('tab')[0].focus()
    await user.keyboard('{ArrowRight}')
    const workshop = screen.getByRole('tab', { name: /Workshop/ })
    expect(workshop).toHaveAttribute('aria-selected', 'true')
    expect(workshop).toHaveFocus()
  })
})
