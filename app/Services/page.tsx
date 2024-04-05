"use client";
import React from "react";
import Header from "../Components/Header/Header";
import Image from "next/image";
import serviceList from "../data";

const Page = () => {
  return (
    <div className="pt-[2rem] pb[1.5rem]">
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

      <div>
        {serviceList.map((card, index) => (
          <div key={index}>
            <Image src={card.image} alt="Card" width={500} height={500} />
            <h2>{card.title}</h2>
            <p>{card.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
