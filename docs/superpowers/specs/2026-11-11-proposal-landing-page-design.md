# Thiết kế: Landing Page Proposal "Kết nối Doanh nghiệp – Nhà trường"

Ngày: 2026-11-11 · Trạng thái: chờ duyệt spec

## 1. Mục tiêu & người đọc
- **Mục tiêu duy nhất (One Page, One Goal):** doanh nghiệp xem 3 gói kết nối với nhà trường và để lại thông tin để **nhận báo giá**.
- **Người đọc:** doanh nghiệp (bên mua). Đơn vị tổ chức: Vieclam24h phối hợp nhà trường và doanh nghiệp đồng hành.
- **Thành công:** trong 3 giây người đọc biết đây là gì, được gì, bấm đâu; có thể so sánh 3 gói trong một màn hình; gửi form "Nhận báo giá" thành công trên cả desktop và mobile.

## 2. Quyết định đã chốt
| Hạng mục | Quyết định |
|---|---|
| Giá | **Không công khai.** Mỗi gói ghi "Liên hệ báo giá"; nút "Nhận báo giá" cuộn tới form |
| Cấu trúc project | **Project Vite + React mới, tách biệt** HR Nexus (thư mục `Proposal-Ket-Noi-Truong-Doanh-Nghiep/`) |
| Form backend | **Google Sheet mới + Apps Script riêng.** URL do người dùng cung cấp sau; tạm để hằng số rỗng |
| Bố cục | **Hướng A:** trang cuộn dọc, thẻ 3 gói đặt cạnh nhau + bảng so sánh |
| Liên hệ | Nguyễn Xuân Nhật Cường · 0812 668 268 |
| Phong cách | Dùng lại nhận diện HR Nexus (tím, chữ đậm, thẻ bo góc) + logo Vieclam24h |

## 3. Nguồn nội dung (3 tài liệu Google Docs)
Chỉ dùng thông tin có trong tài liệu, **không bịa số liệu** (số trường đã hợp tác, số lượt CV...).

| | Job Fair | Workshop kết hợp tuyển dụng (Talent Recruitment Day) | Livestream kết hợp tuyển dụng |
|---|---|---|---|
| Hình thức | Gian hàng tại trường | Workshop chuyên đề, sau đó nhận hồ sơ và phỏng vấn trực tiếp | Phát sóng từ studio của trường, kênh trường + Vieclam24h |
| Quy mô | 300–1.000 SV | 100–500 SV | 100–500 SV |
| Thời lượng | ~4 giờ | 3 giờ 15 phút | 2 giờ 10 phút |
| Quyền lợi DN | 1 khu vực tuyển dụng riêng; truyền thông kênh trường + Vieclam24h; tiếp cận SV đúng nhu cầu; ảnh sau sự kiện; 1 CTV trực gian hàng; nước uống tại bàn tư vấn | Chia sẻ về DN và môi trường làm việc; giới thiệu cơ hội thực tập/việc làm; Q&A; nhận CV, phỏng vấn trực tiếp; JD gửi SV trước ngày diễn ra | Thời lượng lên sóng; logo trên màn hình và backdrop, MC nhắc tên; link/QR nộp CV; Q&A; nhận danh sách CV sau buổi; hỗ trợ thiết kế slide |
| Hoạt động tùy chọn | Lucky Draw/Minigame, CV Review/Mock Interview, tư vấn 1:1 | Phỏng vấn trực tiếp, thực hành phỏng vấn | Phỏng vấn nhanh online, Mock Interview/CV Review, Minigame/Lucky Draw |

Điểm chung: quy trình trước/trong/sau chương trình, phân vai các bên, báo cáo kết quả và thư cảm ơn sau sự kiện, đề xuất hợp tác tiếp theo.

Agenda mẫu:
- **Job Fair:** setup gian hàng 30' → khai mạc 15' → SV tham quan 180' → tiếp nhận CV/tư vấn/phỏng vấn nhanh (xuyên suốt) → tổng kết 15'.
- **Workshop:** check-in 30' → khai mạc 15' → workshop chuyên đề 45' → Q&A 15' → cơ hội nghề nghiệp/nhận hồ sơ/phỏng vấn 90'.
- **Livestream:** mở màn 10' → khai mạc 10' → chuyên đề 30' → Q&A 15' → cơ hội nghề nghiệp 60' → tổng kết 5'.

