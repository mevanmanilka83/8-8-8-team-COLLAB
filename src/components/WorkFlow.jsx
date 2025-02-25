import workflow1 from "../assets/dev/workflow.jpg";

const WorkFlow = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-neutral-900">
        Streamline Your Workflow
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-10">
        <div className="relative">
          <img
            src={workflow1}
            alt="Streamline your workflow"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-8">
        <p className="text-lg text-neutral-600 text-center">
          Our platform is designed to help your team with advanced features for
          productivity, collaboration, and organization.
        </p>
      </div>
    </div>
  );
};

export default WorkFlow;
