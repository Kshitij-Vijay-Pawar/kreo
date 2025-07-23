import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogsData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit repellat labore earum fuga corporis facere accusantium! Dolores reiciendis laborum, non, dolorem laboriosam in quidem perspiciatis eum ut quibusdam sed.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
  },
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit repellat labore earum fuga corporis facere accusantium! Dolores reiciendis laborum, non, dolorem laboriosam in quidem perspiciatis eum ut quibusdam sed.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img2,
  },
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit repellat labore earum fuga corporis facere accusantium! Dolores reiciendis laborum, non, dolorem laboriosam in quidem perspiciatis eum ut quibusdam sed.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img3,
  },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        <Heading title="Recent News" subtitle={"Explore Our Blogs"}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {BlogsData.map((data) => (
            <div key={data.title} className='bg-white dark:bg-gray-900'>
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
              </div>
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.title}</p>
                <p className='font-bold line-clamp-1'>{data.subtitle}</p>
                <p className='line-clamp-2 text-gray-600 text-sm dark:text-gray-400'>{data.published}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs