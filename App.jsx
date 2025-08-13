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
               
                           
      </main>   
    </div>
  )      
}
