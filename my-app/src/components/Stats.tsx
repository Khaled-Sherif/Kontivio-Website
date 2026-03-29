export function Stats() {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50K+', label: 'Support Tickets Resolved' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
