import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import BA from "../assets/projects_BA.png";
import NCT from "../assets/projects_nct.png";
import TOKYO from "../assets/projects_tokyo.png";
import FISH from "../assets/projects_fish.png";
import TIKTOK from "../assets/projects_tiktok.png";
import NOTES from "../assets/projects_notes.png";
import BASKET from "../assets/projects_basket.png";

const Projects = () => {
  const slidesInfo = [
    {
      image: BA,
      alt: "baby assassins showcase react app",
      title: "Baby Assassins Showcase",
      status: "completed",
      desc: "[2025] Extremely creative React web app showcasing the Japanese movie trilogy - Baby Assassins. Web app includes a call to the OMDB api, various slideshows, selectable viewing options, gallery filters, in-page movie trailers, etc.",
      websiteLink: "https://ba-movie-showcase.netlify.app/",
      githubLink: "https://github.com/strwbrry05/babyAssassinsShowcase",
    },
    {
      image: NCT,
      alt: "kpop group nct dream showcase react app",
      title: "NCT Dream Showcase",
      status: "completed",
      desc: "[2025] React web app showcasing kpop group NCT Dream. Inlcudes many features such as 'day-and-night' mode, slideshows, carousels, drag-and-drop components.",
      websiteLink: "https://nctdream-showcase.netlify.app/",
      githubLink: "https://github.com/strwbrry05/nctDreamShowcase",
    },
    {
      image: TOKYO,
      alt: "tokyo travel itinerary react app",
      title: "Travel To Tokyo",
      status: "completed",
      desc: "[2025] React web app portraying an initerary page in a fun/creative format. Inspired by old japanese magazines, the layout emulates a similar style, combining collaging/crafting methods with web development and design.",
      websiteLink: "https://traveltotokyo.netlify.app/",
      githubLink: "https://github.com/strwbrry05/travelToTokyo",
    },
    {
      image: FISH,
      alt: "fake fish wholesale company",
      title: "We Sell Fish",
      status: "completed",
      desc: "[2025] Web app mock-up wmulating a wholesale company website. A simple yet effective design, this site demonstrates understanding of web development principles, design aesthetics, and React coding essentials.",
      websiteLink: "https://wesellfish.netlify.app/",
      githubLink: "https://github.com/strwbrry05/weSellFish",
    },
    {
      image: TIKTOK,
      alt: "compilation of categorized tiktok videos",
      title: "TTWDFTH",
      status: "completed",
      desc: "[2025] A web focused page (HTML/CSS/JS) dedicated to archiving the creator's favorite tiktoks in leiu of the tiktok shutdown of 2025. Each category contains its own set of videos along with functional controls for moving between and pausing said videos. Page is responsive.",
      websiteLink: "https://ttwdfth.netlify.app/",
      githubLink: "https://github.com/strwbrry05/ttwdfth",
    },
    {
      image: NOTES,
      alt: "HTML/CSS website for frontend development",
      title: "gatit0 notes",
      status: "completed",
      desc: "[2024] Created initially as a fun side project in order to inspire and aid others in beginning their Frontend Web Developer journey. Designed to look like a desktop login screen; this was meant as a unconventional, yet creative, approach to 'boring' do-it-yourself tutorial websites.",
      websiteLink: "https://gatit0notes.netlify.app/",
      githubLink: "https://github.com/strwbrry05/gatit0Notes",
    },
    {
      image: BASKET,
      alt: "personalized wishlist HTML/CSS",
      title: "Berry Basket",
      status: "completed",
      desc: "[2024] Website created with HTML/CSS in order to demonstrate individual's understanding of web design principles. Meant to showcase a wishlist in web page format. A fun way to introduce a person's wants rather than using a typical list format.",
      websiteLink: "https://strwbrry05-berrybasket.netlify.app/",
      githubLink: "https://github.com/strwbrry05/berryBasket",
    },
  ];

  return (
    <div className="bg-(--color-blue) text-(--color-white) pb-[5em]">
      <div className="flex justify-center">
        <h2
          className="font-(family-name:--font-titles) text-[2.5rem] ml-[1em] mt-[1em] mb-[0.5em]
        md:ml-[6em] lg:ml-[8em] md:text-[3rem] lg:text-[3.5rem]"
        >
          projects ive made
        </h2>
      </div>
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-[380px] h-[550px] md:w-[600px]"
        >
          {slidesInfo.map((slide) => (
            <SwiperSlide className="flex justify-center items-center text-center pl-[3em] pr-[3em] md:pl-[6em] md:pr-[3em]">
              <div className="flex justify-center items-center">
                {/* image */}
                <div className="w-[50%] ">
                  <img
                    className="w-[100%] h-[500px]"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
                {/* info side */}
                <div className="w-[60%] text-left font-(family-name:--font-funtext) p-[1em]">
                  <div className="mb-[1em]">
                    <h3 className="font-bold text-[1.05rem] md:text-[1.25rem]">
                      {slide.title}
                    </h3>
                    <p>status: {slide.status}</p>
                  </div>
                  <p className="text-[0.9rem] md:text-[1rem]">{slide.desc}</p>
                  <div className="md:text-[1.05rem]">
                    <div className="flex justify-start items-center mt-[1.5em]">
                      <FaExternalLinkAlt />
                      <a
                        href={slide.websiteLink}
                        target="_blank"
                        className="ml-[0.5em] underline cursor-pointer hover:text-(--color-gray)"
                      >
                        website link
                      </a>
                    </div>
                    <div className="flex justify-start items-center">
                      <FaGithub />
                      <a
                        href={slide.githubLink}
                        target="_blank"
                        className="ml-[0.5em] underline cursor-pointer hover:text-(--color-gray)"
                      >
                        github link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper lg:w-[960px] h-[600px]"
        >
          {slidesInfo.map((slide) => (
            <SwiperSlide className="flex justify-center items-center text-center pl-[4em] pr-[3em]">
              <div className="flex justify-center items-center">
                {/* image */}
                <div className="w-[50%] pt-[2em]">
                  <img
                    className="w-[100%] h-[500px]"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
                {/* info side */}
                <div className="w-[60%] text-left font-(family-name:--font-funtext) pl-[1em]">
                  <div className="mb-[1em]">
                    <h3 className="font-bold text-[1.5rem] leading-5">
                      {slide.title}
                    </h3>
                    <p>status: {slide.status}</p>
                  </div>
                  <p className="text-[1rem]">{slide.desc}</p>
                  <div className="text-[1.15rem]">
                    <div className="flex justify-start items-center mt-[1.5em]">
                      <FaExternalLinkAlt />
                      <a
                        href={slide.websiteLink}
                        target="_blank"
                        className="ml-[0.5em] underline cursor-pointer hover:text-(--color-gray)"
                      >
                        website link
                      </a>
                    </div>
                    <div className="flex justify-start items-center">
                      <FaGithub />
                      <a
                        href={slide.githubLink}
                        target="_blank"
                        className="ml-[0.5em] underline cursor-pointer hover:text-(--color-gray)"
                      >
                        github link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
