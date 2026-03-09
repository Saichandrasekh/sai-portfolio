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
                <h4>Fullstack Developer</h4>
                <h5>Frontend + Backend + Dashboards</h5>
              </div>
              <h3 className="career-phase">PHASE 1</h3>
            </div>
            <p>
              Built production web applications with modern frontend frameworks,
              backend APIs, databases, and business dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Modeling + MLOps</h5>
              </div>
              <h3 className="career-phase">PHASE 2</h3>
            </div>
            <p>
              Developed ML pipelines for classification and prediction, including
              data preparation, training, evaluation, and API-based model serving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI Solutions Engineer</h4>
                <h5>RAG + Voice AI + Document AI</h5>
              </div>
              <h3 className="career-phase">NOW</h3>
            </div>
            <p>
              Designing enterprise-ready GenAI systems including knowledge
              retrieval assistants, real-time voice agents, and intelligent
              document processing platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
