import React from "react";

export const Hero = () => {
  return (
    <div className = "hero-root">
      <div className="badge">
        <span>Cap table basic</span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <h1 className ="hero-title">
        Magically simplify<br></br> accounting and taxes
      </h1>
      <p className="hero-des">
        Automated bookkeeping, effortless tax filing, real time insights.<br></br> Set up in 10 mins. Back to building by 4:08am.
      </p>
        <div className="hero-cta">
            <button className='btn' >Get Started</button>
            <button className='btn1' >
                <span>
                    Pricing
                </span>
                <svg width="16" height="16" fill="none">
                    <path
                        stroke="#1E1F25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".5"
                        strokeWidth="1.25"
                        d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
  );
};
