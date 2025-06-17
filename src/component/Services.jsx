import './ServiceSection.css';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 3h18v13H3z" strokeWidth="2" />
        <path d="M16 16l1.5 4h-11L8 16h8z" strokeWidth="2" />
        <circle cx="7" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </svg>
    ),
    title: 'Super Fast and Free Delivery',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 1L3 5v6c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V5l-9-4z" strokeWidth="2" />
        <path d="M12 11v2" strokeWidth="2" />
      </svg>
    ),
    title: 'Non-contact Shipping',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 20V10" strokeWidth="2" />
        <path d="M8 14h8a4 4 0 0 1-8 0z" strokeWidth="2" />
        <circle cx="12" cy="4" r="2" />
      </svg>
    ),
    title: 'Money-back Guaranteed',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
      </svg>
    ),
    title: 'Super Secure Payment System',
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="service-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="icon">{service.icon}</div>
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
