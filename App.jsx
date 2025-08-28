import './App.css'
export default function App(){
  return (                            
    <div className="app">
      <header className="header">
        <div className="nav-left">
        </div>   
        <div className="logo">
          <span className="logo-text">Portfolio</span>
        </div>  
        <div className="nav-right">
          <button className="subscribe-btn">See my Work</button>
        </div>                 
      </header>   
      <main className="main-content">
        {/*Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-title">
              Design anything with <span className="highlight">a little help</span> ✨
            </h1>
            <p className="hero-description">
              From social media posts to presentations, business cards to logos - create stunning 
              designs with our curated collection of professional templates. Start with a template 
              and make it uniquely yours.
            </p>
            <div className="connect-section">
              <p className="connect-text">Contact Me Here: <span className="highlight"> email@gmail.com </span></p>
            
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-templates-grid">
              <div className="template-preview large">
                <div className="template-content">
                  <div className="template-header">Social Media Post</div>
                  <div className="template-body"></div>
                </div>
              </div>
              <div className="template-preview small">
                <div className="template-content">
                  <div className="template-header">Logo Design</div>
                  <div className="template-body"></div>
                </div>
              </div>   
              <div className="template-preview medium">   
                <div className="template-content">
                  <div className="template-header">Business Card</div>
                  <div className="template-body"></div>
                </div>   
              </div>      
            </div>                          
          </div>          
        </section>

        {/* Template Categories */}
        <section className="trending">
          <h2 className="section-title">🎨 Discover What I Do </h2>
          <div className="topics-grid">
            <div className="topic-item">
              <div className="topic-icon lifestyle">📱</div>
              <span>Beautiful Websites</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon inspiration">💼</div>
              <span>Responsive Layouts</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon technology">📊</div>
              <span>Graphic Design</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon music">🎉</div>
              <span>Free Resources</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon travel">📝</div>
              <span>See All</span>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Features */}
            <section className="about-section">
              <h2 className="section-title">✨ My Skills</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-content">
                    <h3>Frontend Development</h3>
                    <p>text</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h3>Graphic Design</h3>
                    <p>text</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💻</div>
                  <div className="feature-content">
                    <h3>User-Interface and Experience</h3>
                    <p>text</p>
                  </div>    
                     
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h3>Mobile Responsiveness</h3>
                    <p>Perfect sizing for every platform and print requirement</p>
                  </div>
                </div>     
             
                                         
              </div>    
            </section>

            {/* Quick Stats */}
            <section className="tag-cloud">
              <h2 className="section-title">📊 By the Numbers</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Websites</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3K+</div>
                  <div className="stat-label">Happy Visitors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Examples</div>
                </div>
              </div>
            </section>

                        {/* Recent Updates */}
            <section className="recent-posts">
              <h2 className="section-title">⚙️ Most Popular Work</h2>
              <div className="recent-post-item">
                <div className="template-thumb social-media"></div>
                <div>
                  <h4>Multipage Portfolio</h4>
                  <span className="post-date">Created 2025</span>
                </div>
              </div>
              <div className="recent-post-item">
                <div className="template-thumb business"></div>
                <div>
                  <h4>Modern Educational Website</h4>
                  <span className="post-date">Created 2024</span>
                </div>
              </div>
              <div className="recent-post-item">
                <div className="template-thumb presentation"></div>
                <div>
                  <h4>Interactive Web App</h4>
                  <span className="post-date">Created 2024</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Template Showcase */}
          <div className="right-column">
            <div className="template-showcase">
              <div className="template-card featured">
                <div className="template-image">
                  <div className="template-preview-large social">
                    <div className="preview-content">
                      <div className="preview-header">Multipage Portfolio</div>
                      <div className="preview-elements">
                        <div className="element small"></div>
                        <div className="element medium"></div>
                        <div className="element large"></div>
                      </div>
                    </div>
                  </div>
                  <div className="template-overlay">
                    <button className="use-template-btn">Use Template</button>
                  </div>
                </div>
                <div className="template-info">
                  <h3>Multipage Portfolio</h3>
                  <p>texg</p>
                  <div className="template-meta">
                    <span className="template-category">Portfolio</span>
                    <span className="template-count">5 Pages</span>
                  </div>
                </div>
              </div>

              <div className="template-card">
                <div className="template-image">
                  <div className="template-preview-medium business">
                    <div className="preview-content">
                      <div className="preview-header">Educational Website</div>
                      <div className="preview-grid">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                      </div>
                    </div>
                  </div>
                  <div className="template-overlay">
                    <button className="use-template-btn">Use Template</button>
                  </div>
                </div>
                <div className="template-info">
                  <h3>Educational Website</h3>
                  <p>text</p>
                  <div className="template-meta">
                    <span className="template-category">Education</span>
                    <span className="template-count">8 Pages</span>
                  </div>
                </div>
              </div>

              <div className="template-card">
                <div className="template-image">
                  <div className="template-preview-medium presentation">
                    <div className="preview-content">
                      <div className="preview-header">Web Apps</div>
                      <div className="preview-slides">
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                      </div>
                    </div>
                  </div>
                  <div className="template-overlay">
                    <button className="use-template-btn">Use Template</button>
                  </div>
                </div>
                <div className="template-info">
                  <h3>Interactive Web App Gallery</h3>
                  <p>text</p>
                  <div className="template-meta">
                    <span className="template-category">Web Apps</span>
                    <span className="template-count">3 Apps</span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
               
 {/*About Me Section */}
        <section className="about-me-section">
          <div className="about-me-grid">
            <div className="about-me-content">
              <h2>About Me</h2>
              <p>
                I'm a web developer and graphic designer with over 2 years of experience creating beautiful, 
                functional websites and digital experiences. My journey started with a love for 
                combining creativity with technology to solve real-world problems.
              </p>
              <p>
                I specialize in modern web design, user experience optimization, and creating 
                clean illustrations. In every project, I bring ideas alive.
              </p>
              <div className="skills-list">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">Graphic Design</span>
                <span className="skill-tag">SEO Optimization</span>
              </div>
            </div>
            <div className="about-me-images">
              <div className="about-image main-image"></div>
              <div className="about-images-grid">
                <div className="about-image small-image"></div>
                <div className="about-image small-image"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2 className="section-title">What I Create</h2>
          <div className="services-grid">
            <div className="service-category">
              <h3>Personal</h3>
              <div className="service-items">
                <div className="service-item">
                  <span>Website Maintenance</span>
                  <span className="service-price">From $50/mo</span>
                </div>
                <div className="service-item">
                  <span>Simple Landing Page</span>
                  <span className="service-price">From $99</span>
                </div>
                <div className="service-item">
                  <span>Single Page Portfolios</span>
                  <span className="service-price">From $299</span>
                </div>
                <div className="service-item">
                  <span>Multipage Websites</span>
                  <span className="service-price">From $499</span>
                </div>
                
                
              </div>
            </div>
            <div className="service-category">
              <h3>Businesses / Organizations</h3>
              <div className="service-items">
                <div className="service-item">
                  <span>Website Maintenance</span>
                  <span className="service-price">From $100/mo</span>
                </div>
                <div className="service-item">
                  <span>One-Page Business Site</span>
                  <span className="service-price">From $399</span>
                </div>
                <div className="service-item">
                  <span>Multipage Business Site</span>
                  <span className="service-price">From $599</span>
                </div>
                <div className="service-item">
                  <span>Wordpress Site</span>
                  <span className="service-price">From $999</span>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="homepage-gallery-section">
          <h2 className="section-title">Recent Work</h2>
          <div className="homepage-gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image portfolio-preview">
                <div className="gallery-overlay">
                  <span className="gallery-title">Portfolio Website</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image education-preview">
                <div className="gallery-overlay">
                  <span className="gallery-title">Educational Platform</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image ecommerce-preview">
                <div className="gallery-overlay">
                  <span className="gallery-title">E-Commerce Store</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image restaurant-preview">
                <div className="gallery-overlay">
                  <span className="gallery-title">Restaurant Website</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image agency-preview">
                <div className="gallery-overlay">
                  <span className="gallery-title">Creative Agency</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image web-app-preview">
                <div className="gallery-overlay">
                  <span className="gallery-title">Web Application</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-cta">
            <button 
              className="view-all-btn"
              onClick={() => setCurrentPage('gallery')}
            >
              View All Projects →
            </button>
          </div>         
        </section> 
      
        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Me</h2>
              <p>
                Ready to start your next project? I'd love to hear from you. I will respond to email in 1-2 business days.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>hello@designstudio.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Houston, TX</span>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo-text">Alexa</div>
              <p>Creating beautiful digital experiences</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          <div className="footer-bottom">
            <p>&copy; 2024 DesignStudio. All rights reserved.</p>
          </div>
          </div>
        </footer>
      </main>    
    </div>   
  )     
}    
  )      
}
