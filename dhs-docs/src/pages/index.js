import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FiArrowRight, FiBook, FiCloud, FiAlertTriangle } from "react-icons/fi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import WarningBar from "../components/WarningBar";
import Footer from "../components/Footer";
import { updates } from "../data/updates";

export default function Home() {
  return (
    <Layout title="Home" description="DHS Documentation Portal">
      <WarningBar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 bg-white">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ml-5 text-gray-800">
            DHS Platform Documentation
          </h1>
          <p className="text-xl mb-8 text-gray-600 ml-5">
            AI-Powered Healthcare Infrastructure Solutions
          </p>
          <Link
            className="ml-5 inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-colors"
            to="/docs/quick-start/getting-started"
          >
            Get Started <FiArrowRight className="ml-2" />
          </Link>
        </div>
        <img
          src={useBaseUrl("img/healthcare-tech.svg")}
          alt="Healthcare Tech"
          className="md:w-1/2 max-w-xs w-full mt-8 md:mt-0"
        />
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <FiBook className="text-3xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Guides & Tutorials
            </h3>
            <p className="text-gray-600">Step-by-step implementation guides</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <FiCloud className="text-3xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Cloud Integration
            </h3>
            <p className="text-gray-600">AWS, Azure & GCP configurations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <FiAlertTriangle className="text-3xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Troubleshooting
            </h3>
            <p className="text-gray-600">Common issues & solutions</p>
          </div>
        </div>
      </div>

      {/* Updates Carousel */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Latest Updates
          </h2>
          <Splide
            options={{
              type: "slide",
              perPage: 3,
              gap: "2rem",
              pagination: false,
              arrows: true,
              breakpoints: {
                1280: { perPage: 3, gap: "2rem" },
                1024: { perPage: 2, gap: "1.5rem" },
                768: { perPage: 1, gap: "1rem" },
              },
            }}
            aria-label="Latest Updates"
            className="px-12 splide mx-auto"
          >
            {updates.map((update, index) => {
              console.log(update);
              return (
                <SplideSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mx-2 mb-4 relative">
                    <span
                      className={`bg-${update.color}-100 text-${update.color}-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block`}
                    >
                      {update.type}
                    </span>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      {update.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{update.content}</p>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                      to={update.link}
                    >
                      Read More <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
