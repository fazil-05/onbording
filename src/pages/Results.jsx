import React, { useState, useEffect, useCallback } from 'react';
import { Search, Trophy, Download, X, Star, GraduationCap, Medal, RefreshCw, Brain, PenTool, CheckCircle } from 'lucide-react';

const STATIC_RESULTS = [
  { id: 's1', rank: '1st', name: 'Sneha Malhotra', grade: 'Grade 5', comp: 'Spell Bee Competition', score: '99.2%', award: 'National Champion', badgeColor: 'bg-amber-100 text-amber-900 border-amber-200', source: 'official' },
  { id: 's2', rank: '2nd', name: 'Rohan Sharma', grade: 'Grade 4', comp: 'Quiz Competition', score: '98.5%', award: 'Excellence Gold', badgeColor: 'bg-slate-100 text-slate-800 border-slate-200', source: 'official' },
  { id: 's3', rank: '3rd', name: 'Mia Carter', grade: 'Grade 2', comp: 'Art & Craft Competition', score: '97.8%', award: 'Excellence Silver', badgeColor: 'bg-orange-50 text-orange-900 border-orange-200', source: 'official' },
  { id: 's4', rank: '4th', name: 'Aditya Deshmukh', grade: 'Grade 8', comp: 'Handwriting Competition', score: '96.4%', award: 'Excellence Bronze', badgeColor: 'bg-blue-50 text-blue-900 border-blue-100', source: 'official' },
  { id: 's5', rank: '5th', name: 'Kunal Sen', grade: 'Grade 7', comp: 'Math Challenge', score: '95.1%', award: 'Top Rank Medal', badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-100', source: 'official' },
];

const awardColors = {
  'National Champion': 'bg-amber-100 text-amber-900 border-amber-300',
  'Excellence Gold': 'bg-yellow-100 text-yellow-900 border-yellow-300',
  'Excellence Badge': 'bg-indigo-50 text-indigo-900 border-indigo-200',
  'Participation': 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function Results({ navigateTo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [allResults, setAllResults] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); // all | my | official

  const loadResults = useCallback(() => {
    const local = JSON.parse(localStorage.getItem('onbording_results') || '[]');
    const studentName = localStorage.getItem('onbording_student_name') || '';

    // Map local results to display format
    const mapped = local.map((r, i) => ({
      id: r.id,
      rank: `#${i + 1}`,
      name: r.name || studentName || 'You',
      grade: r.grade,
      comp: r.comp,
      score: r.score,
      award: r.award || 'Participation',
      badgeColor: awardColors[r.award] || awardColors['Participation'],
      source: 'local',
      date: r.date,
      scoreRaw: r.scoreRaw,
      total: r.total,
    }));

    setAllResults([...mapped, ...STATIC_RESULTS]);
  }, []);

  useEffect(() => {
    loadResults();
  }, [loadResults]);

  const myResults = allResults.filter(r => r.source === 'local');
  const officialResults = allResults.filter(r => r.source === 'official');

  const displayResults = (() => {
    let base = activeTab === 'my' ? myResults : activeTab === 'official' ? officialResults : allResults;
    if (!searchTerm.trim()) return base;
    const t = searchTerm.toLowerCase();
    return base.filter(r =>
      r.name.toLowerCase().includes(t) ||
      r.grade.toLowerCase().includes(t) ||
      r.comp.toLowerCase().includes(t)
    );
  })();

  return (
    <div className="bg-slate-50 py-16 text-left min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-black tracking-widest text-indigo-600 uppercase">Event Winners</span>
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950">
            Championship Results
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Track your quiz scores, view certificates, and see where you rank. Your results update instantly after each competition.
          </p>
        </div>

        {/* CTA banner if no personal results */}
        {myResults.length === 0 && (
          <div className="mb-10 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-poppins font-black text-xl text-white">Your Results Will Appear Here!</h3>
              <p className="text-sm text-indigo-200 font-medium">Complete a quiz or submit your handwriting to see your score and certificate.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => navigateTo('quiz')}
                className="flex items-center justify-center space-x-2 bg-white text-indigo-700 font-black px-6 py-3 rounded-2xl text-sm hover:bg-indigo-50 active:scale-95 transition-all shadow-md"
              >
                <Brain className="w-4 h-4" />
                <span>Take a Quiz</span>
              </button>
              <button
                onClick={() => navigateTo('handwriting')}
                className="flex items-center justify-center space-x-2 bg-indigo-800 border border-indigo-500 text-white font-black px-6 py-3 rounded-2xl text-sm hover:bg-indigo-900 active:scale-95 transition-all"
              >
                <PenTool className="w-4 h-4" />
                <span>Submit Handwriting</span>
              </button>
            </div>
          </div>
        )}

        {/* Tabs + Search bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex bg-white border border-slate-200 rounded-2xl p-1 space-x-1 shadow-sm">
            {[
              { key: 'all', label: 'All Results' },
              { key: 'my', label: `My Results ${myResults.length > 0 ? `(${myResults.length})` : ''}` },
              { key: 'official', label: 'Official Rankings' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.key
                    ? 'bg-indigo-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-indigo-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Search + refresh */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <input
                type="text"
                placeholder="Search name, grade, competition..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-white text-slate-700 py-3 px-4 pl-10 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-sm font-semibold"
              />
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            </div>
            <button
              onClick={loadResults}
              className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
              title="Refresh results"
            >
              <RefreshCw className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 bg-slate-50 uppercase font-black tracking-wider border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Grade</th>
                  <th className="px-6 py-4">Competition</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Award</th>
                  <th className="px-6 py-4 text-center">Certificate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-xs font-semibold text-slate-700">
                {displayResults.length > 0 ? displayResults.map((row, idx) => (
                  <tr
                    key={row.id || idx}
                    className={`hover:bg-slate-50/70 transition-colors ${row.source === 'local' ? 'bg-indigo-50/30' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 font-bold">
                        {row.source === 'local' ? (
                          <span className="bg-indigo-100 text-indigo-700 text-[9px] font-black px-2 py-0.5 rounded-md uppercase">You</span>
                        ) : idx < 3 ? (
                          <Trophy className={`w-4 h-4 ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-slate-400' : 'text-orange-500'}`} />
                        ) : null}
                        <span className={idx < 3 && row.source !== 'local' ? 'text-blue-950 font-black' : ''}>{row.rank}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-blue-950">{row.name}</td>
                    <td className="px-6 py-4">{row.grade}</td>
                    <td className="px-6 py-4">{row.comp}</td>
                    <td className="px-6 py-4 font-poppins text-indigo-600 font-bold text-sm">{row.score}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-lg border text-[10px] uppercase font-bold ${row.badgeColor}`}>
                        {row.award}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => setSelectedCertificate(row)}
                        className="bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded-xl transition-all active:scale-95 text-[11px] tracking-wide"
                      >
                        View Certificate
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-16 text-center text-slate-400 font-medium">
                      <div className="space-y-2">
                        <Medal className="w-8 h-8 text-slate-300 mx-auto" />
                        <p>No results found. {activeTab === 'my' ? 'Complete a competition to see your score here!' : 'Try a different search term.'}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border-4 border-amber-400 relative overflow-hidden">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-full z-20 active:scale-95 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl" />

                <div className="space-y-6 border-2 border-slate-100 rounded-2xl p-6 sm:p-8 relative z-10 bg-white">
                  <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto relative">
                    <GraduationCap className="w-8 h-8 text-blue-900" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-3 h-3 fill-white text-white" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-poppins text-2xl font-black text-blue-950 tracking-wider">onbording Certificate</h2>
                    <p className="text-[10px] text-indigo-600 font-black tracking-widest uppercase">Of Academic Accomplishment</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Proudly Conferred To</p>
                    <h3 className="font-poppins text-2xl font-extrabold text-blue-900 italic tracking-wide">
                      {selectedCertificate.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md mx-auto">
                      for securing <span className="text-amber-500 font-black text-sm">{selectedCertificate.rank} Rank</span> in the{' '}
                      <span className="text-indigo-900 font-extrabold block text-sm mt-1">
                        {selectedCertificate.comp} ({selectedCertificate.grade})
                      </span>
                      achieving an evaluation score of <span className="text-indigo-600 font-bold">{selectedCertificate.score}</span>.
                    </p>
                  </div>

                  {parseInt(selectedCertificate.score) >= 75 && (
                    <div className="flex items-center justify-center space-x-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl py-2 px-4">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-bold">Excellence Certificate — Score above 75%</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-[10px] text-slate-400">
                    <div className="space-y-1">
                      <span className="block text-slate-700 font-bold font-poppins">Dr. Amanda Pierce</span>
                      <span>Chief Academic Judge</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-slate-700 font-bold font-poppins">onbording Org.</span>
                      <span>Verify: OB-{selectedCertificate.name?.split(' ')[0]}-{Date.now().toString().slice(-4)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => { alert('Downloading certificate PDF... (Simulated)'); setSelectedCertificate(null); }}
                    className="bg-indigo-900 hover:bg-indigo-950 text-white font-extrabold py-3 px-8 rounded-2xl text-xs tracking-wider uppercase flex items-center space-x-2 shadow-md active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
