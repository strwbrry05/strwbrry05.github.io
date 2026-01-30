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
      alt: "kpop group nct dream showcase react app",
      title: "NCT Dream Showcase",
      status: "completed",
      desc: "[2025] React web app showcasing kpop group NCT Dream. Inlcudes many features such as 'day-and-night' mode, slideshows, carousels, drag-and-drop components.",
      websiteLink: "https://nctdream-showcase.netlify.app/",
      githubLink: "https://github.com/strwbrry05/nctDreamShowcase",
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
      image: NCT,
      alt: "kpop group nct dream showcase react app",
      title: "NCT Dream Showcase",
      status: "completed",
      desc: "[2025] React web app showcasing kpop group NCT Dream. Inlcudes many features such as 'day-and-night' mode, slideshows, carousels, drag-and-drop components.",
      websiteLink: "https://nctdream-showcase.netlify.app/",
      githubLink: "https://github.com/strwbrry05/nctDreamShowcase",
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
      image: NCT,
      alt: "kpop group nct dream showcase react app",
      title: "NCT Dream Showcase",
      status: "completed",
      desc: "[2025] React web app showcasing kpop group NCT Dream. Inlcudes many features such as 'day-and-night' mode, slideshows, carousels, drag-and-drop components.",
      websiteLink: "https://nctdream-showcase.netlify.app/",
      githubLink: "https://github.com/strwbrry05/nctDreamShowcase",
    },
  ];

  return (
    <div className="bg-(--color-blue) text-(--color-white) pb-[5em]">
      <div className="flex justify-center">
        <h2
          className="font-(family-name:--font-titles) text-[2.5rem] ml-[1em] mt-[1em] mb-[0.5em]
        md:ml-[7em] lg:ml-[12em]"
        >
          projects ive made
        </h2>
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-[380px] h-[550px]"
        >
          {slidesInfo.map((slide) => (
            <SwiperSlide className="flex justify-center items-center text-center pl-[3em] pr-[3em]">
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
                    <h3 className="font-bold text-[1.05rem]">{slide.title}</h3>
                    <p>status: {slide.status}</p>
                  </div>
                  <p className="text-[0.9rem]">{slide.desc}</p>
                  <div>
                    <div className="flex justify-start items-center mt-[1.5em]">
                      <FaExternalLinkAlt />
                      <a
                        href={slide.websiteLink}
                        target="_blank"
                        className="ml-[0.5em] underline cursor-pointer"
                      >
                        website link
                      </a>
                    </div>
                    <div className="flex justify-start items-center">
                      <FaGithub />
                      <a
                        href={slide.githubLink}
                        target="_blank"
                        className="ml-[0.5em] underline cursor-pointer"
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

      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper md:w-[700px] lg:w-[950px] h-[500px]"
        >
          <SwiperSlide className="flex justify-center items-center text-center">
            <div className="flex justify-center items-center">
              {/* image */}
              <div className="p-[1em]">
                <img
                  className="w-[150px]"
                  src={BA}
                  alt="Baby assassins react web project"
                />
              </div>
              {/* info side */}
              <div className="w-[210px] text-left font-(family-name:--font-funtext) m-[1em] p-[1em]">
                <div className="mb-[1em]">
                  <h3 className="font-bold text-[1.05rem]">
                    Baby Assassins Showcase
                  </h3>
                  <p>status: completed</p>
                </div>
                <p className="text-[0.9rem]">
                  [2025] Extremely creative React web app showcasing the
                  Japanese movie trilogy - Baby Assassins. Web app includes a
                  call to the OMDB api, various slideshows, selectable viewing
                  options, gallery filters, in-page movie trailers, etc.
                </p>
                <div>
                  <div className="flex justify-start items-center mt-[1.5em]">
                    <FaExternalLinkAlt />
                    <a href="" className="ml-[0.5em] underline cursor-pointer">
                      website link
                    </a>
                  </div>
                  <div className="flex justify-start items-center">
                    <FaGithub />
                    <a href="" className="ml-[0.5em] underline cursor-pointer">
                      github link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-red-300">Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
