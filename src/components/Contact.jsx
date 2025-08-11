export default function Contact() {
  return (
    <section className="section" id="contact" style={{ backgroundColor: 'var(--light)' }}>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
          <h3>Location</h3>
          <p>Belagavi, Karnataka</p>
        </div>
        <div className="contact-item">
          <div className="contact-icon"><i className="fas fa-phone"></i></div>
          <h3>Phone</h3>
          <p>+91-7022109329</p>
        </div>
        <div className="contact-item">
          <div className="contact-icon"><i className="fas fa-envelope"></i></div>
          <h3>Email</h3>
          <p>mahadevj2618@gmail.com</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/mahadevj2618" className="social-link" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mahadev-jelugadekar-228389274" className="social-link" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </section>
  )
}
