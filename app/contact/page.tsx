import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24 px-6 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-8xl font-bold mb-16 tracking-tighter italic">CLDR & BKNG.</h1>

                <div className="glass-strong rounded-[3rem] p-16 relative overflow-hidden group">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                        <Link
                            href="https://calendar.app.google/vyoLiYipnYVCcVua7"
                            target="_blank"
                            className="inline-block text-4xl md:text-6xl font-bold py-12 px-24 border-4 border-white rounded-3xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                        >
                            CLICK ME
                        </Link>

                        <div className="mt-12 flex justify-center items-center gap-4">
                            <div className="h-px bg-white/20 flex-grow max-w-[100px]"></div>
                            <div className="text-white/40 font-mono tracking-widest text-sm uppercase">Secure Booking</div>
                            <div className="h-px bg-white/20 flex-grow max-w-[100px]"></div>
                        </div>
                    </div>

                    {/* Directional Arrows (Visual Flair from original image) */}
                    <div className="absolute hidden md:block left-8 top-1/2 -translate-y-1/2 text-white/10 pointer-events-none">
                        <svg width="100" height="40" viewBox="0 0 100 40" className="fill-none stroke-current stroke-2">
                            <path d="M 0 20 L 80 20 M 60 0 L 80 20 L 60 40" />
                        </svg>
                    </div>
                    <div className="absolute hidden md:block right-8 top-1/2 -translate-y-1/2 text-white/10 rotate-180 pointer-events-none">
                        <svg width="100" height="40" viewBox="0 0 100 40" className="fill-none stroke-current stroke-2">
                            <path d="M 0 20 L 80 20 M 60 0 L 80 20 L 60 40" />
                        </svg>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-gray-500 font-bold mb-2 uppercase text-xs tracking-widest">Office Hours</h3>
                        <p className="text-xl font-medium">Check Calendar for live availability</p>
                    </div>
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-gray-500 font-bold mb-2 uppercase text-xs tracking-widest">General Inquiries</h3>
                        <p className="text-lg opacity-70">cerwin42451@beaumontusd.k12.ca.us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
