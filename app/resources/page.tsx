import Link from "next/link";
import { RevealScan } from "../components/RevealScan";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen py-24 px-6 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <RevealScan>
                    <h1 className="text-8xl font-bold mb-4 italic">
                        <span className="text-moving-vibrant text-vibrant-glow">RESOURCES.</span>
                    </h1>
                </RevealScan>

                {/* Subjects Section */}
                <div className="mt-24">
                    <RevealScan>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 meta-mono">Subjects</h2>
                    </RevealScan>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Integrated Math 1-3</h3>
                            <p className="text-gray-400 text-xs meta-mono uppercase">Based on Anderson's/Santanna's class progress</p>
                        </div>

                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Pre AP Biology</h3>
                            <p className="text-gray-400 text-xs meta-mono uppercase">Advanced Placement Prep</p>
                        </div>

                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Pre AP English 1-2</h3>
                            <p className="text-gray-400 text-xs meta-mono uppercase">Based on Safai's class progress</p>
                        </div>

                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Chemistry</h3>
                            <p className="text-gray-400 text-xs meta-mono uppercase">Based on Ponce's class progress</p>
                        </div>
                    </div>
                </div>

                {/* Hours Section */}
                <div className="mt-24 grid md:grid-cols-2 gap-12">
                    <div className="glass-vibrant rounded-2xl p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 meta-mono">Hours</h2>
                            <p className="text-3xl font-bold mb-8">Tutoring is available after school and during A lunch!</p>
                        </div>
                        <Link
                            href="https://calendar.app.google/vyoLiYipnYVCcVua7"
                            target="_blank"
                            className="text-xl text-accent-red font-bold hover:underline underline-offset-8 flex items-center gap-2"
                        >
                            See Calendar.
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                    </div>

                    <div className="glass-vibrant rounded-2xl p-10">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 meta-mono">Contact</h2>
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-xl font-bold">951-842-9745 (CE)</p>
                                <p className="text-sm text-gray-400 meta-mono">cerwin42451@beaumontusd.k12.ca.us</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">909-353-8775 (JM)</p>
                                <p className="text-sm text-gray-400 meta-mono">jmccarthy35750@beaumontusd.k12.ca.us</p>
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <Link
                                    href="https://instagram.com/oramaatbhs"
                                    target="_blank"
                                    className="flex items-center gap-3 group/insta"
                                >
                                    <div className="p-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-lg opacity-80 group-hover/insta:opacity-100 transition-opacity">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold group-hover:text-accent-red transition-colors">@oramaatbhs</p>
                                        <p className="text-[10px] text-gray-500 meta-mono uppercase tracking-widest">Official Instagram</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cassini Section */}
                <div className="mt-24">
                    <div className="glass-vibrant rounded-[2.5rem] p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <RevealScan>
                            <h2 className="text-7xl font-bold mb-8 tracking-tighter italic">
                                <span className="text-moving-vibrant text-vibrant-glow">CASSINI.</span>
                            </h2>
                        </RevealScan>

                        <div className="max-w-3xl">
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                                Introducing Cassini, our Orama based whiteboard application. Used by the tutors and the students alike, it is a powerful whiteboard to describe and show your diagrams and work in the fullest detail.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="https://orama-cassini.vercel.app/"
                                    target="_blank"
                                    className="px-10 py-5 bg-accent-red text-white rounded-2xl font-bold hover:bg-red-600 transition-all text-center lg:hover:scale-105"
                                >
                                    OPEN CASSINI
                                </Link>

                                <Link
                                    href="https://github.com/Orama-Tech-Tutoring/Cassini/blob/main/LICENSE.md"
                                    target="_blank"
                                    className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all text-center lg:hover:scale-105 meta-mono text-xs uppercase tracking-widest flex items-center justify-center"
                                >
                                    View CSLA
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
