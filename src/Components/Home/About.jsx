export default function About() {
    return (
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
  
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
              About DevSpaceX
            </span>
  
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              A Community Built Around <br />
              Developers & Real Growth
            </h2>
  
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              DevSpaceX is a professional developer community designed to help
              students and developers collaborate on real-world projects,
              discover opportunities, and grow together in the tech ecosystem.
            </p>
  
            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
              From project discussions to hackathons and internships, DevSpaceX
              connects motivated developers in one focused, growth-driven space.
            </p>
          </div>
  
          {/* Right Side – Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Hackathon Updates
              </h3>
              <p className="mt-2 text-gray-600">
              Discover hackathons, form teams, and build impactful solutions together.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Internship and Job Opportunity
              </h3>
              <p className="mt-2 text-gray-600">
              Discover internships, apply early, and build real-world experience.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Tech Events 
              </h3>
              <p className="mt-2 text-gray-600">
              Explore tech events, sessions, and developer meetups.
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Tech News 
              </h3>
              <p className="mt-2 text-gray-600">
              Follow breaking tech news, AI updates, and innovations.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }