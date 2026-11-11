import { Check, Minus } from 'lucide-react'
import { COMPARE_ROWS, PACKAGES } from '../data/packages'

export function CompareTable() {
  return (
    <div className="compare">
      <h3 className="compare-title">So sánh nhanh 3 gói</h3>
      <p className="compare-hint" aria-hidden="true">← Vuốt ngang để xem đủ 3 gói →</p>
      <div className="compare-scroll" tabIndex={0} role="region" aria-label="Bảng so sánh 3 gói, cuộn ngang trên màn hình nhỏ">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">Tiêu chí</th>
              {PACKAGES.map((p) => (
                <th scope="col" key={p.id} className={`col-${p.id}`}>
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {PACKAGES.map((p) => {
                  const v = row.values[p.id]
                  return (
                    <td key={p.id}>
                      {v === true ? (
                        <span className="cmp-yes" role="img" aria-label="Có">
                          <Check size={18} aria-hidden="true" />
                        </span>
                      ) : v === false ? (
                        <span className="cmp-no" role="img" aria-label="Không">
                          <Minus size={18} aria-hidden="true" />
                        </span>
                      ) : (
                        v
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
