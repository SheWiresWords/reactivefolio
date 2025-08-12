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
      </main>   
    </div>
  )      
}
