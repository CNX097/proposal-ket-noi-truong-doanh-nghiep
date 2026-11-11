// Dán URL Web App của Google Apps Script (Google Sheet mới cho proposal) vào đây.
// Để trống = chế độ xem thử: form không gửi đi đâu, chỉ hiện popup cảm ơn.
export const GOOGLE_SHEET_URL = ''

export type SubmitResult = 'sent' | 'preview' | 'error'

/** Giữ lại chữ số và dấu '+' (bỏ dấu cách, chấm, gạch). */
export function normalizePhone(raw: string): string {
  return raw.replace(/[^\d+]/g, '')
}

/** Số di động Việt Nam: 0 hoặc +84, đầu số 3/5/7/8/9, tổng 9 chữ số sau tiền tố. */
export function isValidVnPhone(normalized: string): boolean {
  return /^(\+84|0)(3|5|7|8|9)\d{8}$/.test(normalized)
}

export async function submitQuote(
  data: FormData,
  url: string = GOOGLE_SHEET_URL,
  fetchImpl: typeof fetch = fetch,
): Promise<SubmitResult> {
  if (!url) {
    console.warn('GOOGLE_SHEET_URL chưa được cấu hình – đang ở chế độ xem thử')
    return 'preview'
  }
  try {
    // Apps Script không trả header CORS → dùng no-cors (phản hồi opaque, coi như đã gửi).
    await fetchImpl(url, { method: 'POST', mode: 'no-cors', body: data })
    return 'sent'
  } catch (error) {
    console.error('Lỗi khi gửi form báo giá:', error)
    return 'error'
  }
}
