import React from "react";
import { RiTimerLine, RiShoppingBagLine, RiStore2Line, RiBox2Line } from "react-icons/ri";


const defaultFeatures = [
    {
        id: 1,
        icon: RiTimerLine, 
        title: "Fast Turn Around",
        desc: "Same-day order delivery for small orders.",
    },
    {
        id: 2,
        icon: RiShoppingBagLine,
        title: "Easy Ordering and reordering",
        desc: "Design, order, pickup or get delivery. Reorder in a click - ideal for businesses!",
    },
    {
        id: 3,
        icon: RiStore2Line,
        title: "27 Stores Nationwide",
        desc: "Quality Printing, always within reach!",
    },
    {
        id: 4,
        icon: RiBox2Line,
        title: "Wide Product Range",
        desc: "From tees to trophies - We print it all.",
    },
];



const FeatureCards = ({ features = defaultFeatures }) => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f) => {
                    const Icon = f.icon;
                    return (
                        <div
                            key={f.id}
                            className="bg-white/80 backdrop-blur rounded-2xl p-6 flex flex-col items-start gap-4 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 text-purple-700">
                                <Icon size={28} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                            <p className="text-sm text-gray-600">{f.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeatureCards;
