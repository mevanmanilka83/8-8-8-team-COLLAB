import { features } from "../data";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-3xl lg:text-5xl mt-10 font-bold text-neutral-900 tracking-wide">
          Advanced Features for Teams
        </h2>
        <p className="text-lg text-neutral-600 mt-2 pt-3 max-w-2xl mx-auto bg-gradient-to-r from-slate-300 to-slate-600 text-transparent bg-clip-text ">
          Our platform is designed to help your team with advanced features for
          productivity, collaboration, and organization.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full  text-black mb-4">
                  {feature.icon}
                </div>
                <h3 className="mt-1 mb-6 text-xl font-semibold text-gray-900 ">
                  {feature.text}
                </h3>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
