import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer Intern</h4>
                <h5>HisanLabs Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed AWS environments, built Jenkins CI/CD pipelines, containerized applications 
              with Docker & Kubernetes, and automated infrastructure using Terraform. 
              Implemented monitoring with Prometheus and Grafana.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analysis Intern</h4>
                <h5>Parsh Infotech Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Performed data analysis and built dashboards using Power BI and Python. 
              Designed SQL databases and developed data processing modules using OOP concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
