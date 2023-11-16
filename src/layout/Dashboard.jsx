import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaShopify, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    // get isAdmin value from the database
    // const isAdmin = true;

    return (
        <div className="flex">
           <div className="min-h-screen w-64 bg-orange-500">
             <ul className="menu">
                <li><NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home</NavLink>
                </li>
                <li><NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart</NavLink>
                </li>
                <li><NavLink to="/dashboard/reservation">
                     <FaCalendar></FaCalendar>
                     Reservation
                    </NavLink>
                </li>
              
                <li>
                    <NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a review
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings">
                     <FaList></FaList>
                      My Bookings
                    </NavLink>
                </li>
                {/* shared navLink */}
                <div className="divider"></div>
                <li><NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink>
                </li>
                <li><NavLink to="/order/salad">
                    <FaShopify></FaShopify>
                    Menu</NavLink>
                </li>
                {/*  */}
                <li><NavLink to="/contact">
                    <FaEnvelope></FaEnvelope>
                    Contact</NavLink>
                </li>
             </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>    
            </div> 
        </div>
    );
};

export default Dashboard;