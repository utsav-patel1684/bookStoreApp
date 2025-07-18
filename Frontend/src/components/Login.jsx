  import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Login() {
   

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async  (data) => {
    const userInfo = {
        email: data.email,
        password: data.password,
      };
       await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) =>{
        if(res.data) {
        toast.success("Login successfully");
        document.getElementById('my_modal_3').close();
      
        window.location.reload();
        
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      }).catch((err) => {
        if(err.response) {
          alert(err.response.data.message);
          toast.error(err.response.data.message);
        }
      } )
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-80 px-3 py-1 border rounded-md outline-pink-300"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-80 px-3 py-1 border rounded-md outline-pink-300"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            {/* Submit Button & Link */}
            <div className="flex justify-around mt-4 items-center">
              <button
                type="submit"
                className="bg-pink-500 rounded-md px-3 py-1 text-white hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not Registered?
                <Link to="/signup">
                  <span className="underline text-blue-500 cursor-pointer"> Signup</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
