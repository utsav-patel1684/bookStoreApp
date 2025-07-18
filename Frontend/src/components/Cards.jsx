// import React from 'react'
// import list from "../list.json"
// function Cards( {item}) {
//   console.log(item)
//   return (
    
//       <>
//       <div className='mt-4 my-3 '>
//         <div className="card bg-base-100 w-50 shadow-xl hover:scale-105 duration-300">
//   <figure>
//     <img
//       src={item.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {item.name}
//       <div className="badge badge-secondary">{item.category}</div>
//     </h2>
//     <p>{item.title}</p>
//     <div className="card-actions justify-between">
//       <div className="badge badge-outline">${item.price}</div>
//       <div className="cursor-pointer px-2 py-1 rounded-full border-1 hover:bg-pink-500 hover:text-white">Buy Now</div>
//     </div>
//   </div>
// </div>
// </div>
//       </>
    
//   )
// }

// export default Cards

function Cards({ item }) {
  return (
    <div className="mt-4">
      <div className="card w-64 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
        <figure>
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name || "Course Image"}
            className="h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border border-gray-300 hover:bg-pink-500 hover:text-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards