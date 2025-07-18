// import  {  useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Cards from "./Cards";

// import axios from "axios";

// function Course() {
//     const [book ,setBook] = useState([]);
//     useEffect(()=> {
//       const getBook = async () => {
//         try {
//           const res = await axios.get("http://localhost:4001/book");
//           console.log(res.data);
//           setBook(res.data);
//         } catch (err) {
//           console.error(err);
//         }
//     }
// getBook();
//   },[])
  
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="mt-28 items-center  justify-center text-center">
//           <h1 className="text-2xl  md:text-4xl">
//             We're delighted to have you{" "}
//             <span className="text-pink-500">Here! :) </span>
//           </h1>
//           <p className="mt-12">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
//             impedit expedita voluptatibus aut doloremque dolores, exercitationem
//             laudantium nihil sit dolorum.
//           </p>
//           <Link to ="/">
//           <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
//             Back
//           </button>
//           </Link>
//         </div>
//         <div className="grid grid-col-1 md:grid-cols-4 lg:grid-cols-3 gap-6 ">
//             {
//                 book.map((item)=>{
//                   return<Cards key={item.id} item={item}/>
//                 })
//             }
//         </div>
//       </div>
//     </>
//   );
// }

// export default Course;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); // 👈 Backend call
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Explore all our available courses below.
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {book.length > 0 ? (
          book.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <p className="text-red-500 font-semibold col-span-full text-center">
            No courses available.
          </p>
        )}
      </div>
    </div>
  );
}

export default Course;
