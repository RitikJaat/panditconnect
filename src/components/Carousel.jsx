import { useState, useEffect } from 'react'

export default function Carousel({ title, subtitle, items }) {
  const [current, setCurrent] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(4)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const next = () => {
    setCurrent((prev) => (prev + 1) % Math.ceil(items.length / itemsPerView))
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + Math.ceil(items.length / itemsPerView)) % Math.ceil(items.length / itemsPerView))
  }

  const startIndex = current * itemsPerView
  const visibleItems = items.slice(startIndex, startIndex + itemsPerView)

  return (
    <div className="py-12">
      {title && <h2 className="section-title text-center mb-2">{title}</h2>}
      {subtitle && <p className="section-subtitle text-center mb-8">{subtitle}</p>}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))` }}>
          {visibleItems.map((item, idx) => (
            <div key={startIndex + idx} className="h-full">
              {item}
            </div>
          ))}
        </div>

        {items.length > itemsPerView && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
              aria-label="Previous items"
            >
              <svg className="w-6 h-6 text-saffron-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
              aria-label="Next items"
            >
              <svg className="w-6 h-6 text-saffron-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(items.length / itemsPerView) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? 'bg-saffron-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
