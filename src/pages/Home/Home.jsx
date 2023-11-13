import { Helmet } from "react-helmet-async";
import PopularMenu from "../shared/popularMenu/PopularMenu";
import Category from "./Category/Category";
import Banner from "./banner/Banner";
import Featured from "./featured/Featured";
import Testimonials from "./testimonal/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
