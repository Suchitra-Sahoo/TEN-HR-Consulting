import React from "react";
import "./PeoEor.css";
import { peoPricing } from "../../../assets/data/peoPricing";

function PricingPeoEor() {
  const peoResources = [
    {
      id: 0,
      img: "https://recruitindo.com/wp-content/uploads/2023/12/Job-Vacancies-1024x576.jpg",
      article: "Articles",
      resources: " ",
      title:
        "Managing Remote Teams in Indonesia: Essential Tools and Strategies via PEO/EOR Services",
      text: "Introduction In the age of globalization and digital transformation, the ability to manage remote teams effectively",
    },
    {
      id: 1,
      img: "https://recruitindo.com/wp-content/uploads/2024/01/cytonn-photography-GJao3ZTX9gU-unsplash-1024x684.jpg",
      article: "Articles",
      resources: " ",
      title:
        "Detailed Analysis of Key Regulations: A Deep Dive into Indonesian Labor Laws",
      text: "As Indonesia emerges as a vibrant business hub in Southeast Asia, the complexities of its employment",
    },
    {
      id: 2,
      img: "https://recruitindo.com/wp-content/uploads/2024/01/impact-1024x683.jpeg",
      article: "Articles",
      resources: " ",
      title:
        "Strategic Executive Search Solutions for Indonesia’s Top Businesses: Customized Approaches for Success",
      text: "Indonesia, an emerging market with a dynamic economy, houses a multitude of businesses that continue to",
    },
  ];

  return (
    <div className="peo-container">
      {/* Main Section */}
      <div className="peo-pricing">
        <h2>PRICING</h2>
        <h1>PEO / EOR Price Sheet</h1>
        <div className="peo-pricing-cards">
          {peoPricing.map((data) => (
            <div key={data.id} className="peo-pricing-card">
              <h3>{data.name}</h3>
              <div className="peo-pricing-card-price">
                <h5>Starting from</h5>
                <h3>{data.price}</h3>
                <h5>per employee per month</h5>
              </div>
              <hr />
              <h4>Includes</h4>
              <ul>
                {data.include.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className="peo-pricing-btn">Let’s Talk</button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="peo-resources">
        <h2>Resources</h2>
        <h1>Resources and Articles</h1>
        <div className="peo-resource-cards">
          {peoResources.map((ele, index) => (
            <>
              <div key={index} className="peo-resource-card">
                <img src={ele.img} alt="" />
                <div className="peo-resource-card-btn">
                  <button className="peo-resource-article-btn">
                    {" "}
                    {ele.article}{" "}
                  </button>
                  {ele.resources === " " ? (
                    " "
                  ) : (
                    <>
                      ,{" "}
                      <button className="peo-resources-btn">
                        {ele.resources}
                      </button>
                    </>
                  )}
                </div>
                <div className="peo-resource-card-text">
                  <h4>{ele.title} </h4>
                  <p> {ele.text}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <button className="peoResource-btn">
          <a href="/resources">See Our Resources</a>
        </button>
      </div>
    </div>
  );
}

export default PricingPeoEor;