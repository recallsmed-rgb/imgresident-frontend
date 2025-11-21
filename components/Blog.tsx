import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!selectedPost) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPost]);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "5 Mistakes to Avoid in Your USMLE Step 1 Prep",
      excerpt: "Learn the common pitfalls that can hinder your success and how to steer clear of them for a top score.",
      image: "/blog1.avif",
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>Navigating the USMLE Step 1 is a monumental task for any medical student, but especially for International Medical Graduates (IMGs). The pressure is immense, and the stakes are high. While dedication and hard work are crucial, avoiding common mistakes is just as important. Here are five critical pitfalls to steer clear of during your preparation.</p>
          <p><strong>1. Neglecting Foundational Concepts:</strong> Many students jump directly into memorizing facts from review books without ensuring they have a solid understanding of the underlying physiological and pathological principles. This approach can lead to trouble when questions require clinical reasoning and integration of knowledge.</p>
          <p><strong>2. Ineffective Use of Question Banks:</strong> Simply doing thousands of questions isn't enough. The key is to learn from them. This means thoroughly reviewing every question, including the ones you got right, to understand the rationale behind the correct and incorrect answers. Failing to do this turns a powerful learning tool into a simple assessment exercise.</p>
          <p><strong>3. Ignoring Mental and Physical Health:</strong> The marathon of Step 1 prep can lead to burnout. Sacrificing sleep, nutrition, and exercise for extra study hours is a counterproductive strategy in the long run. A well-rested mind is more efficient at learning and retaining information.</p>
          <p><strong>4. Underestimating the Importance of a Schedule:</strong> "Winging it" is not a viable study plan. A structured, realistic, and flexible schedule is your roadmap to success. It helps ensure comprehensive content coverage, allocates time for revision, and incorporates necessary breaks to prevent exhaustion.</p>
          <p><strong>5. Passive Learning Instead of Active Recall:</strong> Reading and re-reading material or watching videos without actively engaging with the content leads to poor retention. Techniques like the Feynman method, creating flashcards, and self-testing force you to retrieve information, which solidifies it in your memory. Avoid the illusion of competence that comes from passive review.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Crafting the Perfect Personal Statement",
      excerpt: "Your personal statement is your story. Discover how to write a compelling narrative that stands out to residency programs.",
      image: "/blog2.avif",
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>The personal statement is one of the few qualitative parts of your application where you can truly shine. It's not just a rehash of your CV; it's your chance to explain the 'why' behind your journey.</p>
          <p>Focus on a specific moment that crystallized your commitment to your chosen specialty. Be authentic. Admissions committees read thousands of these; they can spot a generic essay from a mile away.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "A Guide to U.S. Clinical Electives for IMGs",
      excerpt: "Unlock the secrets to securing valuable U.S. clinical experience that will significantly boost your residency application.",
      image: "/blog3.avif",
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>U.S. Clinical Experience (USCE) is paramount. It demonstrates your familiarity with the U.S. healthcare system and allows you to garner strong Letters of Recommendation from U.S. physicians.</p>
          <p>Start planning early. Look for observerships or externships at teaching hospitals. Networking plays a huge role here—don't be afraid to reach out to programs or mentors.</p>
        </div>
      )
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Insights for Your Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Actionable guides and tips to help you navigate the path to U.S. residency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="mt-auto w-fit px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPost(null)}>
            <div 
              className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10"
              >
                <X className="w-6 h-6 text-slate-800 dark:text-white" />
              </button>
              
              <div className="overflow-y-auto custom-scrollbar">
                <div 
                    className="h-64 sm:h-80 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedPost.image})` }}
                />
                <div className="p-8 sm:p-10">
                  <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                    {selectedPost.title}
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {selectedPost.content}
                  </div>
                  <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
                     <button 
                        onClick={() => setSelectedPost(null)}
                        className="text-primary font-semibold hover:underline"
                     >
                        &larr; Back to Blog
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;
