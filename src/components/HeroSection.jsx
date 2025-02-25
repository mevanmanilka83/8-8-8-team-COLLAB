const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl lg:text-6xl font-bold text-center text-neutral-900">
        The All-in-One Platform for Teams
      </h1>
      <p className="text-lg lg:text-xl text-center text-neutral-600 mt-4 lg:mt-6">
        Manage your team with advanced features for productivity, collaboration,
        and organization.
      </p>
      <div className="flex space-x-4 mt-6 lg:mt-8">
        <a
          href="#"
          className="bg-gradient-to-r from-black to-gray-900 py-3 px-6 rounded-md text-white hover:opacity-90 transition-opacity duration-200"
        >
          Get Started
        </a>
        <a
          href="#"
          className="py-3 px-6 border border-neutral-300 rounded-md hover:border-neutral-600 transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
