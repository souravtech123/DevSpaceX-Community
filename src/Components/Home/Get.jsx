export default function WhatYouGet() {
    return (
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
  
          {/* Heading */}
          <span className="inline-block mb-4 px-4 py-1.5 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            What You Get
          </span>
  
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Everything You Need to Grow as a Developer
          </h2>
  
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            DevSpaceX gives you focused spaces, real opportunities, and a strong
            community to build, learn, and grow together.
          </p>
  
          {/* Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {/* Projects */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Project Collaboration
              </h3>
              <p className="mt-3 text-gray-600">
                Discuss ideas, get reviews, and collaborate on real-world projects
                with other developers.
              </p>
            </div>
  
            {/* Internships */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Internship Alerts
              </h3>
              <p className="mt-3 text-gray-600">
                Stay updated with the latest tech internships shared by the
                community.
              </p>
            </div>
  
            {/* Hackathons */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Hackathon Updates
              </h3>
              <p className="mt-3 text-gray-600">
                Get notified about upcoming hackathons and competitive coding
                events.
              </p>
            </div>
  
            {/* Tech News */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Tech Newsroom
              </h3>
              <p className="mt-3 text-gray-600">
                Follow hiring trends, new tools, AI updates, and tech industry
                news.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }