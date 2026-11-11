import { useCallback, useEffect, useState } from 'react'
import type { PackageId } from './data/packages'
import { scrollToId } from './lib/scroll'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { UspSection } from './components/UspSection'
import { PackagesSection } from './components/PackagesSection'
import { ValueSection } from './components/ValueSection'
import { ProcessSection } from './components/ProcessSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ThankYouModal } from './components/ThankYouModal'
import { StickyCta } from './components/StickyCta'

export default function App() {
  const [selectedPackages, setSelectedPackages] = useState<PackageId[]>([])
  const [showThanks, setShowThanks] = useState(false)
  const [contactInView, setContactInView] = useState(false)

  const handleQuote = useCallback((id?: PackageId) => {
    if (id) setSelectedPackages((prev) => (prev.includes(id) ? prev : [...prev, id]))
    scrollToId('contact')
  }, [])

  const closeThanks = useCallback(() => setShowThanks(false), [])

  // Ẩn thanh CTA mobile khi form đang hiển thị để không che nút gửi.
  useEffect(() => {
    const el = document.getElementById('contact')
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setContactInView(entry.isIntersecting), { threshold: 0.05 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar onQuote={() => handleQuote()} />
      <main>
        <Hero onQuote={() => handleQuote()} />
        <UspSection />
        <PackagesSection onQuote={handleQuote} />
        <ValueSection />
        <ProcessSection />
        <ContactSection
          selected={selectedPackages}
          onSelectedChange={setSelectedPackages}
          onSuccess={() => setShowThanks(true)}
        />
      </main>
      <Footer />
      <StickyCta onQuote={() => handleQuote()} hidden={contactInView} />
      <ThankYouModal open={showThanks} onClose={closeThanks} />
    </>
  )
}
