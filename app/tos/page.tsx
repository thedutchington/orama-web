import Link from "next/link";

export default function TOSPage() {
    return (
        <div className="min-h-screen py-24 px-6 flex items-center justify-center bg-transparent">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-9xl font-bold mb-16 tracking-tight italic">TOS</h1>

                <div className="glass-strong rounded-[3rem] p-20 relative overflow-hidden group">
                    {/* Animated background stars effect (CSS only via gradient) */}
                    <div className="absolute inset-0 bg-[#000] opacity-80"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,92,230,0.1),transparent)] group-hover:scale-150 transition-transform duration-1000"></div>

                    <div className="relative z-10">
                        <Link
                            href="https://docs.google.com/document/d/1u6-Ij8HUsSvo7aIFT95KPiEN_C4cUXIoUdrpgI-obLc/edit?usp=sharing"
                            target="_blank"
                            className="inline-block text-4xl md:text-6xl font-bold py-12 px-24 border-4 border-white/80 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                        >
                            CLICK ME
                        </Link>

                        <p className="mt-12 text-gray-500 font-medium tracking-widest uppercase text-xs">
                            Terms of Service & Policies
                        </p>
                    </div>

                    {/* Symmetrical arrows from original image */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-lg opacity-30 pointer-events-none">
                        <svg width="100%" height="60" viewBox="0 0 500 60" className="stroke-white fill-none stroke-2">
                            <path d="M 200 30 C 150 30, 50 30, 10 30 M 10 30 L 30 10 M 10 30 L 30 50" />
                            <path d="M 300 30 C 350 30, 450 30, 490 30 M 490 30 L 470 10 M 490 30 L 470 50" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
