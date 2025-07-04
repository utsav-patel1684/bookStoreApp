import React from 'react'
import list from "../list.json"
function Cards( {item}) {
  console.log(item)
  return (
    
      <>
      <div className='mt-4 my-3 '>
        <div className="card bg-base-100 w-50 shadow-xl hover:scale-105 duration-300">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="curser-pointer px-2 py-1 rounded-full border-1 hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
</div>
      </>
    
  )
}

export default Cards