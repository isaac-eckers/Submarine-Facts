import { SubmarineFactsPopup } from "@/components/submarine-facts-popup"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Navy Submarine History</h1>
          <p className="text-xl text-blue-100">Discover fascinating facts about submarine warfare and innovation</p>
        </div>

        <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-600 rounded-lg p-8 mb-6">
          <p className="text-lg text-blue-50">
            A pop-up will appear randomly between every 1 to 6 hours with interesting historical facts about submarines
            from the United States Navy.
          </p>
        </div>

        <div className="text-sm text-blue-300">Open your browser's console to see timing logs</div>
      </div>

      <SubmarineFactsPopup />
    </main>
  )
}
