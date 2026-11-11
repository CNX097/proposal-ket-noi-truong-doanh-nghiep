# Proposal Landing Page "Kết nối Doanh nghiệp – Nhà trường" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Landing page proposal một trang, giới thiệu 3 gói (Job Fair, Workshop, Livestream) cho doanh nghiệp và thu lead qua form "Nhận báo giá".

**Architecture:** Project Vite + React + TS mới, độc lập với HR Nexus.
- Nội dung 3 gói nằm ở `src/data/packages.ts`. Mỗi section là một component.
- Logic gửi form tách thành hàm thuần `submitQuote` để test mà không cần trình duyệt.
- `App` giữ state `selectedPackages`, nhờ đó nút trên thẻ gói chọn sẵn gói trong form.
- Ngoài bản Vite thường, build thêm một file `demo/index.html` tự chứa để mở trực tiếp.

**Tech Stack:** Vite 8, React 19, TypeScript ~6.0, lucide-react, Vitest + Testing Library + jsdom, vite-plugin-singlefile (cho bản demo).

**Spec:** `docs/superpowers/specs/2026-11-11-proposal-landing-page-design.md`. Mục 3 của spec là nguồn copy nội dung.

**Execution:** Native (người dùng chọn tự duyệt, không hỏi lại). Thư mục chưa là git repo, nên **không commit**.

## Global Constraints
- **Giá và CTA:** không công khai giá. Mỗi gói ghi đúng `Liên hệ báo giá`, mọi nút CTA ghi đúng `Nhận báo giá`.
- **Số liệu:** chỉ dùng số liệu có trong spec mục 3.
- **Liên hệ:** `Nguyễn Xuân Nhật Cường`, hiển thị `0812 668 268`, link `tel:0812668268`.
- **Điều hướng:** không link ra ngoài trang. Menu cuộn tới các anchor `#packages`, `#values`, `#process`, `#contact`.
- **Version (khớp HR Nexus):** react/react-dom `^19.2.6`, lucide-react `^1.21.0`, vite `^8.0.12`, @vitejs/plugin-react `^6.0.1`, typescript `~6.0.2`.
- **Màu:** khối `:root` lấy từ HR Nexus `src/index.css`, gồm `--primary: #6366f1`, `--accent: #a855f7`, `--bg-gradient`.
- **Bố cục:** mobile-first, spacing theo thang 8px.
  - Không có thanh cuộn ngang ở 360px.
  - Vùng bấm tối thiểu 44px.
  - Section padding 48px trên mobile, 88px từ 768px trở lên.
- **Không sửa** bất kỳ file nào trong `HR-Nexus-Thang-8-Final/`.

## Review Focus
1. **Chọn gói từ 2 thẻ:** bấm CTA trên 2 thẻ khác nhau thì form tích cả 2 ô (thêm vào, không thay thế). Test ở Task 5.
2. **Chưa chọn gói:** chặn gửi, hiện `Vui lòng chọn ít nhất 1 gói quan tâm`. Test ở Task 3.
3. **SĐT có dấu cách/chấm hoặc dạng +84:** được chấp nhận và chuẩn hoá trước khi gửi. `12345` bị chặn với `Số điện thoại không hợp lệ`. Test ở Task 3.
4. **Bảng so sánh ở 360px:** chỉ bảng cuộn ngang, trang không cuộn ngang. Kiểm tra trực quan ở Task 7.
5. **Popup cảm ơn:** đóng được bằng `Escape`, nút `Đóng` và bấm nền. Test ở Task 3.

---

### Task 1: Khởi tạo project, test runner, design tokens
**Files:**
- Tạo: `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/styles/index.css`, `src/test/setup.ts`.
- Copy logo sang `public/vieclam24h-logo.png` và favicon `public/favicon.png`.

**Produces:**
- Scripts: `dev`, `build`, `build:demo` (singlefile → `demo/index.html`), `test` (`vitest run`).
- Class dùng chung: `.container` (max 1200px), `.section`, `.section-light`, `.section-header`, `.section-label`, `.section-title`, `.section-subtitle`, `.btn`, `.btn-primary`, `.btn-light` (min-height 44px).

**Steps:**
- [ ] Viết `App.test.tsx`: logo có `alt="Vieclam24h"`.
- [ ] Chạy test, kỳ vọng FAIL.
- [ ] Viết code cho tới khi PASS.
- [ ] Chạy `npm run build` thành công.

### Task 2: Dữ liệu 3 gói (`src/data/packages.ts`)
**Produces:**
```ts
type PackageId = 'jobfair' | 'workshop' | 'livestream'
interface Package { id; name; subtitle; format; scale; duration; benefits: string[]; optional: string[]; agenda: {duration; content}[]; totalDuration }
PACKAGES: Package[]            // thứ tự jobfair, workshop, livestream
COMPARE_ROWS: { label; values: Record<PackageId, string | boolean> }[]
CONTACT = { name, phoneDisplay: '0812 668 268', phoneHref: 'tel:0812668268' }
```

