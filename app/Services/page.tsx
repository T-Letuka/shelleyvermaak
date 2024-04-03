import React from "react";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import playtherapy from "@/public/playtherapy.jpg";
import Header from "../Components/Header/Header";
import Addiction from "@/public/addiction.jpg";
import trauma from "@/public/trauma.jpg";
import loove from "@/public/loove.jpg";
import hands from "@/public/hands.png";

import Image from "next/image";

const page = () => {
  return (
    <div className="pt-[3rem] pb-[1.5rem]">
      <div>
        <Header
          heading="Counselling Services"
          paragraph=" 
     Our services encompass Relationship and Marriage Counseling, Play
            Therapy for Children, Teen Therapy, Adult Therapy, as well as
            Counseling on a wide array of emotional issues.We provide assistance
            with Forgiveness, Resentments & Bitterness, Depression & Mental
            Health Issues, Rejection & Abandonment, Emotional Management, Grief,
            Loss and Sadness, Despair & Hopelessness, Family Issues, Identity,
            Guilt & Shame, Low Self-Esteem, Fear and Anxiety, Change, Coping
            Skills, Conflict and Communication, Body Image, Assertiveness,
            Self-Awareness, and Self-Motivation. So, grab a seat on our therapy
            couch, and let's dive into the roller coaster ride that is life!"
        />
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center pt-[5rem]">
        <div className="order-2 lg:order-1">
          <Image src={playtherapy} alt="hands" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading headingMini="Service" description="Play Therapy" />
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            Gestalt Play Therapy focuses on bringing the child into a state of
            self-awareness. The process of self-awareness is made possible by
            the dynamic reciprocal relationship between the child and the
            therapist. Gestalt Therapy takes into account the existential
            realities of the child, it recognises that the child does not exist
            in isolation and that through dialogue and play the child is able to
            prepare him or herself for what is happening in his / her world.
            <br />
            <br />
            During play a child learns to control his/her emotions, he or she
            learns to make decisions and to see things differently. The child
            learns to express what is currently on his/her mind. In order to
            bring about change in a child they must accept themselves for who
            they are at that particular moment. The therapist accepts the child
            unconditionally without question.
          </p>
        </div>
        <div className="order-4 lg:order-3">
          <Image src={Addiction} alt="addiction" />
        </div>
        <div className="order-3 lg:order-4">
          <SectionHeading
            headingMini="Service"
            description="Addiction Therapy"
          />
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            All Matters Related to Addiction General Addiction Counselling Help,
            Assistance, Advice & Referrals Interventions if needed Assistance
            and Counselling for the Addict who wants to Recover Assistance and
            Advice for the Families or Supporters Involved Counselling for Teens
            that are making the Wrong Choices After Care or Maintenance
            Counselling (After Rehab) Family Assistance with Co-Dependence,
            Enabling and Boundary Setting.
            <br />
            Group Talks on Enabling and Co-Dependency 12 Step Programs
            <br />
            <span className="font-extrabold">
              Addiction is a family disease.
              <br /> The addict may use, but the whole family suffers.
            </span>
          </p>
        </div>
        <div className="order-5 lg:order-6">
          <Image src={trauma} alt="hands" />
        </div>
        <div className="order-6 lg:order-5">
          <SectionHeading
            headingMini="Service"
            description=" Trauma & Mental Health "
          />
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            Trauma must be distinguished from other painful experiences, as not
            all negative experiences qualify as trauma. Trauma, by definition,
            is always distressing and disturbing, leading to mental or emotional
            challenges that often persist over time.
            <br />
            <br /> It is an emotional response to a profoundly difficult or
            unpleasant event, disrupting an individual's stability and sense of
            control. Trauma is deeply disturbing, impacting trust and leaving
            individuals feeling immobilized. Symptoms may include anxiety,
            safety concerns, depression, anger, hyper-vigilance, distrust, and
            potentially Post-Traumatic Stress Disorder.
            <br />
            <br />
            Trauma fundamentally alters one's approach to life. Trauma
            Counseling aims to provide perspective, identify stress responses,
            and help individuals acknowledge and cope with their losses.
            <br />
            <span className="font-extrabold text-black">
              Group Debriefings also offered.
            </span>
          </p>
        </div>
        <div className="order-7 lg:order-8">
          <Image src={loove} alt="hands" />
        </div>
        <div className="order-8 lg:order-7">
          <SectionHeading
            headingMini="Service"
            description="Marriage & Relationship Therapy"
          />
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            <p className="text-[#fb8500] font-extrabold">
              Pre-Marital Counselling also offered.
            </p>
            <br />
            Relationships are a very important part of our lives. When important
            relationships break down it can be very traumatic and also extremely
            painful. Contact me for assistance if you need help for yourself or
            if you intend to repair or heal a broken relationship (friendships,
            marriages, families, etc.)
            <br />
            <br />
            An outside perspective can often assist and bring about change and
            healing as long as all parties are willing.
          </p>
        </div>
        <div className="order-10 lg:order-9">
          <Image src={hands} alt="hands" />
        </div>
        <div className="order-9 lg:order-10">
          <SectionHeading headingMini="Service" description="Group Therapy " />
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            School going children, and even adults, often need help in
            developing healthy coping mechanisms. Working within a group can be
            very helpful, especially for the learner or adult that does not like
            to speak out or is more of an introvert. Within a group setting they
            can be quiet, yet they don't feel alone, while listening to others
            others talk about what they are going through.
            <br />
            <br />
            Some, but not all of the topics I can discuss are Self-Esteem, Self-
            Respect, Anger, Bullying, Emotional Management, Boundaries,
            Codependency, Positive Relationships, Addiction, Trauma, Mental
            Health Issues. <br />
            <br />
            Whatever your need is at the time, I will let you now if I have
            enough knowledge to present a group specified by you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
