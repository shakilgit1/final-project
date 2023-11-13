import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCards = ({items}) => {
   const {user} = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const axiosSecure = useAxiosSecure();
   const [, refetch] = useCart();

    const {image, name, price, recipe, _id} = items;

    const handleAddToCart = (food) => {
      if(user && user?.email){
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price,
          recipe
        }
        console.log(food);
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch and update carts
            refetch()
          }
        })
        
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please log in to add to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Log In"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}});
          }
        });
      }
    }

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="text-xl font-bold absolute right-0 bg-black
         text-white px-2 mr-2">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(items)}
            className="btn btn-outline border-b-4 border-0 btn-secondary">
              Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
