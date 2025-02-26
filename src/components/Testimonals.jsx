import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-tight">
      <div className="text-center">
        <span className="bg-neutral-900 text-white rounded-full text-sm font-medium px-2 py-1 uppercase">
          Testimonials
        </span>
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-1 mt-10 font-bold text-neutral-900 tracking-tight">
          What Our Customers Say
        </h2>
        <p className="text-lg text-neutral-600 pt-3 max-w-2xl mx-auto bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
          Our customers love our platform. Here&apos;s what they have to say.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="mt-1 mb-6 text-xl font-semibold text-gray-900">
                  {testimonial.company}
                </h3>
                <p className="text-gray-600 text-base">{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                    src={testimonial.image}
                    alt={`${testimonial.name}'s picture`}
                  />
                  <div>
                    <p className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 italic">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
