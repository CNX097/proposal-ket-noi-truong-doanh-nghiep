import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { PackagesSection } from './PackagesSection'

describe('PackagesSection', () => {
  it('renders three package cards with a quote-on-request price', () => {
    render(<PackagesSection onQuote={() => {}} />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'Job Fair' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Workshop kết hợp tuyển dụng' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Livestream kết hợp tuyển dụng' })).toBeInTheDocument()
    expect(screen.getAllByText('Liên hệ báo giá')).toHaveLength(3)
  })

  it('renders a comparison table with one column per package', () => {
    render(<PackagesSection onQuote={() => {}} />)
    const table = screen.getByRole('table')
    const headers = within(table).getAllByRole('columnheader').map((th) => th.textContent)
    expect(headers).toEqual(['Tiêu chí', 'Job Fair', 'Workshop kết hợp tuyển dụng', 'Livestream kết hợp tuyển dụng'])
    expect(within(table).getAllByLabelText('Có').length).toBeGreaterThan(0)
    expect(within(table).getAllByLabelText('Không').length).toBeGreaterThan(0)
  })

  it('passes the package id to onQuote', async () => {
    const user = userEvent.setup()
    const onQuote = vi.fn()
    render(<PackagesSection onQuote={onQuote} />)
    const card = screen.getByRole('heading', { name: 'Workshop kết hợp tuyển dụng' }).closest('article')!
    await user.click(within(card).getByRole('button', { name: 'Nhận báo giá' }))
    expect(onQuote).toHaveBeenCalledWith('workshop')
  })
})
