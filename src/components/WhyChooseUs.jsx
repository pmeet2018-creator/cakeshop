import business from '../config/business.js'

export default function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Why Customers Choose Us</span>
          <h2 id="why-heading">Baked with care, every single time</h2>
        </div>
        <div className="why-grid">
          {business.whyChooseUs.map((item, i) => (
            <div className="why-card" key={i}>
              <span className="why-card__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
