import { getPostData } from "../../../lib/blog";
import Link from "next/link";
import { RevealScan } from "../../components/RevealScan";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);
    return {
        title: `${postData.title} - Orama`,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className="min-h-screen py-24 px-6 relative">
            <div className="max-w-3xl mx-auto relative z-10">
                <RevealScan>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-accent-red transition-colors meta-mono text-xs uppercase tracking-widest mb-12 group"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>
                </RevealScan>

                <RevealScan>
                    <div className="mb-12">
                        <div className="text-accent-red meta-mono text-sm uppercase tracking-[0.3em] mb-4" suppressHydrationWarning>
                            {new Date(postData.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 italic leading-tight">
                            {postData.title}
                        </h1>
                        <div className="text-white/40 meta-mono text-xs uppercase tracking-widest">
                            Published by <span className="text-white">{postData.author}</span>
                        </div>
                    </div>
                </RevealScan>

                <RevealScan>
                    <article
                        className="max-w-none 
                                   [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:mb-8 [&_h1]:text-white
                                   [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-white
                                   [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-white
                                   [&_h4]:text-xl [&_h4]:font-bold [&_h4]:tracking-tight [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-white
                                   [&_h5]:text-lg [&_h5]:font-bold [&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-white
                                   [&_h6]:text-base [&_h6]:font-bold [&_h6]:mt-4 [&_h6]:mb-2 [&_h6]:text-white
                                   [&_p]:text-gray-400 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-8
                                   [&_strong]:text-white [&_strong]:font-bold
                                   [&_a]:text-accent-red [&_a]:no-underline hover:[&_a]:underline
                                   [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:text-gray-400
                                   [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:text-gray-400
                                   [&_li]:mb-2"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
                </RevealScan>

                <div className="mt-24 pt-12 border-t border-white/5">
                    <Link
                        href="/blog"
                        className="inline-block px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all border-trace overflow-hidden relative"
                    >
                        <div className="border-trace-cover" />
                        <span className="relative z-10">VIEW ALL POSTS</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
