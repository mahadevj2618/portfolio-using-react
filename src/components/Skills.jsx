export default function Skills() {
  return (
    <section className="section" id="skills" style={{ backgroundColor: 'var(--light)' }}>
      <h2 className="section-title">Professional Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3 className="skill-title">Python</h3>
          <ul className="skill-list">
            <li>Django framework</li>
            <li>Proficient in OOPS Concepts</li>
            <li>Good in Collection Libraries</li>
            <li>Deep Learning (CNN models)</li>
            <li>Database connectivity</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Java</h3>
          <ul className="skill-list">
            <li>Core Java</li>
            <li>Proficient in OOPS Concepts</li>
            <li>Good in Collection Libraries</li>
            <li>JDBC</li>
            <li>Hibernate</li>
            <li>Spring & SpringBoot</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">JavaScript</h3>
          <ul className="skill-list">
            <li>Core JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>API</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Web Technologies</h3>
          <ul className="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
