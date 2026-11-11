import { PACKAGES, COMPARE_ROWS, CONTACT } from './packages'

describe('PACKAGES', () => {
  it('lists the three packages in order', () => {
    expect(PACKAGES.map((p) => p.id)).toEqual(['jobfair', 'workshop', 'livestream'])
  })

  it('uses the scale from the source documents', () => {
    expect(PACKAGES.map((p) => p.scale)).toEqual([
      '300 – 1.000 sinh viên',
      '100 – 500 sinh viên',
      '100 – 500 sinh viên',
    ])
  })

  it('uses the duration from the source documents', () => {
    expect(PACKAGES.map((p) => p.duration)).toEqual(['~4 giờ', '3 giờ 15 phút', '2 giờ 10 phút'])
  })

  it('has the agenda rows from the source documents', () => {
    expect(PACKAGES.map((p) => p.agenda.length)).toEqual([5, 5, 6])
  })

  it('has 4 to 6 headline benefits per package', () => {
    for (const p of PACKAGES) {
      expect(p.benefits.length).toBeGreaterThanOrEqual(4)
      expect(p.benefits.length).toBeLessThanOrEqual(6)
    }
  })
})

describe('COMPARE_ROWS', () => {
  it('has a value for every package in every row', () => {
    for (const row of COMPARE_ROWS) {
      expect(Object.keys(row.values).sort()).toEqual(['jobfair', 'livestream', 'workshop'])
    }
  })
})

describe('CONTACT', () => {
  it('uses the agreed contact', () => {
    expect(CONTACT).toEqual({
      name: 'Nguyễn Xuân Nhật Cường',
      phoneDisplay: '0812 668 268',
      phoneHref: 'tel:0812668268',
    })
  })
})
