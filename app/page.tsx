import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            Tutoring,<br />
            <span className="text-gray-400">simplified.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Orama is the one-stop-shop for free tutoring for Beaumont high school students.
          </p>
        </div>
      </section>

      {/* What Students Say Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <h2 className="text-6xl font-bold leading-tight italic">
              What<br />
              <span className="text-gray-400">Students Say.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 flex-grow max-w-4xl">
              <div className="glass-strong rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                <p className="text-lg mb-4 leading-relaxed">
                  Orama provides wonderful and professional tutoring that actually helps. Their approach makes complex concepts clear and supports real learning and understanding.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center overflow-hidden uppercase font-bold text-black">
                    JA
                  </div>
                  <div>
                    <div className="font-semibold">Jeremiah Anaya</div>
                    <div className="text-sm text-gray-400">Sophomore</div>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                <p className="text-lg mb-4 leading-relaxed">
                  Orama leads very well and asks clarifying questions to ensure full understanding. The visuals/diagrams are extremely helpful.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 rounded-full bg-accent-purple flex items-center justify-center overflow-hidden font-bold text-black text-xl">
                    ?
                  </div>
                  <div>
                    <div className="font-semibold">Anonymous</div>
                    <div className="text-sm text-gray-400">Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">
            What Makes Us<br />
            <span className="text-accent-blue font-serif italic">Special?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border-t-2 border-accent-blue/30 backdrop-blur-xl">
              <div className="text-accent-blue mb-4 font-mono text-xs tracking-widest uppercase">Integration</div>
              <h3 className="text-2xl font-bold mb-4">Your Control.</h3>
              <p className="text-gray-400 leading-relaxed">
                We put the power in your hands. Our systems are built to integrate seamlessly with your existing workflow, giving you total control over how you learn.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-2 border-white/10">
              <div className="text-white/40 mb-4 font-mono text-xs tracking-widest uppercase">Accessibility</div>
              <h3 className="text-2xl font-bold mb-4">Free Tutoring.</h3>
              <p className="text-gray-400 leading-relaxed">
                Available to all Freshman through Junior students at Beaumont High School. Quality education shouldn't have a price tag.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-2 border-accent-purple/30">
              <div className="text-accent-purple mb-4 font-mono text-xs tracking-widest uppercase">Excellence</div>
              <h3 className="text-2xl font-bold mb-4">Passing Students.</h3>
              <p className="text-gray-400 leading-relaxed">
                Taught by passing students who are also active in ASB, ensuring you're learning from leaders who understand the current curriculum.
              </p>
            </div>
          </div>

          <div className="mt-8 glass-strong p-10 rounded-[2.5rem] border-white/5 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Relevant Curriculum.</h3>
              <p className="text-gray-400 leading-relaxed">
                We use actual content from sources like <strong>CPM</strong> and <strong>NGSS</strong> that we have in our own classes. Since the material is the same 95% of the time, we know exactly how to help you master it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
