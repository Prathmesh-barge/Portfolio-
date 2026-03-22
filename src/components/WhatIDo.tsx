import "./styles/WhatIDo.css";

const technicalSkills = [
  { category: "Cloud Platforms", skills: ["AWS (EC2, VPC, S3, IAM, Route 53, CloudWatch, ECR, Auto Scaling)", "Azure & GCP (Fundamentals)"] },
  { category: "CI/CD Tools", skills: ["Jenkins", "GitHub Actions"] },
  { category: "Containers", skills: ["Docker", "Kubernetes (Minikube)"] },
  { category: "Infrastructure as Code", skills: ["Terraform", "AWS CloudFormation"] },
  { category: "Operating Systems", skills: ["Linux (Ubuntu, Amazon Linux)", "Windows"] },
  { category: "Version Control", skills: ["Git", "GitHub"] },
  { category: "Scripting", skills: ["Bash", "Shell", "Python (Basic)"] },
  { category: "Monitoring & Logging", skills: ["AWS CloudWatch", "Prometheus", "Grafana", "Datadog"] },
  { category: "Databases", skills: ["MySQL", "SQL"] },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO" style={{ 
      height: "auto", minHeight: "100vh", padding: "100px 5vw", 
      display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "40px"
    }}>
      <div className="what-box-title" style={{ flex: "1 1 300px", textAlign: "left", zIndex: 99, alignSelf: "flex-start", marginTop: "10vh" }}>
        <h2 className="title" style={{ fontSize: "clamp(38px, 5.8vw, 78px)", margin: 0, letterSpacing: "5px", lineHeight: "1.2" }}>
          TECHNICAL <br /><span className="do-h2">SKILLS</span>
        </h2>
      </div>
      
      <div className="what-box" style={{ flex: "1 1 500px", maxWidth: "700px", zIndex: 99, display: "flex", justifyContent: "flex-end", margin: 0 }}>
        <div className="what-box-in" style={{ 
          position: "relative", display: "flex", height: "auto", minHeight: "550px", maxHeight: "80vh",
          width: "100%", padding: "40px", boxSizing: "border-box", 
          background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(15px)", borderRadius: "24px",
          zIndex: 99 
        }}>
          

          
          {/* scroll container for grid */}
          <div className="tech-skills-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            width: "100%",
            height: "100%",
            overflowY: "auto",
            paddingRight: "15px",
            zIndex: 10
          }}>
            {technicalSkills.map((section, idx) => (
              <div key={idx} className="tech-skills-category" style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "15px",
                borderRadius: "10px",
              }}>
                <h3 style={{
                  fontSize: "14px",
                  color: "#e2e8f0",
                  marginTop: 0,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}>{section.category}</h3>
                <div className="what-content-flex" style={{ gap: "6px" }}>
                  {section.skills.map((skill, i) => (
                    <div key={i} className="what-tags" style={{ 
                      background: "rgba(255, 255, 255, 0.08)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      padding: "3px 9px",
                      fontSize: "10px"
                    }}>{skill.trim()}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
