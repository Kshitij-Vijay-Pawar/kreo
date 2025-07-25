import React from 'react';
import Slider from "react-slick";
import Mouse from "../../assets/product/mouse3.png"
import Keybord from "../../assets/product/Keybord.png"
import Headphone from "../../assets/product/headphone.png"
import Button from '../Shared/Button';
import Magnet from '../../bites/Magnet'



const Hero = ({ handleOrderPopup }) => {

    const HeroData = [
        {
            id: 1,
            img: Mouse,
            subtitle: "Beats Solo",
            title: "WireLess",
            title2: "Headphone",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores. Enim praesentium optio architecto aut veritatis, unde neque culpa consectetur quaerat, pariatur accusantium, ullam tempora nesciunt fugit nostrum illo tenetur!"
        },
        {
            id: 2,
            img: Headphone,
            subtitle: "Beats Solo",
            title: "Virtual",
            title2: "Headphone",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores. Enim praesentium optio architecto aut veritatis, unde neque culpa consectetur quaerat, pariatur accusantium, ullam tempora nesciunt fugit nostrum illo tenetur!"
        },
        {
            id: 3,
            img: Keybord,
            subtitle: "Beats Solo",
            title: "Brand",
            title2: "Laptops",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores. Enim praesentium optio architecto aut veritatis, unde neque culpa consectetur quaerat, pariatur accusantium, ullam tempora nesciunt fugit nostrum illo tenetur!"
        }
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        // slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className='container'>
            
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
  
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text area */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                            {data.subtitle}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"

                                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                            {data.title}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>
                                            {data.title2}
                                        </h1>
                                        <div
                                            data-aos="fade-up"
                                            data-aos-offset="0"
                                            data-aos-duration="500"
                                            data-aos-delay="300"
                                        >

                                            <Magnet padding={80} disabled={false} magnetStrength={8}>

                                                <Button
                                                    text="Shop By Category"
                                                    bgColor="bg-primary"
                                                    textColor="text-white"
                                                    handler={handleOrderPopup}
                                                />
                                            </Magnet>
                                        </div>
                                    </div>
                                    {/* img area */}
                                    <div className='order-1 sm:order-2'>
                                        <div
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            className='relative z-10'
                                        >
                                            <img
                                                src={data.img}
                                                className='w-[400px] h-[400px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero