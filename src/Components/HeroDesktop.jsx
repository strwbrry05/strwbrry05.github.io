import React from "react";
import pan from "../assets/heroPan.png";
import hobonichi from "../assets/heroHobonichi.png";
import book from "../assets/heroBook.png";
import movie from "../assets/heroMovie.png";
import music from "../assets/heroHadestown.png";
import hobby from "../assets/heroHobby.png";
import art from "../assets/heroArt.png";
import notA from "../assets/heroNotActive.png";
import isA from "../assets/heroActive.png";
import HeroCard from "./HeroCard";

const HeroDesktop = (props) => {
  return (
    <>
      {/* left col */}
      <div>
        {/* hobonichi */}
        <div
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <HeroCard
            icon={hobonichi}
            alt={"journal"}
            w={120}
            title={"hobonichi"}
            desc={
              "my journal, diary, and time keeper. an absolute essential for me to complete and organize tasks of all callibers. i love to-do lists and scheduling my day; without my hobonichi i would be lost in the void."
            }
            isTitleReverse={false}
            isReverse={false}
          />
        </div>

        {/* pan */}
        <div
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <HeroCard
            icon={pan}
            alt={"stuffed animal"}
            w={80}
            title={"pan(talaimon)"}
            desc={
              "stuffed animals provide a sense of comfort and nostalgia. they remind me to remain whimsical in a society that attempts to rob you of it. i keep many stuffed animals but this $5 christmas charm CHARMED me more than i thought possible. i lost him once and i wont do it again."
            }
            isTitleReverse={false}
            isReverse={true}
          />
        </div>

        {/* book */}
        <div
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <HeroCard
            icon={book}
            alt={"book: the secret history by donna tart"}
            w={80}
            title={"the secret history"}
            desc={
              "i absolutely ADORE reading. i believe individuals should all read for fun well into adulthood. as for one of my favorites, im not one to dwell on contemporary classics, but something about this novel captivated me from the first chapter. my pitch: dark academia, a friend group admist a murder, and unreliable narration."
            }
            isTitleReverse={false}
            isReverse={false}
          />
        </div>
      </div>
      {/* center col */}
      <div className="flex flex-col justify-center items-center">
        {/* art */}
        <div
          className={`font-(family-name:--font-text) text-(--color-gray) flex flex-col justify-center items-center
                    cursor-pointer hover:text-black mb-[3em]`}
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <div className={`flex flex-col justify-center items-center`}>
            <p className="text-[1.15rem] text-center mb-[0.5em]">
              edward hopper
            </p>
            <img
              className="w-[300px]"
              src={art}
              alt="edward hopper:soir bleu"
            />
          </div>
          <div className="w-[90%] mt-[1em] md:w-[80%] text-[0.95rem]">
            <p>
              i never understood the meaning of ‘art speaks to you’ until i
              found ‘soir bleu’. edward hopper has a fascinating ability to
              create and evoke feelings of isolation and contemplation thorugh
              his works. finding your favorite artist is important, i think. it
              tells you a lot about a person. dont know what this says about me
              however
            </p>
          </div>
        </div>
        {/* self */}
        {props.isHovered ? (
          <img src={isA} alt="" className="w-[full] md:w-[300px] self-center" />
        ) : (
          <img
            src={notA}
            alt=""
            className="w-[full] md:w-[300px] self-center"
          />
        )}
      </div>
      {/* right col */}
      <div>
        {/* movie */}
        <div
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <HeroCard
            icon={movie}
            alt={"film: baby assassins 3"}
            w={80}
            title={"baby assassins 3"}
            desc={
              "what is a person without their favorite film? two teenage assassins do their jobs and get into mischief. the future is not always guaranteed, so you might as well be confident in what you want. but always remember to enjoy the small moments in life as well AND to never take anything too seriously."
            }
            isTitleReverse={false}
            isReverse={true}
          />
        </div>

        {/* music */}
        <div
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <HeroCard
            icon={music}
            alt={"broadway show: hadestown"}
            w={80}
            title={"hadestown"}
            desc={
              "the tale of orpheus and eurydice. hades and persephone. greek mythology has always been fascinating. little 18 year old me was captivated from her first listen. to know a tragic cycle will repeat and STILL hope for a better outcome every time is heartbreaking. hope will forever be everlasting. other favorites include, Cabaret and Next To Normal."
            }
            isTitleReverse={false}
            isReverse={false}
          />
        </div>

        {/* hobby */}
        <div
          onMouseEnter={() => props.setIsHovered(true)}
          onMouseLeave={() => props.setIsHovered(false)}
        >
          <HeroCard
            icon={hobby}
            alt={"hobby: baking"}
            w={120}
            title={"hobby"}
            desc={
              "as a creative individual, i feel as though you can tap into that creativity in any field; and that includes cooking and baking! admittedly this is a new hobby, but one that has brought myself, and others around me, immense fulfillment and joy."
            }
            isTitleReverse={false}
            isReverse={true}
          />
        </div>
      </div>
    </>
  );
};

export default HeroDesktop;
