import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // upload image to imagebb
    const imageFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if(res.data.success){
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url
      }
      // 
      const menuRes = await axiosSecure.post('/menu', menuItem)
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log("from imagebb url", res.data);

  };

  return (
    <div>
      <SectionTitle
        subHeading="what's new"
        heading="Add an item"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name", {required: true})}
              required
              placeholder="Recipe name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-3">
            {/* category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category Name*</span>
              </label>
              <select defaultValue="default"
                {...register("category", {required: true})}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price*/}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", {required: true})}
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
             {...register("recipe", {required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
            <div className="mt-2">
            <input type="file"
            {...register("image", {required: true})}
            className="file-input w-full max-w-xs" />
            </div>
          <button className="btn mt-2 btn-primary">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
