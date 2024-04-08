"use client";
import { useEffect, useRef } from "react";
import level1 from "@/public/level1.png";
import level2 from "@/public/level2.png";
import degree1 from "@/public/degree1.png";
import Link from "next/link";
import registration from "@/public/registration.png";
import Header from "../Components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import MediumCard from "../Components/BigCards/MediumCard";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import { Navigation } from "swiper/modules";
SwiperCore.use([]);
SwiperCore.use([Navigation]);

const Pages = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(1);
    }
  }, []);
  return (
    <div className="pt-[2rem] pb-[1.5rem] ">
      <div>
        <Header
          heading="Personal Narrative"
          paragraph="From a young age, I've had a strong desire to help others. This was evident in my early years when I was deeply affected by the mistreatment depicted in The Ugly Duckling movie. This experience ignited a passion for advocating for the underdog and promoting acceptance and inclusivity. This formative experience instilled in me a compassionate heart dedicated to championing the marginalized and promoting inclusivity."
        />
      </div>

      <div className="mt-8 grid gap-8 md:grid-col-3">
        <div className="flex gap-6 flex-col">
          <MediumCard
            title="My Motto-Start where you are, use what you have and do what you can. Rise Above!"
            paragraph=" Bad things do happen to good people unfortunately and some
            situations are just out of our control. We can only work on
            ourselves, we cannot force another to change. What happened may not
            be our fault, but healing is your responsibility."
          />
          <MediumCard
            title="Empowering Self-Worth: Breaking Through the Stigma of Seeking Help"
            paragraph=" Many people feel like they're not good enough for various reasons,
            and this kind of thinking can lead to a bunch of messy behaviors and
            problems that need a reality check. Often, folks are too afraid of
            what others might think to seek the help they need to heal. That's
            where I come in. I'm here to treat everyone I meet with respect and
            without passing judgment. All my continuing development credits are
            also up to date and those certificates can be viewed on request.
            There are certain criteria I have to meet to keep my registration."
          />
          <MediumCard
            title="Compassionate Counseling: Nurturing Growth and Healing Across Diverse Domains"
            paragraph="I excel in various counseling domains, particularly in
            relationships, marital issues, mental health, addiction, trauma,
            family dynamics, abuse 'sexual, physical, emotional', co-dependency,
            and nurturing individuals to achieve their potential. I have a
            special passion for working with children. During my seven-year
            tenure at a drug rehabilitation center, I spearheaded the support
            for female residents, many of whom faced severe behavioral,
            emotional, and mental health challenges. I firmly believe in
            treating them not as societal outcasts but as individuals deserving
            of recovery."
          />
          <MediumCard
            title="From Hardship to Healing: My Journey of Personal Growth and Resilience"
            paragraph="Whilst working at a rehalibilitation centre along with an exceptional team, we witnessed
            remarkable transformations. My personal journey has been fraught
            with hardships, including teenage pregnancy, abandonment, abuse,
            addiction, divorce, blended families, and psychological struggles.
            Through self-study and perseverance, I've discovered that with the
            right guidance and commitment, these obstacles can be overcome. I've
            experienced firsthand the power of self-work and refuse to be held
            captive by past traumas."
          />
        </div>
        <SectionHeading
          headingMini="Slide to see more"
          description="My Credentials"
        />
      </div>
      <div className="mt-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <Image src={level1} width={357} height={512} alt="icon " />
              <Link href="/articles/shelley-level-1.pdf">
                <button
                  className="bg-[#08080e] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Pdf
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <Image src={level2} width={344} height={505} alt="icon " />
              <Link href="/articles/shelley-level2.pdf">
                <button
                  className="bg-[#08080e] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Pdf
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <Image src={registration} width={466} height={592} alt="icon " />
              <Link href="/articles/registration.pdf">
                <button
                  className="bg-[#08080e] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black mt-1"
                >
                  Open Pdf
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <Image src={degree1} width={1500} height={1500} alt="icon " />
              <Link href="/articles/BA-Degree.pdf">
                <button
                  className="bg-[#08080e] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black mt-1"
                >
                  Open Pdf
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Pages;
