import { pricingOptions } from "../data";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="bg-neutral-900 text-white rounded-full text-xs font-medium px-3 py-1 uppercase tracking-wider">
          Plans & Pricing
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-6 mb-8 tracking-tight ">
          Flexible Pricing for Your Team
        </h2>

        <p className="bg-gradient-to-r from-slate-300 to-slate-600 text-transparent bg-clip-text text-lg sm:text-xl pb-4">
          Choose the best plan for your team and get started on the path to
          success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto  ">
        {pricingOptions.map((option) => (
          <div
            key={option.id}
            className={`relative flex flex-col h-full p-6 bg-white rounded-2xl shadow-sm transition-all duration-200 hover:shadow-lg ${
              option.title === "Growth Team"
                ? "border-2 border-black"
                : "border border-gray-200"
            }`}
          >
            {option.title === "Growth Team" && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {option.title}
              </h3>
              <div className="flex items-baseline flex-wrap">
                <span className="text-3xl sm:text-4xl font-bold my-4">
                  {option.price}
                </span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>
            <a
              href="#"
              className={`w-full mb-8 py-3 px-4 rounded-full text-center font-medium transition-all duration-200 mt-auto ${
                option.title === "Growth Team"
                  ? "bg-black text-white hover:bg-black"
                  : "bg-white text-black border border-gray-200 hover:border-gray-300"
              }`}
            >
              Get Started
            </a>
            <ul className="space-y-3 mb-6 flex-grow">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0. " />
                  <span className="text-gray-600 text-sm sm:text-base mb-7">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
