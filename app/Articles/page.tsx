"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import Header from "../Components/Header/Header";
import Image from "next/image";
import article from "@/public/article.png";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import SectionHeading from "../Components/SectionHeading/SectionHeading";

SwiperCore.use([]);
SwiperCore.use([Navigation]);

const pages = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(1);
    }
  }, []);
  return (
    <div className="pt-[2rem] pb-[1.5rem] ">
      <Header
        heading="Archived Entries"
        paragraph="Below are a collection of articles I have previously shared at different intervals. While I strive to maintain regular postings, time constraints occasionally limit my ability to do so. Nevertheless, I endeavor to contribute whenever feasible. Please feel free to print and distribute these articles to individuals whom you believe may find them beneficial."
      />
      <SectionHeading
        headingMini="Healing Journey"
        description="Healing is the courageous act of embracing both our brokenness and our capacity to mend."
      />{" "}
      <div className="mt-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">Anger</h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Anger.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Transforming Shame into Strength
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">
                Boundaries
              </h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Boundaries.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Unlocking Boundaries: Lessons from Personal Experience
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">
                Family Roles
              </h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Family-Roles.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Strength in Unity: The Collective Essence of Family
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">
                Fear and Anxiety
              </h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Fear-and-Anxiety.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Overcoming Fear: Embracing God's Reality
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">
                Low Self-Esteem
              </h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Low-Self-Esteem.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Breaking the Chains of Insecurity: Empowering Self-Worth
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">
                Pain &Suffering
              </h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Pain-and-Suffering.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Finding Light in the Dark: A Must-Read for Anyone Navigating
                Life's Unfairness
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">Shame</h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Shame.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Shattering Shame: Rising Beyond Self-Imposed Standards
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">
                Trust and Communication
              </h3>
              <Image src={article} width={300} height={300} alt="icon " />
              <Link href="/articles/Trust-and-Communication.pdf">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Article
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Cracking the Code: Trust and Communication Keys to Relationship
                Success
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <SectionHeading
          headingMini="Closing"
          description="Scars remind us where we've been, but they don't have to dictate where we're going"
        />
      </div>
    </div>
  );
};

export default pages;
