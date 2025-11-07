import { FeatureCard } from "../../components";

const features = [
    {
        title: "EFFICIENCY",
        description: "Streamlined appointment scheduling that fits into your busy lifestyle."
    },
    {
        title: "CONVENIENCE",
        description: "Access to a network of trusted healthcare professionals in your area."
    },
    {
        title: "PERSONALIZATION",
        description: "Tailored recommendations and reminders to help you stay on top of your health."
    },
];

const About = () => {
    return (
        <div className="min-h-screen w-full px-6 md:px-20 py-16 space-y-16">

            <div className="max-w-3xl mx-auto space-y-4">
                <h1 className="text-3xl font-semibold text-gray-800">
                    ABOUT <span className="text-[#567DFD]">US</span>
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    Welcome to Prescripto, your trusted partner in managing your healthcare needs
                    conveniently and efficiently. We understand the challenges individuals face
                    when it comes to scheduling appointments and managing their medical care.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Our platform helps you book appointments seamlessly while connecting you with
                    qualified healthcare professionals, ensuring reliable ongoing care.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                    Our vision is to create a connected healthcare environment that prioritizes
                    patient ease and accessibility. We aim to bridge the gap between healthcare
                    providers and individuals, ensuring timely and efficient care.
                </p>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-800">
                    WHY <span className="text-[#567DFD]">CHOOSE US</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => (
                        <FeatureCard key={index} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default About;