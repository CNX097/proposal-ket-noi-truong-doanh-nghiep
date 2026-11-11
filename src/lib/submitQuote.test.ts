import { vi } from 'vitest'
import { normalizePhone, isValidVnPhone, submitQuote } from './submitQuote'

describe('normalizePhone', () => {
  it('strips spaces and dots', () => {
    expect(normalizePhone('0812 668 268')).toBe('0812668268')
    expect(normalizePhone('0812.668.268')).toBe('0812668268')
    expect(normalizePhone(' +84 812-668-268 ')).toBe('+84812668268')
  })
})

describe('isValidVnPhone', () => {
  it('accepts Vietnamese mobile numbers', () => {
    expect(isValidVnPhone('0812668268')).toBe(true)
    expect(isValidVnPhone('+84812668268')).toBe(true)
  })
  it('rejects malformed numbers', () => {
    expect(isValidVnPhone('12345')).toBe(false)
    expect(isValidVnPhone('0212668268')).toBe(false)
  })
})

describe('submitQuote', () => {
  const fd = new FormData()

  it('returns preview and skips the network when no URL is configured', async () => {
    const fetchMock = vi.fn()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    await expect(submitQuote(fd, '', fetchMock)).resolves.toBe('preview')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('posts the form with no-cors and returns sent', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response())
    await expect(submitQuote(fd, 'https://script.example/exec', fetchMock)).resolves.toBe('sent')
    expect(fetchMock).toHaveBeenCalledWith('https://script.example/exec', { method: 'POST', mode: 'no-cors', body: fd })
  })

  it('returns error when the request fails', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('Failed to fetch'))
    vi.spyOn(console, 'error').mockImplementation(() => {})
    await expect(submitQuote(fd, 'https://script.example/exec', fetchMock)).resolves.toBe('error')
  })
})
