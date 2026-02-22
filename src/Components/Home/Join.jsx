export default function Join() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <span className="inline-block mb-4 px-4 py-1.5 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
          Join DevSpaceX
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Choose Your Community
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join focused WhatsApp communities to stay updated with internships,
          hackathons, projects, and tech news.
        </p>

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Internships */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Internships
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Daily updates on tech internships & hiring.
            </p>
            <a
              href="https://chat.whatsapp.com/ElxMvfnIvP9HClqcNbPZlG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              Join WhatsApp
            </a>
          </div>

          {/* Hackathons */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Hackathons
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Upcoming hackathons & coding events.
            </p>
            <a
              href="https://chat.whatsapp.com/JM6Qde6wxRm8YXrnGVezTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              Join WhatsApp
            </a>
          </div>

          {/* Projects */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Tech Events
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Explore Tech Events and learn the new technology
            </p>
            <a
              href="https://chat.whatsapp.com/GUiGvr6fIrrI9PGoaFFegg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              Join WhatsApp
            </a>
          </div>

          {/* Tech News */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Tech News
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Latest tech news, AI updates & trends.
            </p>
            <a
              href="https://chat.whatsapp.com/F8nYUmUix3ADAtuHccIQ31"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              Join WhatsApp
            </a>
          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          All communities are moderated to keep discussions relevant and spam-free.
        </p>

      </div>
    </section>
  );
}