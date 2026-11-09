
import { useState } from 'react'
import mountainBg from '../assets/mountain-bg.jpg'
import profileImg from '../assets/profile.jpg'

export default function Profile() {
  const [saved, setSaved] = useState(false)

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl rounded-3xl overflow-hidden relative shadow-2xl border border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mountainBg})` }}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/95 via-slate-900/80 to-slate-900/20 backdrop-blur-[2px]" />

        <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <div className="relative mb-3 inline-block">
                <img
                  src={profileImg}
                  alt="Kahlil Gibran Chaniago"
                  className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-white/40 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
              </div>

              <h2 className="text-lg font-bold text-white tracking-tight mb-1">
                Kahlil Gibran Chaniago
              </h2>

              <p className="text-sm text-slate-300 font-medium mb-3">
                Coding For Fun
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Software Engineer</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>In Greatest City</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end w-full sm:w-auto gap-4">
              <button
                onClick={() => setSaved(!saved)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                title="Simpan"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill={saved ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-1 text-base sm:text-lg font-bold text-white leading-none mb-1">
                  <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>4.6</span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  rating
                </span>
              </div>

              <div className="w-px h-6 bg-white/20" />

              <div>
                <div className="text-base sm:text-lg font-bold text-white leading-none mb-1">
                  5 days
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  duration
                </span>
              </div>

              <div className="w-px h-6 bg-white/20" />

              <div>
                <div className="text-base sm:text-lg font-bold text-emerald-400 leading-none mb-1">
                  $85 /hr
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  rate
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-1.5">
                {/* Figma */}
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
                    <path d="M19 28.5C19 23.25 23.25 19 28.5 19C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38C23.25 38 19 33.75 19 28.5Z" fill="#1ABCFE" />
                    <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5Z" fill="#0ACF83" />
                    <path d="M19 0V19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0H19Z" fill="#FF7262" />
                    <path d="M0 9.5C0 14.75 4.25 19 9.5 19H19V0H9.5C4.25 0 0 4.25 0 9.5Z" fill="#F24E1E" />
                    <path d="M0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5C4.25 19 0 23.25 0 28.5Z" fill="#A259FF" />
                  </svg>
                </div>


                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                  </svg>
                </div>


                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#FDB300" strokeWidth="1.8">
                    <path d="M6 3.5L2 9.5L12 21.5L22 9.5L18 3.5H6Z" />
                    <path d="M2 9.5H22M6 3.5L12 21.5M18 3.5L12 21.5" />
                  </svg>
                </div>


                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  </svg>
                </div>


                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-sm text-[#FF9A00] font-black text-[10px]">
                  Ai
                </div>
              </div>


              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow cursor-default select-none">
                <span>get in touch</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
