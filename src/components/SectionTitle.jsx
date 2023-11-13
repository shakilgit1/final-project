
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;