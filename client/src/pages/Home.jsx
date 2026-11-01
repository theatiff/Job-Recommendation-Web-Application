import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { Sparkles, Briefcase, TrendingUp, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (location) params.append("location", location);
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <div className="space-y-16">
      {/* Hero - split layout */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              AI job matches, faster — land the role you deserve
            </h1>
            <p className="text-primary-100 mb-6 max-w-xl">
              Personalized job recommendations, automated application tracking,
              and curated opportunities from top companies.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="flex-1 w-full">
                <label className="sr-only">Job title or keywords</label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Job title, keywords (e.g. Frontend Engineer)"
                  className="w-full input-field bg-white/10 placeholder-white/70 text-white"
                />
              </div>
              <div className="w-full sm:w-64">
                <label className="sr-only">Location</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location (optional)"
                  className="w-full input-field bg-white/10 placeholder-white/70 text-white"
                />
              </div>
              <button type="submit" className="btn-primary inline-flex items-center gap-2">
                <Search className="h-4 w-4" /> Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              {isAuthenticated ? (
                <Link
                  to={user?.role === "recruiter" ? "/recruiter/dashboard" : "/dashboard"}
                  className="btn-outline bg-white/10 text-white"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn-primary bg-white text-primary-600">
                    Create Account
                  </Link>
                  <Link to="/login" className="btn-outline border-white text-white">
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* lightweight stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-primary-200">Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm text-primary-200">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-primary-200">Match</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block bg-white/5 rounded-2xl h-80 w-full shadow-xl flex items-center justify-center">
              <div className="text-center px-6">
                <div className="bg-gradient-to-tr from-primary-600 to-primary-400 inline-block p-6 rounded-xl shadow-2xl">
                  <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="220" height="140" rx="12" fill="white" opacity="0.06" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18">Jobs curated for you</text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:hidden mt-6">
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <Sparkles className="mx-auto h-8 w-8 text-white mb-3" />
                <div className="font-bold">AI-powered matches</div>
                <div className="text-sm text-primary-200">Personalized roles delivered daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-10">What we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border hover:shadow-lg transition">
              <Sparkles className="h-8 w-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">AI-Powered Matching</h3>
              <p className="text-sm text-gray-600">We rank and surface the best-fit roles for your profile.</p>
            </div>

            <div className="p-6 rounded-lg border hover:shadow-lg transition">
              <Briefcase className="h-8 w-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">Curated Opportunities</h3>
              <p className="text-sm text-gray-600">Hand-picked job listings from trusted employers.</p>
            </div>

            <div className="p-6 rounded-lg border hover:shadow-lg transition">
              <TrendingUp className="h-8 w-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600">Application tracking and status updates in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to get started?</h3>
            <p className="text-primary-100">Create your profile and get matched with top companies.</p>
          </div>
          <div className="flex gap-3">
            {!isAuthenticated && (
              <Link to="/register" className="btn-primary bg-white text-primary-600">Create Account</Link>
            )}
            <Link to="/jobs" className="btn-outline border-white text-white">Browse Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
