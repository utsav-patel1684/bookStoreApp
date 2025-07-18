
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import  { useEffect, useState } from 'react';
// import Cards from './Cards';
// import axios from 'axios';
// function Freebook() {
//     const [book ,setBook] = useState([]);
//       useEffect(()=> {
//         const getBook = async () => {
//           try {
//             const res = await axios.get("http://localhost:4001/book");
           
//             const data =res.data.filter((data) =>data.category==="free")
//             console.log(data)
//             setBook(data);
//           } catch (err) {
//             console.error(err);
//           }
//       }
//   getBook();
//     },[])
 
//    var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: { 
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <>
//     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
//     <div>
//       <h1 className='font-semibold text-xl pb-2 '> Free offered Courses</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea cupiditate vero qui quas obcaecati commodi ut asperiores tempora similique.</p>
//     </div>
//     <br />
//     <div>
//        <Slider {...settings}>
//         {book.map((item)=>{
//         return<Cards item={item} key={item.id}/>
//         })}
       
//       </Slider>
//     </div>
    
//     </div>
//     </>
    
//   )
// }

// export default Freebook
      import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("All books:", res.data);

        const data = res.data.filter(
          (item) => item.category?.toLowerCase() === "free"
        );

        console.log("Free books:", data);
        setBook(data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ea cupiditate vero qui quas obcaecati commodi ut asperiores tempora
          similique.
        </p>
      </div>
      <br />
      <div>
        {book.length === 0 ? (
          <p className="text-red-500 font-semibold">No free courses found.</p>
        ) : (
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Freebook;
