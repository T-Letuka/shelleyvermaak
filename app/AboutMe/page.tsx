import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";

const pages = () => {
  const images = ["/registration.png", "level1.png", "level2.png"];
  return (
    <div>
      <Header
        heading="Personal Narrative"
        paragraph="From a young age, I've had a strong desire to help others.
         This was evident in my early years when I was deeply affected by the mistreatment depicted 
         in The Ugly Duckling movie. 
        This experience ignited a passion for advocating for the underdog and promoting acceptance and inclusivity.This formative experience instilled in me a
         compassionate heart dedicated to championing the marginalized and promoting inclusivity."
      />
      <div>
        <div>
          <p>
            Bad things do happen to good people unfortunately and some
            situations are just out of our control. We can only work on
            ourselves, we cannot force another to change. What happened may not
            be our fault, but healing is your responsibility. My Motto - Start
            where you are, use what you have and do what you can. Rise Above!
          </p>
          <p>
            Many people feel like they're not good enough for various reasons,
            and this kind of thinking can lead to a bunch of messy behaviors and
            problems that need a reality check. Often, folks are too afraid of
            what others might think to seek the help they need to heal. That's
            where I come in. I'm here to treat everyone I meet with respect and
            without passing judgment.All my continuing development credits are
            also up to date and those certificates can be viewed on request.
            There are certain criteria I have to meet to keep my registration.
          </p>
        </div>
        <div>
          <p>
            I excel in various counseling domains, particularly in
            relationships, marital issues, mental health, addiction, trauma,
            family dynamics, abuse &apos;sexual, physical, emotional&apos;,
            co-dependency, and nurturing individuals to achieve their potential.
            I have a special passion for working with children. During my
            seven-year tenure at a drug rehabilitation center, I spearheaded the
            support for female residents, many of whom faced severe behavioral,
            emotional, and mental health challenges. I firmly believe in
            treating them not as societal outcasts but as individuals deserving
            of recovery. Collaborating with an exceptional team, we witnessed
            remarkable transformations. My personal journey has been fraught
            with hardships, including teenage pregnancy, abandonment, abuse,
            addiction, divorce, blended families, and psychological struggles.
            Through self-study and perseverance, I've discovered that with the
            right guidance and commitment, these obstacles can be overcome. I've
            experienced firsthand the power of self-work and refuse to be held
            captive by past traumas.
          </p>
        </div>
        <div className="mt-[3rem]">
          <Slider images={images} />
        </div>
      </div>
    </div>
  );
};

export default pages;
