import { pricingOptions } from "../data";

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <span className="bg-neutral-900 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Plans & Pricing
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-black to-gray-900 text-white mb-4">
                {option.icon}
              </div>

              <h3 className="mt-1 mb-6 text-xl font-semibold text-gray-900 ">
                {option.text}
              </h3>

              <p className="text-gray-600 text-base">{option.description}</p>

              <p className="text-gray-600 text-base mt-4 font-semibold">
                {option.price}
              </p>

              <a
                href="#"
                className="bg-gradient-to-r from-black to-gray-900 py-3 px-6 rounded-md text-white hover:opacity-90 transition-opacity duration-200 text-center mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
