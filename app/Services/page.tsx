"use client";
import React from "react";
import Header from "../Components/Header/Header";
import Image from "next/image";
import BigCards from "../Components/BigCards/BigCards";
import playtherapy from "@/public/playtherapy.jpg";
import trauma from "@/public/trauma.jpg";
import addiction1 from "@/public/addiction1.jpg";
import love from "@/public/love.jpg";
import hands from "@/public/hands.png";
import SectionHeading from "../Components/SectionHeading/SectionHeading";

const Page = () => {
  return (
    <div className="pt-[2rem] pb-[1.5rem]">
      <div>
        <Header
          heading="Counselling Services"
          paragraph=" 
           My counseling services encompass a wide range of areas, including relationship and marriage counseling, therapy for children, teens, and adults, 
           and assistance with various emotional issues such as forgiveness, depression, grief, family issues, identity, self-esteem, fear, anxiety, coping skills, communication, and self-awareness. Join us on our therapy journey as we navigate the roller coaster ride of life together."
        />
      </div>
      <div className="flex gap-5 flex-col">
        <SectionHeading
          headingMini="Comprehensive Counseling Services"
          description=" Supporting Your Emotional Well-being"
        />
        <BigCards
          image={playtherapy.src}
          title="Play Therapy"
          paragraph="Gestalt Play Therapy focuses on bringing the child into a state of self-awareness. The process of self-awareness is made possible by the dynamic reciprocal relationship between the child and the therapist. Gestalt Therapy takes into account the existential realities of the child, it recognises that the child does not exist in isolation and that through dialogue and play the child is able to prepare him or herself for what is happening in his / her world.During play a child learns to control his/her emotions, he or she learns to make decisions and to see things differently. The child learns to express what is currently on his/her mind. In order to bring about change in a child they must accept themselves for who they are at that particular moment.
         The therapist accepts the child unconditionally without question."
        />
        <BigCards
          image={addiction1.src}
          title="Addiction Therapy "
          paragraph="All Matters Related to Addiction General Addiction Counselling Help, Assistance, Advice & Referrals Interventions if needed Assistance and Counselling for the Addict who wants to Recover Assistance and Advice for the Families or Supporters Involved Counselling for Teens that are making the Wrong Choices After Care or Maintenance Counselling (After Rehab) Family Assistance with Co-Dependence, Enabling and Boundary Setting.Group Talks on Enabling and Co-Dependency 12 Step Programs"
        />
        <BigCards
          image={trauma.src}
          title="Trauma & Mental Health "
          paragraph="Trauma must be distinguished from other painful experiences, as not all negative experiences qualify as trauma. Trauma, by definition, is always distressing and disturbing, leading to mental or emotional challenges that often persist over time.It is an emotional response to a profoundly difficult or unpleasant event, disrupting an individual's stability and sense of control. Trauma is deeply disturbing, impacting trust and leaving individuals feeling immobilized. Symptoms may include anxiety, safety concerns, depression, anger, hyper-vigilance, distrust, and potentially Post-Traumatic Stress Disorder.Trauma fundamentally alters one's approach to life. Trauma Counseling aims to provide perspective, identify stress responses, and help individuals acknowledge and cope with their losses.Group Debriefings also offered."
        />
        <BigCards
          image={love.src}
          title="Marriage & Relationship Therapy "
          paragraph="Relationships are a very important part of our lives. When important relationships break down it can be very traumatic and also extremely painful. Contact me for assistance if you need help for yourself or if you intend to repair or heal a broken relationship 'friendships, marriages, families, etc.' An outside perspective can often assist and bring about change and healing as long as all parties are willing."
        />
        <BigCards
          image={hands.src}
          title=" Group Therapy"
          paragraph="School going children, and even adults, often need help in developing healthy coping mechanisms. Working within a group can be very helpful, especially for the learner or adult that does not like to speak out or is more of an introvert. Within a group setting they can be quiet, yet they don't feel alone, while listening to others others talk about what they are going through.Some, but not all of the topics I can discuss are Self-Esteem, Self- Respect, Anger, Bullying, Emotional Management, Boundaries, Codependency, Positive Relationships, Addiction, Trauma, Mental Health Issues.Whatever your need is at the time, I will let you now if I have enough knowledge to present a group specified by you."
        />
      </div>
    </div>
  );
};

export default Page;
