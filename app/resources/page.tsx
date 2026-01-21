import Link from "next/link";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-8xl font-bold mb-4 italic">RESOURCES.</h1>

                {/* Subjects Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold mb-8 text-gray-400">Subjects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-strong rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Integrated Math 1-3</h3>
                            <p className="text-gray-400 text-sm">Based on class progress</p>
                        </div>

                        <div className="glass-strong rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Pre AP Biology</h3>
                            <p className="text-gray-400 text-sm">Advanced Placement Preparation</p>
                        </div>

                        <div className="glass-strong rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Pre AP English 1-2</h3>
                            <p className="text-gray-400 text-sm">Foundational Literacy & Analysis</p>
                        </div>

                        <div className="glass-strong rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Chemistry</h3>
                            <p className="text-gray-400 text-sm">Based on class progress</p>
                        </div>
                    </div>
                </div>

                {/* Hours Section */}
                <div className="mt-16 glass-strong rounded-2xl p-8 max-w-md">
                    <h2 className="text-4xl font-bold mb-4 text-gray-400">Hours</h2>
                    <Link
                        href="https://calendar.app.google/vyoLiYipnYVCcVua7"
                        target="_blank"
                        className="text-xl text-accent-blue hover:underline"
                    >
                        See Calendar.
                    </Link>
                </div>

                {/* Cassini Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-400">Contact</h2>
                    <div className="glass-strong rounded-2xl p-8 mb-8">
                        <p className="text-lg mb-2">951-842-9745 (CE)</p>
                        <p className="text-lg mb-4">909-353-8775 (JM)</p>
                        <p className="text-sm text-gray-400">cerwin42451@beaumontusd.k12.ca.us</p>
                        <p className="text-sm text-gray-400">jmccarthy35750@beaumontusd.k12.ca.us</p>
                    </div>

                    <div className="glass-strong rounded-3xl p-12">
                        <h2 className="text-5xl font-bold mb-6 text-accent-purple">Cassini</h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Introducing Cassini, our Orama based whiteboard application. Used by the tutors and the students alike, it is a powerful whiteboard to describe and show your diagrams and work in the fullest detail.
                        </p>
                        <p className="text-gray-400 mb-8">Make sure you read this before using:</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://github.com/Orama-Tech-Tutoring/Cassini/blob/main/LICENSE.md"
                                target="_blank"
                                className="px-8 py-4 bg-black border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all text-center"
                            >
                                CSLA
                            </Link>

                            <Link
                                href="https://orama-cassini.vercel.app/"
                                target="_blank"
                                className="px-8 py-4 bg-accent-purple text-white rounded-full font-semibold hover:bg-purple-700 transition-all text-center"
                            >
                                CASSINI
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
