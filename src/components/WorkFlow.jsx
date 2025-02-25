import workflow1 from "../assets/dev/workflow.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../data";

const WorkFlow = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-12 pb-4">
        Streamline Your Workflow
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={workflow1}
          alt="Streamline your workflow"
          className="w-full max-w-md h-auto mx-auto rounded-lg  object-cover"
        />

        <div className="space-y-6">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 flex justify-center items-center h-10 w-10 rounded-full bg-gradient-to-r from-black to-gray-900 text-white shadow-md ">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-6 ">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