**Test (viết trước, kỳ vọng FAIL rồi PASS):**
- Thứ tự id đúng `jobfair, workshop, livestream`.
- `scale` lần lượt: `300 – 1.000 sinh viên` / `100 – 500 sinh viên` / `100 – 500 sinh viên`.
- `duration` lần lượt: `~4 giờ` / `3 giờ 15 phút` / `2 giờ 10 phút`.
- Số dòng agenda lần lượt: 5 / 5 / 6.
- Mỗi gói có 4–6 benefits.
- `COMPARE_ROWS` đủ 3 key ở mỗi dòng.

### Task 3: `submitQuote`, `RegisterForm`, `ThankYouModal`
**Produces:**
- `GOOGLE_SHEET_URL = ''`
- `normalizePhone(raw): string`, giữ lại chữ số và `+`.
- `isValidVnPhone(s)`, kiểm tra theo `/^(\+84|0)(3|5|7|8|9)\d{8}$/`.
- `submitQuote(fd, url = GOOGLE_SHEET_URL, fetchImpl = fetch): Promise<'sent'|'preview'|'error'>`
- `RegisterForm({ selected, onSelectedChange, onSuccess, submit? })`
- `ThankYouModal({ open, onClose })`
- Field gửi đi: `company`, `email`, `phone`, `contactName`, `packages` (nối `, `), `submittedAt`.

**Test cases:**
- Chuẩn hoá SĐT: `0812 668 268` và `0812.668.268` đều về `0812668268`.
- Kiểm tra SĐT: `0812668268` và `+84812668268` là true, `12345` là false.
- URL rỗng: trả `'preview'`, không gọi fetch.
- Fetch resolve: trả `'sent'`, gọi fetch với `{method:'POST', mode:'no-cors', body}`.
- Fetch reject: trả `'error'`.
- Không chọn gói: hiện thông báo lỗi.
- SĐT sai: hiện lỗi.
- Bấm gửi 3 lần khi promise chưa xong: `submit` chỉ gọi 1 lần, nút disabled và ghi `Đang gửi...`.
- Nhánh error: hiện link `tel:0812668268`, không gọi `onSuccess`.
- Nhánh thành công: gọi `onSuccess`, reset form.
- Modal: đóng được bằng Escape, nút Đóng và bấm overlay. Bấm vào nội dung modal thì không đóng.

### Task 4: `Navbar`, `Hero`, `UspSection`, `StickyCta`, `scrollToId`
**Test cases:**
- Có 4 link `#packages`, `#values`, `#process`, `#contact`.
- Nút toggle (`aria-label` `Mở menu`) đặt `aria-expanded=true`. Bấm một link thì menu đóng.
- Bấm `Nhận báo giá` thì gọi `onQuote`.

**Copy:**
- H1: `Kết nối doanh nghiệp với sinh viên ngay tại trường`.
- USP: `Một đối tác – 3 cách tiếp cận sinh viên`.

### Task 5: `PackagesSection`, `PackageCard`, `CompareTable` + lắp vào `App`
- **Produces:** `handleQuote(id?)` trong `App`, thêm id vào `selectedPackages` rồi gọi `scrollToId('contact')`.
- **Test thẻ gói:**
  - Có 3 thẻ, 3 lần chữ `Liên hệ báo giá`.
  - Bấm CTA của Workshop thì `onQuote('workshop')`.
- **Test App:** CTA Job Fair rồi CTA Livestream thì 2 ô đó được tích, Workshop không tích.
- **Bố cục:**
  - Grid 1 cột trên mobile, 3 cột từ 1024px.
  - Bảng so sánh bọc trong `.compare-scroll` (`overflow-x: auto`).
  - Giá trị boolean hiển thị icon có `aria-label` `Có`/`Không`.

### Task 6: `ValueSection`, `ProcessSection`, `AgendaTabs`, `OptionalActivities`, `Footer`
- **Test `AgendaTabs`:**
  - Có tablist với 3 tab, mặc định chọn Job Fair.
  - Chọn tab Livestream thì hiện 6 dòng và chữ `Tổng thời lượng dự kiến: 2 giờ 10 phút`.
  - Phím ArrowRight chuyển sang tab kế tiếp.
- **Thứ tự section:** Hero → USP → Packages → Values → Process (+ Agenda, Optional) → Contact → Footer.

### Task 7: Kiểm tra trên trình duyệt và build
- **Desktop 1440:** 3 thẻ cùng hàng, header dính, console không có lỗi.
- **Mobile 375 và 360:**
  - `scrollWidth <= innerWidth`.
  - Menu mobile chạy đúng.
  - Nút cao tối thiểu 44px.
  - Bảng so sánh cuộn bên trong khung.
- **Luồng form:** chọn 2 gói, gửi, popup hiện, Escape đóng popup.
- **Build:** `npm test` PASS, `npm run build` và `npm run build:demo` thành công, ghi lại dung lượng.
