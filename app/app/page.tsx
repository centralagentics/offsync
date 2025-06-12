export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-xl">OS</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                OffSync
              </h1>
              <p className="text-green-400 text-sm font-medium">Navigate the Unpredictable</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The world's first security-first calendar platform. Break predictable routines, 
            maintain productivity, stay safe.
          </p>
        </header>

        {/* Security Score */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-12 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-green-400 font-semibold">Security Score</span>
            <span className="text-3xl font-bold">87%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{width: "87%"}}></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Above average - room for improvement</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-gray-400">AI-powered routine randomization that maintains productivity while breaking predictable patterns.</p>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Route Intelligence</h3>
            <p className="text-gray-400">Dynamic route generation with security analysis and anti-surveillance path optimization.</p>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Emergency Protocol</h3>
            <p className="text-gray-400">Instant SOS broadcasting with GPS location and configurable emergency response actions.</p>
          </div>
        </div>

        {/* Privacy Levels */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Privacy Sensitivity Levels</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div>
                <span className="font-semibold text-blue-300">Low Sensitivity</span>
                <p className="text-gray-400 text-sm">5-15 minute schedule shifts • Minimal disruption</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div>
                <span className="font-semibold text-yellow-300">Medium Sensitivity</span>
                <p className="text-gray-400 text-sm">30-60 minute adjustments • Event reordering</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div>
                <span className="font-semibold text-red-300">High Sensitivity</span>
                <p className="text-gray-400 text-sm">Day-level reallocation • Maximum security</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-105">
            Start Securing Your Schedule
          </button>
          <p className="text-gray-400 mt-4">Join the privacy-first scheduling revolution</p>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 border-t border-gray-800 pt-8">
          <p>&copy; 2025 Central Agentics. OffSync - Security First Calendar Platform.</p>
        </footer>
      </div>
    </div>
  )
}
