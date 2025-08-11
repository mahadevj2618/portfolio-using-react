export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-img">
            <img src="/project1.2.png" alt="AI Marathi Translation" />
          </div>
          <div className="project-content">
            <h3 className="project-title">AI Marathi Translation</h3>
            <p className="project-desc">Development of smart algorithms for Marathi inscription translation.</p>
            <div className="project-links">
              <a href="http://www.socialresearchfoundation.com/new/publish-journal.php?editID=7657" className="project-link primary" target="_blank">View Paper</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="/project3.png" alt="MovieFlex" />
          </div>
          <div className="project-content">
            <h3 className="project-title">MovieFlex</h3>
            <p className="project-desc">Movie streaming web application with full-stack implementation.</p>
            <div className="project-links">
              <a href="https://github.com/mahadevj2618/MovieFlex" className="project-link primary" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="/project2.png" alt="Boot Data Manager" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Boot Data Manager</h3>
            <p className="project-desc">Spring Boot application for seamless CRUD operations.</p>
            <div className="project-links">
              <a href="https://github.com/mahadevj2618/Boot-Data-Manager" className="project-link primary" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
