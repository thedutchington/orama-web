import Image from "next/image";

export default function StaffPage() {
    const team = [
        {
            name: "caden erwin",
            role: "Co-Founder, Policies Lead",
            subjects: "IM1, IM2, IM3, Chem, Pre AP Bio Tutor",
            initials: "CE",
            image: "/CADEN_ERWIN.png"
        },
        {
            name: "jayden mccarthy",
            role: "Co-Founder",
            subjects: "IM1, IM2, IM3, Chem, Pre AP Bio, Pre AP English 1 & 2 Tutor",
            initials: "JM",
            image: "/JAYDEN_MCCARTHY.JPG"
        }
    ];

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-8xl font-bold mb-16 tracking-tighter italic">STAFF.</h1>

                <div className="grid gap-16">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                        >
                            {/* Profile Image */}
                            <div className="w-full md:w-1/2 aspect-[4/3] glass-strong rounded-3xl relative overflow-hidden group">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>

                            <div className="w-full md:w-1/2">
                                <h2 className="text-6xl font-bold mb-4 underline underline-offset-8 decoration-4">
                                    {member.name}
                                </h2>
                                <div className="text-2xl font-semibold text-gray-400 mb-6">
                                    {member.role}
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                    {member.subjects}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
