import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import blogPostsData from '../data/blogPosts.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [posts] = useState<BlogPost[]>(blogPostsData);

  useEffect(() => {
    if (!selectedPost) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPost]);

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
                    {selectedPost.content.map((paragraph, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
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
