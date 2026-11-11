import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { RegisterForm } from './RegisterForm'
import type { PackageId } from '../data/packages'
import type { SubmitResult } from '../lib/submitQuote'

function Harness(props: { initial?: PackageId[]; onSuccess?: () => void; submit?: (fd: FormData) => Promise<SubmitResult> }) {
  const [selected, setSelected] = useState<PackageId[]>(props.initial ?? [])
  return (
    <RegisterForm
      selected={selected}
      onSelectedChange={setSelected}
      onSuccess={props.onSuccess ?? (() => {})}
      submit={props.submit}
    />
  )
}

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Tên doanh nghiệp/), 'Công ty ABC')
  await user.type(screen.getByLabelText(/Email liên hệ/), 'hr@abc.vn')
  await user.type(screen.getByLabelText(/Số điện thoại/), '0812 668 268')
  await user.type(screen.getByLabelText(/Người liên hệ/), 'Nguyễn Văn A')
}

describe('RegisterForm', () => {
  it('uses the right input types for mobile keyboards', () => {
    render(<Harness />)
    expect(screen.getByLabelText(/Email liên hệ/)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(/Số điện thoại/)).toHaveAttribute('type', 'tel')
  })

  it('reflects the selected packages', () => {
    render(<Harness initial={['livestream']} />)
    expect(screen.getByRole('checkbox', { name: /Livestream/ })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Job Fair/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Workshop/ })).not.toBeChecked()
  })

  it('blocks submit when no package is selected', async () => {
    const user = userEvent.setup()
    const submit = vi.fn()
    const onSuccess = vi.fn()
    render(<Harness submit={submit} onSuccess={onSuccess} />)
    await fillValid(user)
    await user.click(screen.getByRole('button', { name: 'Nhận báo giá' }))
    expect(screen.getByText('Vui lòng chọn ít nhất 1 gói quan tâm')).toBeInTheDocument()
    expect(submit).not.toHaveBeenCalled()
    expect(onSuccess).not.toHaveBeenCalled()
  })

  it('blocks submit for an invalid phone number', async () => {
    const user = userEvent.setup()
    const submit = vi.fn()
    render(<Harness initial={['jobfair']} submit={submit} />)
    await fillValid(user)
    const phone = screen.getByLabelText(/Số điện thoại/)
    await user.clear(phone)
    await user.type(phone, '12345')
    await user.click(screen.getByRole('button', { name: 'Nhận báo giá' }))
    expect(screen.getByText('Số điện thoại không hợp lệ')).toBeInTheDocument()
    expect(submit).not.toHaveBeenCalled()
  })

  it('submits only once while a request is in flight', async () => {
    const user = userEvent.setup()
    const submit = vi.fn(() => new Promise<SubmitResult>(() => {}))
    render(<Harness initial={['jobfair']} submit={submit} />)
    await fillValid(user)
    const button = screen.getByRole('button', { name: 'Nhận báo giá' })
    await user.click(button)
    await user.click(button)
    await user.click(button)
    expect(submit).toHaveBeenCalledTimes(1)
    expect(button).toBeDisabled()
    expect(button).toHaveTextContent('Đang gửi...')
  })

  it('sends normalized phone and the selected package names', async () => {
    const user = userEvent.setup()
    const submit = vi.fn(async (_fd: FormData): Promise<SubmitResult> => 'sent')
    render(<Harness initial={['jobfair', 'livestream']} submit={submit} />)
    await fillValid(user)
    await user.click(screen.getByRole('button', { name: 'Nhận báo giá' }))
    const fd = submit.mock.calls[0][0]
    expect(fd.get('phone')).toBe('0812668268')
    expect(fd.get('packages')).toBe('Job Fair, Livestream kết hợp tuyển dụng')
    expect(fd.get('company')).toBe('Công ty ABC')
  })

  it('shows the hotline fallback on network error', async () => {
    const user = userEvent.setup()
    const onSuccess = vi.fn()
    render(<Harness initial={['workshop']} submit={async () => 'error'} onSuccess={onSuccess} />)
    await fillValid(user)
    await user.click(screen.getByRole('button', { name: 'Nhận báo giá' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('0812 668 268')
    expect(screen.getByRole('link', { name: /0812 668 268/ })).toHaveAttribute('href', 'tel:0812668268')
    expect(onSuccess).not.toHaveBeenCalled()
  })

  it('calls onSuccess and resets the form after a successful send', async () => {
    const user = userEvent.setup()
    const onSuccess = vi.fn()
    render(<Harness initial={['workshop']} submit={async () => 'preview'} onSuccess={onSuccess} />)
    await fillValid(user)
    await user.click(screen.getByRole('button', { name: 'Nhận báo giá' }))
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(screen.getByLabelText(/Tên doanh nghiệp/)).toHaveValue('')
    expect(screen.getByRole('checkbox', { name: /Workshop/ })).not.toBeChecked()
  })
})
