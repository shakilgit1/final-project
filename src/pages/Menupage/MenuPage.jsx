import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import imgMenu from '../../assets/menu/banner3.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";


const MenuPage = () => {
    const [menu] = useMenu();
     const desserts = menu?.filter(item => item.category === 'dessert');
     const soup = menu?.filter(item => item.category === 'soup');
     const pizza = menu?.filter(item => item.category === 'pizza');
     const salad = menu?.filter(item => item.category === 'salad');
     const offered = menu?.filter(item => item.category === 'offered');


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={imgMenu} title="Our menu"></Cover>

      <SectionTitle subHeading="Dont't miss out" heading="today's offer" />

      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
      title={"dessert"}
      img={dessertImg}
      items={desserts}
      >
      </MenuCategory>
      <MenuCategory title={"soup"} img={soupImg} items={soup}></MenuCategory>
      <MenuCategory title={"pizza"} img={pizzaImg} items={pizza}></MenuCategory>
      <MenuCategory title={"salad"} img={saladImg} items={salad}></MenuCategory>
      
    </div>
  );
};

export default MenuPage;
