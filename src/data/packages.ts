// Nội dung lấy từ 3 tài liệu gốc: Kế hoạch tổ chức Job fair, Workshop kết hợp tuyển dụng,
// Livestream kết hợp tuyển dụng. Sửa nội dung trang tại đây, không cần đụng JSX.

export type PackageId = 'jobfair' | 'workshop' | 'livestream'

export interface AgendaItem {
  duration: string
  content: string
}

export interface Package {
  id: PackageId
  name: string
  subtitle: string
  tagline: string
  format: string
  scale: string
  duration: string
  benefits: string[]
  optional: string[]
  agenda: AgendaItem[]
  totalDuration: string
}

export const PACKAGES: Package[] = [
  {
    id: 'jobfair',
    name: 'Job Fair',
    subtitle: 'Ngày hội việc làm tại trường',
    tagline: 'Gian hàng tuyển dụng riêng, gặp trực tiếp số đông sinh viên.',
    format: 'Booth tuyển dụng, bàn tư vấn, standee nhận diện và khu vực tiếp nhận hồ sơ ngay trong khuôn viên trường',
    scale: '300 – 1.000 sinh viên',
    duration: '~4 giờ',
    benefits: [
      '01 khu vực tuyển dụng riêng tại sự kiện',
      'Truyền thông trên các kênh của Nhà trường và Vieclam24h',
      'Tiếp cận trực tiếp sinh viên phù hợp nhu cầu tuyển dụng',
      'Nhận CV và phỏng vấn nhanh tại gian hàng',
      '01 CTV trực gian hàng, nước uống tại bàn tư vấn',
      'Hình ảnh chương trình sau sự kiện',
    ],
    optional: ['Minigame / Lucky Draw', 'CV Review hoặc Mock Interview', 'Tư vấn nghề nghiệp 1:1'],
    agenda: [
      { duration: '30 phút', content: 'Doanh nghiệp setup gian hàng' },
      { duration: '15 phút', content: 'Khai mạc chương trình' },
      { duration: '180 phút', content: 'Sinh viên tham quan gian hàng' },
      { duration: 'Xuyên suốt', content: 'Tiếp nhận CV, tư vấn và phỏng vấn nhanh' },
      { duration: '15 phút', content: 'Tổng kết chương trình' },
    ],
    totalDuration: '4 giờ',
  },
  {
    id: 'workshop',
    name: 'Workshop kết hợp tuyển dụng',
    subtitle: 'Talent Recruitment Day',
    tagline: 'Chia sẻ chuyên đề, xây thương hiệu tuyển dụng và phỏng vấn tại chỗ.',
    format: 'Workshop chuyên đề kỹ năng/định hướng nghề nghiệp, sau đó tiếp nhận hồ sơ và phỏng vấn trực tiếp',
    scale: '100 – 500 sinh viên',
    duration: '3 giờ 15 phút',
    benefits: [
      'Chia sẻ về doanh nghiệp và môi trường làm việc',
      'Giới thiệu cơ hội thực tập và việc làm',
      'JD gửi tới sinh viên trước ngày diễn ra để chuẩn bị hồ sơ',
      'Q&A trực tiếp với sinh viên',
      'Nhận CV và phỏng vấn ngay tại chương trình',
      'Vieclam24h thiết kế slide từ nội dung doanh nghiệp cung cấp',
    ],
    optional: ['Phỏng vấn trực tiếp', 'Thực hành phỏng vấn (Mock Interview)', 'Lucky Draw / Mini Game, CV Review'],
    agenda: [
      { duration: '30 phút', content: 'Check-in' },
      { duration: '15 phút', content: 'Khai mạc, giới thiệu Nhà trường và Doanh nghiệp' },
      { duration: '45 phút', content: 'Workshop chuyên đề' },
      { duration: '15 phút', content: 'Q&A' },
      { duration: '90 phút', content: 'Cơ hội nghề nghiệp: tiếp nhận hồ sơ, phỏng vấn trực tiếp' },
    ],
    totalDuration: '3 giờ 15 phút',
  },
  {
    id: 'livestream',
    name: 'Livestream kết hợp tuyển dụng',
    subtitle: 'Phát sóng từ studio Nhà trường',
    tagline: 'Lên sóng kênh trường và Vieclam24h, sinh viên nộp CV ngay khi xem.',
    format: 'Livestream trực tuyến từ studio Nhà trường, phát trên kênh của trường và kênh Vieclam24h',
    scale: '100 – 500 sinh viên',
    duration: '2 giờ 10 phút',
    benefits: [
      'Thời lượng trên sóng giới thiệu doanh nghiệp và vị trí tuyển dụng',
      'Logo trên màn hình livestream và backdrop studio, MC nhắc tên',
      'Link/mã QR nộp CV hiển thị ngay trên màn hình',
      'Trả lời câu hỏi của sinh viên trong phần Q&A',
      'Nhận danh sách CV ứng viên sau buổi phát sóng',
    ],
    optional: ['Phỏng vấn nhanh trực tuyến', 'Mock Interview và CV Review trên sóng', 'Mini game, Lucky Draw, tặng quà'],
    agenda: [
      { duration: '10 phút', content: 'Mở màn: đếm ngược, điểm danh online, hướng dẫn link/mã QR nộp CV' },
      { duration: '10 phút', content: 'Khai mạc, giới thiệu Nhà trường, Vieclam24h và Doanh nghiệp đồng hành' },
      { duration: '30 phút', content: 'Chuyên đề kỹ năng hoặc định hướng nghề nghiệp' },
      { duration: '15 phút', content: 'Q&A với sinh viên' },
      { duration: '60 phút', content: 'Cơ hội nghề nghiệp: giới thiệu vị trí, tiếp nhận hồ sơ, phỏng vấn nhanh trực tuyến' },
      { duration: '5 phút', content: 'Tổng kết, nhắc lại link nộp CV và bước tiếp theo' },
    ],
    totalDuration: '2 giờ 10 phút',
  },
]

export interface CompareRow {
  label: string
  values: Record<PackageId, string | boolean>
}

export const COMPARE_ROWS: CompareRow[] = [
  { label: 'Hình thức', values: { jobfair: 'Gian hàng tại trường', workshop: 'Workshop + phỏng vấn', livestream: 'Phát sóng trực tuyến' } },
  { label: 'Quy mô dự kiến', values: { jobfair: '300 – 1.000 SV', workshop: '100 – 500 SV', livestream: '100 – 500 SV' } },
  { label: 'Thời lượng', values: { jobfair: '~4 giờ', workshop: '3 giờ 15 phút', livestream: '2 giờ 10 phút' } },
  { label: 'Gian hàng tuyển dụng riêng', values: { jobfair: true, workshop: false, livestream: false } },
  { label: 'Thời lượng chia sẻ / lên sóng', values: { jobfair: false, workshop: true, livestream: true } },
  { label: 'Nhận CV ứng viên', values: { jobfair: true, workshop: true, livestream: true } },
  { label: 'Phỏng vấn nhanh', values: { jobfair: true, workshop: true, livestream: true } },
  { label: 'Truyền thông kênh trường + Vieclam24h', values: { jobfair: true, workshop: true, livestream: true } },
  { label: 'Báo cáo kết quả sau chương trình', values: { jobfair: true, workshop: true, livestream: true } },
]

export const CONTACT = {
  name: 'Nguyễn Xuân Nhật Cường',
  phoneDisplay: '0812 668 268',
  phoneHref: 'tel:0812668268',
} as const
