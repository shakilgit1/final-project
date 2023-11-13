import { Link } from "react-router-dom";
import Cover from "../shared/Cover/Cover";
import MenuItem from "../shared/popularMenu/MenuItem";

const MenuCategory = ({items, title, img}) => {

  return (
    <div>
        {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
        {items?.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div>
        <div className="flex justify-center mb-12">
        <Link to={`/order/${title}`}><button className="btn btn-outline border-b-4 border-0 btn-secondary">
          Order Now
        </button></Link>
      </div>
      </div>
    </div>
  );
};

export default MenuCategory;
