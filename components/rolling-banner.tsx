'use client'

export function RollingBanner() {
  return (
    <div className="w-full bg-primary text-white overflow-hidden">
      <div className="py-3 px-4">
        <div className="relative flex animate-scroll whitespace-nowrap">
          <div className="inline-block px-8 text-lg md:text-xl font-bold">
            WELCOME TO SHINE TOGETHER
          </div>
          <div className="inline-block px-8 text-lg md:text-xl font-bold">
            WELCOME TO SHINE TOGETHER
          </div>
          <div className="inline-block px-8 text-lg md:text-xl font-bold">
            WELCOME TO SHINE TOGETHER
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  )
}
