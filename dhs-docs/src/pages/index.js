import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FiArrowRight, FiBook, FiCloud, FiAlertTriangle } from "react-icons/fi";

export default function Home() {
  return (
    <Layout title="Home" description="DHS Documentation Portal">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>DHS Platform Documentation</h1>
          <p>AI-Powered Healthcare Infrastructure Solutions</p>
          <Link className="cta-button" to="/docs/quick-start/getting-started">
            Get Started <FiArrowRight />
          </Link>
        </div>
        <img
          src={useBaseUrl("img/healthcare-tech.svg")}
          alt="Healthcare Tech"
        />
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <div className="feature-card">
          <FiBook className="feature-icon" />
          <h3>Guides & Tutorials</h3>
          <p>Step-by-step implementation guides</p>
        </div>
        <div className="feature-card">
          <FiCloud className="feature-icon" />
          <h3>Cloud Integration</h3>
          <p>AWS, Azure & GCP configurations</p>
        </div>
        <div className="feature-card">
          <FiAlertTriangle className="feature-icon" />
          <h3>Troubleshooting</h3>
          <p>Common issues & solutions</p>
        </div>
      </div>

      {/* Updates Section */}
      <div className="updates-section">
        <h2>Latest Updates</h2>
        <div className="update-cards">
          <div className="update-card">
            <span className="update-badge">New</span>
            <h4>v1.2 Released</h4>
            <p>Added AWS EMR configuration guide</p>
            <Link to="/docs/updates">Read More →</Link>
          </div>
          <div className="update-card">
            <span className="update-badge">Updated</span>
            <h4>Security Protocols</h4>
            <p>Revised encryption standards</p>
            <Link to="/docs/security">View Changes →</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
