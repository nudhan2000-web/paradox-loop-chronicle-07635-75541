import { Code2, Scale, Shield, Stethoscope, Accessibility } from "lucide-react";

const problems = [
  {
    code: "P001",
    title: "AI-Powered Legal Case Summarization Engine",
    description: "Lawyers and judges spend hours reading lengthy case files. Build an NLP-driven solution that can extract case facts, arguments, and verdicts, and generate concise, structured summaries to assist legal professionals in research and case preparation.",
    icon: Scale,
  },
  {
    code: "P002",
    title: "Smart Grievance Classification and Routing System",
    description: "Government grievance portals receive large volumes of complaints, often misclassified or delayed. Create a platform that uses AI-powered text categorization and urgency prediction to automatically forward issues to the correct department and monitor resolution timelines.",
    icon: Code2,
  },
  {
    code: "P003",
    title: "Decentralized Identity Verification Framework",
    description: "Citizens often face redundant identity verification across platforms. Build a blockchain-based identity management system where users can store and verify their digital credentials securely and share them across services without exposing raw personal data.",
    icon: Shield,
  },
  {
    code: "P004",
    title: "Personalized Treatment Pathway Recommendation System",
    description: "Every patient responds differently to medications and treatment plans, yet hospitals still follow generalized protocols. Create a software solution that uses patient history, demographics, and clinical records to recommend personalized treatment pathways, integrating with hospital management systems for adaptive care suggestions.",
    icon: Stethoscope,
  },
  {
    code: "P005",
    title: "Digital Accessibility Enhancer for Learning Content",
    description: "Hearing and Visually impaired students face challenges accessing digital learning materials. Develop a browser-based tool that automatically converts PDFs, slides, or videos into accessible formats, such as audio transcripts, captions, or screen-reader-friendly text.",
    icon: Accessibility,
  },
];

const ProblemStatementsSection = () => {
  return (
    <section id="problem-statements" className="relative py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
          PROBLEM STATEMENTS
        </h2>

        <p className="font-inter text-base sm:text-lg text-center text-muted-foreground mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          Choose your challenge. Each problem represents a real-world crisis waiting for your innovative solution.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.code}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border hover:border-primary/50 rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>

                    <div className="flex-1 w-full">
                      <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                        <span className="font-orbitron text-xs sm:text-sm text-primary font-bold">
                          {problem.code}
                        </span>
                      </div>

                      <h3 className="font-orbitron text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                        {problem.title}
                      </h3>

                      <p className="font-inter text-sm sm:text-base text-foreground/80 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>

                    <div className="hidden lg:block font-orbitron text-4xl xl:text-5xl font-black text-muted/10 group-hover:text-muted/20 transition-colors">
                      {problem.code}
                    </div>
                  </div>
                </div>

                {index < problems.length - 1 && (
                  <div className="absolute left-6 sm:left-8 top-full h-6 sm:h-8 w-px bg-gradient-to-b from-border to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementsSection;