## 4. Cấu trúc trang (mạch McKinsey: Hook → USP → Selling Point → Branding → Information → CTA)
1. **Header** dính: logo Vieclam24h, menu cuộn trong trang (Gói, Giá trị, Quy trình, Liên hệ), nút "Nhận báo giá". Hamburger trên mobile, bấm mục sẽ cuộn và đóng menu.
2. **Hook (Hero):** tiêu đề "Kết nối doanh nghiệp với sinh viên ngay tại trường", 1 dòng phụ, nút "Nhận báo giá".
3. **USP:** "Một đối tác, 3 cách tiếp cận". Vieclam24h lo trọn gói: ký kết với trường, mời doanh nghiệp, vận hành, báo cáo.
4. **Selling Point – 3 thẻ gói:** mỗi thẻ gồm tên gói, hình thức, quy mô, thời lượng, 4–5 quyền lợi chính, dòng "Liên hệ báo giá", nút "Nhận báo giá" (chọn sẵn gói đó trong form). Dưới thẻ là bảng so sánh các tiêu chí (gian hàng riêng, lên sóng, nhận CV, phỏng vấn nhanh, truyền thông, quy mô, thời lượng).
5. **Branding – Giá trị 3 bên:** doanh nghiệp, nhà trường, sinh viên (lấy từ tài liệu).
6. **Information:**
   - Quy trình Trước / Trong / Sau chương trình (3 cột Vieclam24h – Nhà trường – Doanh nghiệp, rút gọn).
   - Agenda mẫu theo tab 3 gói.
   - Hoạt động tùy chọn.
7. **CTA + Footer:** form "Nhận báo giá" và thông tin liên hệ. Nút "Nhận báo giá" cố định (sticky) trên mobile.

## 5. Form "Nhận báo giá"
- Trường: Tên doanh nghiệp, Email liên hệ (`type=email`), Số điện thoại (`type=tel`, pattern SĐT VN), Người liên hệ, Gói quan tâm (checkbox nhiều lựa chọn: Job Fair / Workshop / Livestream).
- Gửi `FormData` tới Apps Script bằng `fetch` `mode: no-cors` như trang HR Nexus. Gói được chọn gửi dưới dạng một trường văn bản (nối bằng dấu phẩy).
- `isSubmitting`: chặn bấm lặp, nút `disabled`, `opacity 0.7`, chữ "Đang gửi...", mở lại trong `finally`.
- Thành công: popup cảm ơn và `form.reset()`.
- **Lỗi mạng:** hiện thông báo kèm hotline 0812 668 268 (khác HR Nexus: không hiện popup thành công giả).
- Hằng số `GOOGLE_SHEET_URL` để rỗng tới khi có URL. Khi rỗng (chế độ xem thử), form không gọi mạng, ghi cảnh báo "chưa cấu hình URL" vào console, rồi hiện popup cảm ơn để duyệt giao diện. Khi đã có URL thì chỉ nhánh gửi thật chạy, và lỗi mạng đi theo nhánh hotline ở trên.
- Hotline là link `tel:0812668268`.

## 6. Kỹ thuật & cấu trúc thư mục
- Vite + React + TypeScript, `lucide-react` cho icon (như HR Nexus).
- Tách component theo section: `Navbar`, `Hero`, `UspSection`, `PackagesSection` (+ `PackageCard`, `CompareTable`), `ValueSection`, `ProcessSection`, `AgendaTabs`, `RegisterForm`, `ThankYouModal`. Dữ liệu 3 gói đặt trong `src/data/packages.ts` để sửa nội dung không đụng JSX.
- CSS Variables theo thang 8px, mobile-first, dùng lại bộ màu HR Nexus.
- Tài nguyên: logo Vieclam24h copy từ HR Nexus; chưa có ảnh sự kiện thật, dùng icon và khối đồ họa. Ảnh bổ sung sau phải nén (banner < 800KB).
- Meta: `title` < 60 ký tự, `description` 140–160 ký tự, Open Graph; ảnh `og:image` bổ sung sau.

## 7. Kiểm thử
- Chạy dev server, kiểm tra bằng trình duyệt thật ở **desktop 1440 và mobile 375**: không có thanh cuộn ngang, thẻ gói xuống 1 cột trên mobile, vùng bấm ≥ 44px, menu mobile cuộn và đóng đúng, bàn phím `tel`/`email` đúng loại.
- Test form: spam click chỉ gửi 1 lần, popup thành công, reset form, nhánh lỗi mạng có hotline.
- Console không có lỗi (React key, 404 ảnh).
- `npm run build` thành công, `tsc` không lỗi.

## 8. Ngoài phạm vi
- Không công khai giá, không đặt giá ước tính.
- Không thêm trang con, blog hay liên kết thoát khỏi trang.
- Không tạo Apps Script/Google Sheet (người dùng cung cấp URL).
- Không sửa project HR Nexus.

## 9. Việc người dùng cần cung cấp sau
- URL Apps Script của Google Sheet mới.
- (Tùy chọn) ảnh sự kiện thật, logo các trường/doanh nghiệp đã hợp tác nếu muốn thêm phần minh chứng.
