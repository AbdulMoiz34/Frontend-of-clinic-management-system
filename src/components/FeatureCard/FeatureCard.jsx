const FeatureCard = ({ title, description }) => (
    <div className="px-8 py-12 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-white">
        <h3 className="text-gray-800 font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

export default FeatureCard;