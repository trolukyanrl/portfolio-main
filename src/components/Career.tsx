import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-columns">
            {/* ── Left: Working Experience ── */}
            <div className="career-column-group">
              <h4 className="career-column-heading">Working Experience</h4>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Full Stack Developer (Internship)</h4>
                    <h5>NIELIT Tezpur EC</h5>
                  </div>
                  <h3>2025</h3>
                </div>
                <p>
                  Worked as a Web Development Intern contributing to web-based
                  applications and academic project systems. Designed responsive
                  interfaces, implemented server-side logic, API integration, and
                  database connectivity using modern JavaScript technologies and Git.
                </p>
              </div>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Software Developer (Trainee)</h4>
                    <h5>Numaligarh Refinery Ltd.</h5>
                  </div>
                  <h3>Current</h3>
                </div>
                <p>
                  Leading development of a role-based Fire Safety Asset Management
                  mobile application to digitally manage and monitor fire safety
                  equipment across the organisation. Gained hands-on experience with
                  enterprise-level RBAC, secure authentication, and production-oriented
                  industrial environments.
                </p>
              </div>
            </div>

            {/* ── Right: Project Based Experience ── */}
            <div className="career-column-group">
              <h4 className="career-column-heading">Project Based Experience</h4>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Fire Safety Asset Management App</h4>
                    <h5>PSU Project</h5>
                  </div>
                  <h3>2026</h3>
                </div>
                <p>
                  Role-based mobile app for a PSU built with React Native, Expo SDK,
                  and React. Uses Expo Camera for QR verification, Axios for API calls,
                  React Navigation for routing, and SQL for reliable asset data
                  management with compliance dashboards.
                </p>
              </div>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Student Resources &amp; Job Updates App</h4>
                    <h5>Cross-Platform Mobile Project</h5>
                  </div>
                  <h3>2025</h3>
                </div>
                <p>
                  Cross-platform mobile app delivering question papers, study
                  materials, and real-time job updates via React Native &amp; Expo.
                  Backend powered by Node.js, Express.js, and Appwrite; Firebase Auth
                  for secure authentication; deployed with EAS Build.
                </p>
              </div>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Online Examination System</h4>
                    <h5>Institute Project</h5>
                  </div>
                  <h3>2025</h3>
                </div>
                <p>
                  Full-stack exam platform built with Next.js, React, and JavaScript.
                  Features JWT / session-based auth, MongoDB storage, Next.js API
                  Routes with Node.js, and RESTful APIs for seamless frontend–backend
                  data exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;