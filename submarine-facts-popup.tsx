"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const SUBMARINE_FACTS = [
  "The USS Holland, launched in 1897, was the first submarine to be used by the U.S. Navy, featuring a gasoline engine and electric motor.",
  "USS Nautilus (SSN-571), commissioned in 1954, was the world's first nuclear-powered submarine and could stay submerged indefinitely.",
  "The USS Thresher sank in 1968, becoming the first nuclear submarine to be lost at sea in a tragic accident at a depth of 8,400 feet.",
  "Submarine crews typically spend 3-4 months submerged on patrol, with limited contact with the outside world.",
  "USS Ohio-class submarines carry 24 Trident II missiles, each capable of striking multiple targets thousands of miles away.",
  "The periscope was invented in the 1850s, revolutionizing submarine warfare by allowing observation above water while remaining hidden below.",
  "Modern submarines can dive to depths exceeding 1,000 feet and operate at speeds over 20 knots submerged.",
  "USS Tang holds the record for sinking the most tonnage of enemy ships, totaling over 116,000 tons during World War II.",
  "Submarine hulls are built with high-strength steel and feature double-walls to protect against the crushing pressure of deep ocean water.",
  "The first successful submarine attack in warfare occurred during the American Civil War when CSS David damaged USS New Ironsides in 1863.",
  "Nuclear submarines can generate their own oxygen through electrolysis and can operate for up to 20 years without refueling.",
  "The USS Bowfin sank 44 ships during World War II and is now a museum ship at the Pearl Harbor Historic Sites.",
  "Modern fast-attack submarines like the Virginia-class can change course or depth in seconds to evade detection.",
  "Submarines communicate using extremely low frequency (ELF) waves that can penetrate seawater and reach submarines at extreme depths.",
  "The first female commanding officer of a U.S. Navy submarine, Commander Becky Margiotta, took command of USS Santa Fe in 2022.",
]

export function SubmarineFactsPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [fact, setFact] = useState<string>("")

  useEffect(() => {
    const schedulePopup = () => {
      // Random interval between 1 and 6 hours in milliseconds
      const minMs = 60 * 60 * 1000 // 1 hour
      const maxMs = 6 * 60 * 60 * 1000 // 6 hours
      const randomInterval = Math.random() * (maxMs - minMs) + minMs

      console.log(`[Submarine Facts] Next popup in ${Math.round(randomInterval / 1000 / 60)} minutes`)

      const timeoutId = setTimeout(() => {
        const randomFact = SUBMARINE_FACTS[Math.floor(Math.random() * SUBMARINE_FACTS.length)]
        setFact(randomFact)
        setIsOpen(true)
        console.log("[Submarine Facts] Popup displayed")
      }, randomInterval)

      return timeoutId
    }

    const timeoutId = schedulePopup()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-400 rounded-lg shadow-2xl max-w-md w-full animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-blue-900/60 border-b border-blue-400 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">⚓</span>
                Navy Submarine Fact
              </h2>
              <button
                onClick={handleClose}
                className="text-blue-200 hover:text-white transition-colors p-1 hover:bg-blue-800 rounded"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <p className="text-lg text-white leading-relaxed mb-6">{fact}</p>
              <button
                onClick={handleClose}
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
