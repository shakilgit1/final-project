import SectionTitle from "../../../components/SectionTitle";
import './featured.css'
import featured from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-4 my-20 bg-fixed">
            <SectionTitle
            subHeading="featured items" heading="from our featured">
            </SectionTitle>
            <div className="bg-black bg-opacity-50 md:flex justify-center items-center px-36 pb-20 pt-12 gap-4">
                <img className="w-[500px]" src={featured} alt="" />
                <div className="space-y-3 md:ml-8">
                    <p>Nov 11 2023</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor, quisquam facilis illum voluptates corrupti reprehenderit eos aliquid, minus, natus ducimus recusandae ipsum. Laborum, ipsum eveniet. Illum rerum veniam expedita.</p>
                    <button className="btn btn-outline border-b-4 border-0 btn-secondary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;