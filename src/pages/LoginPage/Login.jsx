import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';
import GoogleLogin from '../../components/socialLogin/GoogleLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || "/";
    console.log(location.state);
    
    const handleLogin = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      logInUser(email, password)
      .then(result =>{
          Swal.fire({
              title: "Login success",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate(from, {replace: true})
            // navigate(location?.state ? location.state : '/');
          console.log(result.user);
         
      })
      .catch(error =>{
          console.log(error);
      })

  }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else{
            setDisabled(true)
        }
       
    }

   


  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div>
                <h2 className="text-3xl font-bold text-center">Login</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
            </div>

            <LoadCanvasTemplate />
            <div className="form-control">
              <label className="label">
                <span className="label-text">captcha</span>
              </label>
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                name='captcha'
                placeholder="type the captcha here"
                className="input input-bordered"
                
              />
              
               
            </div>
            <div className="form-control mt-6">
              <button name='submit' type='submit' disabled={false} className="btn btn-primary">Login</button>
            </div>
          </form>
           <div>
            <GoogleLogin></GoogleLogin>
           </div>
          <p className="text-center mb-4">New to here?<Link className='ml-2 text-orange-500 font-bold' to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
