export const ProblemSection = () => {
  return (
    <section 
      aria-label="Problem Statement - Understanding challenges in charity giving"
      className="py-16 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-tight text-primary font-bold">
            Charity giving feels like a black box. You donate, but where does your money truly go? Most people never see the stories, impact, or trust signals behind their giving.
          </p>
          
          {/* Subtle accent underline for visual separation */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sage to-transparent opacity-60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};