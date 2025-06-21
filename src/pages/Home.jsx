import React from 'react';

const Home = () => {
  return (
    <>
      <style>
        {`
          /* Base Styles */
          :root {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --primary-light: #a5b4fc;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --bg-light: #f8fafc;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
            --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
            --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Hero Section */
          .hero-section {
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            color: white;
            padding: 5rem 1.5rem;
            text-align: center;
            border-radius: 1rem;
            margin: 1rem 0 3rem;
            position: relative;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            transform: rotate(30deg);
            animation: shine 8s infinite linear;
          }

          @keyframes shine {
            0% { transform: rotate(30deg) translate(-10%, -10%); }
            100% { transform: rotate(30deg) translate(10%, 10%); }
          }

          .hero-section h1 {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 800;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            position: relative;
          }

          .hero-section p {
            font-size: clamp(1rem, 2vw, 1.25rem);
            max-width: 700px;
            margin: 0 auto 1.5rem;
            opacity: 0.9;
            line-height: 1.6;
            position: relative;
          }

          /* Feature Cards */
          .features-container {
            padding: 0 1rem;
          }

          .feature-card {
            background: white;
            border: none;
            border-radius: 1rem;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            padding: 2rem 1.5rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }

          .feature-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--primary-dark));
            transition: var(--transition);
            transform: scaleX(0);
            transform-origin: left;
          }

          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
          }

          .feature-card:hover::after {
            transform: scaleX(1);
          }

          .feature-card h4 {
            color: var(--text-primary);
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            position: relative;
            padding-left: 2rem;
          }

          .feature-card h4::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          .feature-card p {
            color: var(--text-secondary);
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 0;
          }

          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }

          .animate-slideIn {
            animation: slideIn 0.6s ease-out forwards;
            opacity: 0;
          }

          /* Responsive Adjustments */
          @media (max-width: 992px) {
            .hero-section {
              padding: 4rem 1.5rem;
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 3rem 1rem;
              margin: 0.5rem 0 2rem;
              border-radius: 0.75rem;
            }

            .feature-card {
              padding: 1.5rem 1.25rem;
            }

            .feature-card h4 {
              font-size: 1.1rem;
              padding-left: 1.75rem;
            }

            .feature-card p {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              padding: 2.5rem 1rem;
            }

            .feature-card {
              padding: 1.25rem 1rem;
              margin-bottom: 1rem;
            }

            .feature-card h4 {
              font-size: 1rem;
              padding-left: 1.5rem;
            }
          }
        `}
      </style>
      <div className="container px-0 px-md-3">
        <div className="hero-section animate-fadeIn">
          <h1>👨🏻‍💻 Welcome to User Management</h1>
          <p>
            Streamline your user management with our modern, secure, and intuitive platform. 
            Effortlessly create, update, and manage user profiles with advanced features.
          </p>
        </div>

        <div className="features-container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card animate-slideIn">
                <h4>Effortless User Management</h4>
                <p>
                  Intuitive interface for creating, editing, and deleting user profiles 
                  with advanced search and filtering capabilities.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card animate-slideIn" style={{ animationDelay: '0.2s' }}>
                <h4>Secure Authentication</h4>
                <p>
                  Enterprise-grade security with JWT authentication, role-based access control, 
                  and encrypted data transmission.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card animate-slideIn" style={{ animationDelay: '0.4s' }}>
                <h4>Profile Photo Upload</h4>
                <p>
                  Drag-and-drop image upload with automatic cropping and optimization 
                  for consistent profile pictures across devices.
                </p>
              </div>
            </div>

            {/* Additional cards for better mobile layout */}
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card animate-slideIn" style={{ animationDelay: '0.1s' }}>
                <h4>Real-time Updates</h4>
                <p>
                  Instant synchronization across all devices with WebSocket technology 
                  for seamless collaboration.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card animate-slideIn" style={{ animationDelay: '0.3s' }}>
                <h4>Detailed Analytics</h4>
                <p>
                  Comprehensive user activity reports and insights to help you understand 
                  engagement patterns.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card animate-slideIn" style={{ animationDelay: '0.5s' }}>
                <h4>API Integration</h4>
                <p>
                  RESTful API endpoints for easy integration with your existing systems 
                  and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;