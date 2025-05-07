
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { GlassCard } from "@/components/ui/GlassCard";

// Technology categories and items
const technologies = {
  all: [
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", category: "frontend" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", category: "frontend" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", category: "backend" },
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", category: "cloud" },
    { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg", category: "cloud" },
    { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-3.svg", category: "devops" },
    { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", category: "database" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg", category: "backend" },
    { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg", category: "devops" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", category: "frontend" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg", category: "frontend" },
    { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg", category: "frontend" },
    { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg", category: "frontend" },
    { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", category: "database" },
    { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg", category: "database" },
    { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg", category: "backend" },
    { name: "C#", logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg", category: "backend" },
    { name: "PHP", logo: "https://cdn.worldvectorlogo.com/logos/php-1.svg", category: "backend" },
    { name: "GraphQL", logo: "https://cdn.worldvectorlogo.com/logos/graphql.svg", category: "backend" },
    { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg", category: "frontend" },
    { name: "Jenkins", logo: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg", category: "devops" },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", category: "devops" },
    { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg", category: "database" },
    { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", category: "cloud" },
  ]
};

// Filter based on categories
const filterTechnologies = (category: string) => {
  if (category === "all") {
    return technologies.all;
  }
  return technologies.all.filter(tech => tech.category === category);
};

interface TechnologyCardProps {
  name: string;
  logo: string;
  index: number;
  isInView: boolean;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, logo, index, isInView }) => {
  return (
    <div
      className={cn(
        "transform transition-all duration-500",
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0",
        isInView && `delay-[${index * 50}ms]`
      )}
    >
      <GlassCard className="h-full flex flex-col items-center justify-center p-4 hover:border-enterprise-teal/30 transition-all duration-300">
        <div className="w-16 h-16 flex items-center justify-center mb-3">
          <img src={logo} alt={name} className="h-10 w-10 object-contain" />
        </div>
        <h3 className="text-sm font-medium text-gray-700">{name}</h3>
      </GlassCard>
    </div>
  );
};

export function Technologies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedTechs, setDisplayedTechs] = useState(technologies.all);

  // Update displayed technologies when category changes
  useEffect(() => {
    setDisplayedTechs(filterTechnologies(activeCategory));
  }, [activeCategory]);

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "cloud", label: "Cloud" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps" }
  ];

  return (
    <section id="technologies" className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div ref={ref} className="enterprise-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-enterprise-blue mb-4 relative inline-block">
            Technologies We Master
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-enterprise-blue to-enterprise-teal rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions for our clients.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-enterprise-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Technology grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedTechs.map((tech, index) => (
            <TechnologyCard
              key={tech.name}
              name={tech.name}
              logo={tech.logo}
              index={index}
              isInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
