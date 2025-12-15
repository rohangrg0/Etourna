import React, { useState } from "react";

const Subscription: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      monthly: "$0",
      yearly: "$0",
      features: [
        "Access to public tournaments",
        "Register for up to 3 tournaments per month",
        "Basic match schedule view",
        "Community support only",
        "Standard advertisements displayed",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Plus",
      monthly: "$9.99/mo",
      yearly: "$99.99/yr",
      features: [
        "Host up to 10 tournaments per month",
        "Team and player registration management",
        "Custom tournament banners and logos",
        "Email and in-app notifications",
        "Access to match schedules and score updates",
        "Ad-free experience",
        "Basic analytics dashboard",
        "Priority support response",
      ],
      buttonText: "Upgrade to Plus",
      highlight: true,
    },
    {
      name: "Pro",
      monthly: "$19.99/mo",
      yearly: "$199.99/yr",
      features: [
        "Unlimited tournaments hosting",
        "All Plus features included",
        "Advanced analytics and insights",
        "Customizable registration forms",
        "Automated bracket generation",
        "Sponsor and prize pool management",
        "Dedicated account manager",
        "24/7 premium chat and email support",
      ],
      buttonText: "Go Pro",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#FAF7F0] text-[#B17457] py-24 px-8" id="subscription">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
          Unlock your full tournament management potential with flexible plans designed for every organizer.
        </p>

        {/* Toggle for Monthly / Yearly */}
        <div className="flex justify-center items-center mb-16">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-[#B17457]" : "text-[#D8D2C2]"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="mx-3 w-14 h-7 bg-[#4A4947] rounded-full relative flex items-center transition-colors duration-300"
          >
            <span
              className={`w-5 h-5 bg-[#B17457] rounded-full absolute left-1 transition-transform duration-300 ${
                isYearly ? "translate-x-7" : "translate-x-0"
              }`}
            ></span>
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-[#B17457]" : "text-[#D8D2C2]"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between bg-[#FAF7F0] rounded-2xl p-10 shadow-xl hover:scale-105 transition-transform duration-300 border ${
                plan.highlight ? "border-[#B17457]" : "border-gray-700"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-[#4A4947] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}

              {/* Content */}
              <div>
                <h3 className="text-3xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-5xl font-bold mb-6">
                  {isYearly ? plan.yearly : plan.monthly}
                </p>
                <ul className="text-[#4A4947] mb-10 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#B17457] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button (constant position) */}
              <div className="mt-auto">
                <button
                  className={`w-full font-semibold py-3 rounded-lg transition-colors duration-200 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[#B17457] to-[#4A4947] hover:from-[#B17457] hover:to-[#B17457] text-white"
                      : "bg-[#4A4947] hover:bg-[#B17457] text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
