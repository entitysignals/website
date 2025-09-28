"use client";
import { Container, Input } from "@redefinition/ui";
import { useState } from "react";

export default function Page() {
  const [domain, setDomain] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    
    setIsAnalyzing(true);
    setResults(null);
    
    try {
      // TODO: Replace with actual API call
      const mockResults = await simulateAnalysis(domain);
      setResults(mockResults);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Mock API simulation - replace with real API later
  const simulateAnalysis = async (domain: string) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      domain,
      overallScore: Math.floor(Math.random() * 40) + 60, // 60-100
      scores: {
        technical: Math.floor(Math.random() * 30) + 70,
        content: Math.floor(Math.random() * 30) + 65,
        authority: Math.floor(Math.random() * 25) + 60,
        aiReadiness: Math.floor(Math.random() * 35) + 65
      },
      timestamp: new Date().toISOString()
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30">
      {/* Main Platform Interface */}
      <div className="flex flex-col items-center justify-center min-h-screen py-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Platform Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Signals GEO
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Analyze your website's search and AI performance
              </p>
            </div>

            {/* Analysis Form */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 mb-8">
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="url"
                      placeholder="Enter domain (e.g., example.com)"
                      value={domain}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)}
                      className="text-lg py-4 text-center"
                      disabled={isAnalyzing}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isAnalyzing || !domain.trim()}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-w-[140px]"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze"}
                  </button>
                </div>
                {isAnalyzing && (
                  <div className="text-sm text-gray-500">
                    Running comprehensive analysis... This may take a few minutes.
                  </div>
                )}
              </form>
            </div>

            {/* Results Display */}
            {results && (
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 text-left">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Analysis Results for {results.domain}
                  </h2>
                  <div className="text-sm text-gray-500">
                    Generated on {new Date(results.timestamp).toLocaleString()}
                  </div>
                </div>

                {/* Overall Score */}
                <div className="text-center mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {results.overallScore}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    Overall GEO Score
                  </div>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                    results.overallScore >= 80 ? 'bg-green-100 text-green-800' :
                    results.overallScore >= 70 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {results.overallScore >= 80 ? 'Excellent' :
                     results.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>

                {/* Detailed Scores */}
                <div className="grid gap-6 md:grid-cols-2">
                  {Object.entries(results.scores).map(([key, score]: [string, number]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-600">{score}/100</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* API Integration Notice */}
                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-sm text-blue-800">
                    <strong>Note:</strong> This is a demonstration interface. 
                    Real analysis results will be integrated via API endpoints.
                  </div>
                </div>
              </div>
            )}

            {/* Quick Info */}
            {!results && !isAnalyzing && (
              <div className="grid gap-6 md:grid-cols-4 text-center">
                <div className="p-4">
                  <div className="text-3xl mb-2">🔧</div>
                  <div className="font-semibold text-gray-900">Technical</div>
                  <div className="text-sm text-gray-600">Performance & Structure</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">📝</div>
                  <div className="font-semibold text-gray-900">Content</div>
                  <div className="text-sm text-gray-600">Quality & Relevance</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-semibold text-gray-900">Authority</div>
                  <div className="text-sm text-gray-600">Trust & Recognition</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="font-semibold text-gray-900">AI Ready</div>
                  <div className="text-sm text-gray-600">Future-Proof Optimization</div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}


