import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getAllCaseStudies } from '../data/caseStudies';
import { BlogLayout } from '../components/templates/BlogLayout';
import { BlogHeader } from '../components/molecules/blog/BlogHeader';

interface ProjectsPageProps {
  lang: 'de' | 'en' | 'ja';
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  
  const allProjects = getAllCaseStudies(lang);
  const projectPath = isDe ? 'projekte' : 'projects';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seo = {
    title: isDe ? 'Projekte & Referenzen | Webdesign & Software | Norddorf' : isJa ? 'プロジェクト & 実績 | Norddorf' : 'Projects & References | Web & Software | Norddorf',
    description: isDe 
      ? 'Erfolgreiche Digitalprojekte für den Mittelstand. Von der Handwerker-Website bis zur B2B-Plattform. Sehen Sie, wie wir Unternehmen digital transformieren.' 
      : isJa 
        ? '中小企業向けの成功したデジタルプロジェクト。職人のウェブサイトからB2Bプラットフォームまで。私たちがどのように企業のデジタルトランスフォーメーションを実現するかをご覧ください。'
        : 'Successful digital projects for SMEs. From craftsman websites to B2B platforms. See how we digitally transform businesses.',
  };

  const title = isDe ? 'Alle Projekte' : isJa ? 'プロジェクト一覧' : 'All Projects';
  const subtitle = isDe 
    ? 'Hier zeigen wir, was wir können. Echte Ergebnisse für echte Kunden.' 
    : isJa
      ? '私たちの実力をご覧ください。実際の顧客に対する実際の結果です。'
      : 'Here we show what we can do. Real results for real clients.';

  return (
    <BlogLayout seo={seo} lang={lang}>
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-responsive max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/${lang}/${projectPath}/${project.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300"
              >
                {project.heroImage && (
                  <div className="aspect-video overflow-hidden bg-zinc-100 relative">
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <ArrowUpRight className="text-zinc-900" size={20} />
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium text-zinc-500">
                    <span className="bg-zinc-100 px-2 py-1 rounded text-zinc-600">{project.industry}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-sonic-orange transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 line-clamp-3 leading-relaxed">
                    {project.content.intro}
                  </p>
                  
                  {project.preview?.metric && (
                    <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center gap-3">
                       <span className="text-2xl font-bold text-sonic-orange">{project.preview.metric}</span>
                       <span className="text-sm text-zinc-500 font-medium">{project.preview.metricLabel}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default ProjectsPage;
