import heroImage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-neutral-900 max-w-4xl">
          The All-in-One Platform for Teams
        </h1>

        <p className="text-lg lg:text-xl text-center text-neutral-600 mt-4 lg:mt-6 max-w-2xl">
          Manage your team with advanced features for productivity,
          collaboration, and organization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-8">
          <a
            href="#"
            className="bg-gradient-to-r from-black to-gray-900 py-3 px-6 rounded-md text-white hover:opacity-90 transition-opacity duration-200 text-center"
          >
            Get Started
          </a>

          <a
            href="#"
            className="py-3 px-6 border border-neutral-300 rounded-md hover:border-neutral-600 transition-colors duration-200 text-center"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="mt-10 lg:mt-16">
        <img
          src={heroImage}
          alt="Team collaboration on an all-in-one platform"
          className="w-full "
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
