"use client";
import React from "react";
import Header from "../Components/Header/Header";
import ReadMore from "../Components/ReadMoreCard/ReadMore";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import Cards from "../Components/GeneralServices/GsCards/Cards";
import Shcard from "@/public/Shcard.jpg";
import Shcard2 from "@/public/Shcard2.jpg";

const Pages = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 ">
      <div className="max-w-7xl mx-auto">
        <div>
          <SectionHeading
            headingMini="Personal Empowerment"
            description="There is no greater agony than bearing an untold story inside you-Maya Angelou"
          />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <ReadMore
            title="The Challenge of Forgiveness"
            paragraph="Three Types of Forgiveness:Self-Forgiveness: Forgiving ourselves for actions towards others and ourselves.Forgiveness of Others: Forgiving others for their actions towards us.Acceptance of Forgiveness: Recognizing forgiveness through Christ's sacrifice on the Cross.Forgiveness is a gradual process, not an instant event. It's a conscious decision activating thoughts, emotions, and will. Embracing forgiveness liberates from bondage, enables progress, and enhances relationships by freeing from the past."
          />
          <ReadMore
            title="The Challenge of Forgiveness 2"
            paragraph="Unforgiveness breeds destruction: it leads to seeking revenge, ruins relationships, fosters bitterness, and triggers negative emotions. It can harm both body and mind, fostering a victim mentality and selfishness. Refusal to forgive, as described by Dr. Henry Cloud & Dr. John Townsend, keeps victims stuck in dysfunctional behavior, clinging to the desire for something from the offender, possibly even revenge."
          />
          <ReadMore
            title="The Challenge of Forgiveness 3 "
            paragraph="In It's Not My Fault by Dr. Henry Cloud and Dr. John Townsend, they emphasize the importance of taking responsibility for one's life. They distinguish between those who do and those who don't. According to them, taking responsibility is crucial for improvement, especially in the context of forgiveness. They liken living with unforgiveness to being imprisoned with the key in hand, urging readers to recognize life as their own gift from God. While you can't always choose life's circumstances, you can choose how to respond to them, and your choices will determine the outcomes you experience."
          />
          <ReadMore
            title="The Challenge of Forgiveness 4"
            paragraph="Cloud & Townsend (2007:14-15) assert that life isn't always fair or just, and the world doesn't adhere to ideal standards. They advise accepting life as it is and embracing people for who they are, empowering readers to thrive despite less than perfect circumstances. Additionally, they argue that strength doesn't require being judgmental or unkind, and they highlight the importance of forgiveness and avoiding bitterness for spiritual growth."
          />
          <ReadMore
            title="The Challenge of Forgiveness 5"
            paragraph="The authors of the Celebrate Recovery Daily Devotional emphasize that forgiveness doesn't resolve questions of blame or fairness, but it does facilitate healing and the opportunity for new beginnings in relationships. They suggest that forgiveness breaks the cycle of compulsive behaviors rooted in buried pain, emphasizing that both accepting and giving forgiveness are essential for lasting solutions. Choosing forgiveness empowers individuals to move from victimhood to victory. Ultimately, forgiveness is portrayed as God's remedy for brokenness, offering a path to healing regardless of the magnitude of the offense."
          />
          <ReadMore
            title="The Challenge of Forgiveness 6"
            paragraph="In an article by Everett Worthington JNR (1995:1-3), he suggests that forgiving oneself is often more challenging than forgiving others due to a sense of having committed serious wrongdoing. Worthington believes that before self-forgiveness can occur, amends must be made with God, the victim, and others affected. He emphasizes the importance of self-acceptance in the forgiveness process, urging individuals to acknowledge their flaws and embrace themselves without shame, as this is crucial for self-forgiveness."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <Cards
            title="Embracing Self-Forgiveness: Steps to Healing and Acceptance"
            image={Shcard.src}
            paragraph="Reconcile with God and others, embrace self-acceptance, acknowledge and address flaws, and learn from mistakes without shame."
          />
          <Cards
            title="Break Free: Embracing Self-Forgiveness"
            image={Shcard2.src}
            paragraph="Stop feeling ashamed, guilty, and punishing yourself. Break free from the grip of guilt and condemnation. Release yourself from the chains of the past. Stop beating yourself up. Please, it's time to move on."
          />
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <p className=" text-lg">
            Accept God's Forgiveness: God's forgiveness is redemptive,
            representing His saving grace and giving meaning to the Bible. It
            restores us and welcomes us into God's family. We've been harsh on
            ourselves, undeserving of the self-punishment we've endured. The new
            you deserves freedom from continual punishment. Our lives have
            transformed, and our attitudes have improved. We're no longer
            besieged by the world; we are free. Complete forgiveness means
            clearing the offender's record and letting go of past pain. It
            brings freedom, joy, and God's peace.
          </p>
        </div>
        <div className="border-b-2 mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <SectionHeading
            headingMini="In Conclusion"
            description="Embrace Transformation:Be honest with yourself.Know your debt is paid.Let the Holy Spirit heal.See the new you in Christ.Accept this gift joyfully."
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
