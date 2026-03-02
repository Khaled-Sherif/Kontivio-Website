export function CirclePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute top-0 right-0 w-64 h-64 opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function DotsPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <svg className="absolute bottom-10 right-10 w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 5 }).map((_, i) => 
          Array.from({ length: 5 }).map((_, j) => (
            <circle key={`${i}-${j}`} cx={i * 20 + 10} cy={j * 20 + 10} r="2" fill="currentColor" />
          ))
        )}
      </svg>
    </div>
  );
}

export function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-white/5"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-white/5"></div>
    </div>
  );
}
