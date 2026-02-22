export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef4ff] overflow-hidden">

      {/* Soft background accents */}
      <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            Built for Developers
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            A Professional Space to <br />
            <span className="text-blue-600">Build & Collaborate</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            DevSpaceX helps developers discuss projects, discover internships
            and hackathons, and stay aligned with the latest tech ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* WhatsApp Community Link */}
            <a
              href="https://chat.whatsapp.com/JB6j4AaqjmtCzoKGgOT3HE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition"
            >
              Join WhatsApp Community
            </a>

            <button className="px-7 py-3.5 bg-white border border-gray-300 hover:border-blue-600 text-gray-900 font-semibold rounded-xl transition">
              Explore Community
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Designed for students, developers & tech communities
          </p>
        </div>

        {/* Right Side – Community Preview */}
        <div className="hidden md:grid grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500">
              Active Projects
            </h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">100+</p>
            <p className="mt-2 text-sm text-gray-500">
              Real-world builds & collaborations
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500">
              Opportunities
            </h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">80+</p>
            <p className="mt-2 text-sm text-gray-500">
              Internships & hackathons shared
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 col-span-2">
            <h3 className="text-sm font-semibold text-gray-500">
              Community Focus
            </h3>
            <p className="mt-2 text-lg font-semibold text-gray-800">
              Learn • Build • Collaborate
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Discussions driven by developers, for developers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}