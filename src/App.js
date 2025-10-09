import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Teknocratz Logo" style={{height: '150px'}} />
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00BCD4 0%, #0D47A1 50%, #E91E63 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              
            </div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="btn-get-started">Get Started</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="badge">
                <span className="badge-icon">⚡</span>
                <span>Transforming IT Solutions</span>
              </div>
              <h1 className="hero-title">
                Empowering Your <br />
                <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="hero-description">
                Leading provider of IT Staffing, Software Development, and Consulting Services. 
                We deliver innovative solutions that drive business growth and digital transformation.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Start Your Project →</button>
                <button className="btn-secondary">Learn More</button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <h3 className="stat-number blue">50+</h3>
                  <p className="stat-label">Projects Completed</p>
                </div>
                <div className="stat">
                  <h3 className="stat-number pink">50+</h3>
                  <p className="stat-label">Expert Team</p>
                </div>
                <div className="stat">
                  <h3 className="stat-number green">98%</h3>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team collaboration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions designed to accelerate your business growth and innovation
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" alt="IT Staffing" />
                <div className="service-icon">
                  <span>👥</span>
                </div>
              </div>
              <h3>IT Staffing</h3>
              <p className="service-description">
                Access top-tier tech talent to scale your team quickly and efficiently. 
                We connect you with skilled IT professionals who match your project requirements.
              </p>
              <ul className="service-features">
                <li>• Contract Staffing</li>
                <li>• Permanent Placement</li>
                <li>• Staff Augmentation</li>
                <li>• Remote Teams</li>
              </ul>
            </div>

            <div className="service-card featured">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="Software Development" />
                <div className="service-icon">
                  <span>💻</span>
                </div>
              </div>
              <h3>Software Development</h3>
              <p className="service-description">
                Custom software solutions tailored to your business needs. From web applications 
                to mobile apps, we build scalable and secure software.
              </p>
              <ul className="service-features">
                <li>• Web Development</li>
                <li>• Mobile Apps</li>
                <li>• Cloud Solutions</li>
                <li>• API Integration</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="IT Consulting" />
                <div className="service-icon">
                  <span>📊</span>
                </div>
              </div>
              <h3>IT Consulting</h3>
              <p className="service-description">
                Strategic technology consulting to optimize your IT infrastructure and drive 
                digital transformation across your organization.
              </p>
              <ul className="service-features">
                <li>• Digital Strategy</li>
                <li>• Process Optimization</li>
                <li>• Technology Audit</li>
                <li>• IT Roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-left">
              <h2 className="section-title">
                Why Choose <br />
                <span className="gradient-text">Teknocratz?</span>
              </h2>
              <p className="section-description">
                With years of experience in the IT industry, we have built a reputation for delivering 
                exceptional solutions that drive real business value. Our team combines technical 
                expertise with industry knowledge to provide cutting-edge services and solutions.
              </p>
              <ul className="benefits-list">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Industry-leading expertise in IT solutions</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Dedicated team of certified professionals</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Agile methodology for rapid delivery</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>24/7 support and maintenance</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Scalable solutions for growing businesses</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Competitive pricing and transparent billing</span>
                </li>
              </ul>
              <button className="btn-primary">Discover Our Story</button>
            </div>
            <div className="why-choose-right">
              <div className="stats-cards">
                <div className="stat-card blue-card">
                  <h3 className="stat-big">2+</h3>
                  <p>Young Energy</p>
                </div>
                <div className="stat-card green-card">
                  <h3 className="stat-big">50+</h3>
                  <p>Team Members</p>
                </div>
                <div className="stat-card pink-card">
                  <h3 className="stat-big">20+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-card green-card-alt">
                  <h3 className="stat-big">50+</h3>
                  <p>Projects Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to transform your business? Let us discuss how we can help you achieve your goals.
          </p>
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="yourname@example.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your project..." rows="5"></textarea>
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-icon email">
                  <span>✉️</span>
                </div>
                <h4>Email Us</h4>
                <p>crm@teknocratz.com</p>
              </div>
              <div className="cta-card">
                <h3>Start Your Project Today</h3>
                <p>Join hundreds of satisfied clients who trust us with their IT needs and projects.</p>
                <button className="btn-cta">Schedule a Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <div className="footer-logo">
                <div style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #00BCD4 0%, #0D47A1 50%, #E91E63 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  <img src={logo} alt="Teknocratz Logo" style={{height: '150px'}} />
                </div>
              </div>
              <p className="footer-description">
                Empowering businesses through innovative IT solutions and digital transformation services.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">𝕏</a>
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">📷</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">IT Staffing</a></li>
                <li><a href="#services">Software Development</a></li>
                <li><a href="#services">IT Consulting</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Careers</a></li>
                <li><a href="#contact">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 teknocratz.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
