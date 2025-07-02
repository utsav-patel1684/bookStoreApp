import React from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" border-[2px] border-pink-300 shadow-md p-5 rounded-md">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className=" mt-2 w-80 px-3 py-1 border rounded-md outline-pink-300"
                  {...register("name", { required: true })}
                />
                <br />
                 {errors.name && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
              </div>
              {/* email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" mt-2 w-80 px-3 py-1 border rounded-md outline-pink-300"
                  {...register("email", { required: true })}
                />
                <br />
                 {errors.email && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className=" mt-2 w-80 px-3 py-1 border rounded-md outline-pink-300"
                  {...register("password", { required: true })}
                />
                <br />
                 {errors.password && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
              </div>
              <div className="flex justify-around mt-4 ">
                {/* button */}
                <button className="bg-pink-500 rounded-md px-3 py-1 text-white hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have an account?
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
