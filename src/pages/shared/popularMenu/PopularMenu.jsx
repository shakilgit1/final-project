
import MenuItem from "./MenuItem";
import Popular from "../../Home/popular/popular";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
//   const [menu, setMenu] = useState();
     const [menu] = useMenu();
     const popular = menu?.filter(item => item.category === 'popular');

//   useEffect(() => {
//     fetch("menu.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const filterItem = data.filter((item) => item.category === "popular");
//         setMenu(filterItem);
//       });
//   }, []);

  return (
    <div>
      <Popular></Popular>

      <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
        {popular?.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-12">
        <button className="btn btn-outline border-b-4 border-0 btn-secondary">
          View All
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
