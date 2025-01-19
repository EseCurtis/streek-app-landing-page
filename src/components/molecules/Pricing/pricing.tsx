import { external_urls } from "@/utils/constants";
import Link from "next/link";
import { Fragment } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import InfoContainer from "../Intro/sub-layouts/InfoContainer";

const pricing = [
  {
    type: "Basic",
    renewal: "unlimited",
    description: "Basic features of our app",
    price: "$0.00",
    bg: "bg-blue-500/5",
    perks: [
      { perk: "Create up to 10 streaks", available: true },
      { perk: "Access to community streaks", available: true },
      {
        perk: "Access to create sharable streaks, and community listed streaks",
        available: true
      },
      {
        perk: "Access to in-app notifications and reminders at low priority",
        available: true
      },
      {
        perk: "Gain access to conversational AI companions tailored to motivate and guide",
        available: false
      },
      {
        perk: "Join the competitive leaderboard to see how you rank within the community.",
        available: false
      },
      {
        perk: "Enjoy full customization of reminders for individual streaks",
        available: false
      },
      {
        perk: "Copy and adopt streaks shared by the community to boost your journey",
        available: false
      }
    ]
  },
  {
    type: "Ultra",
    renewal: "monthly",
    description: "Advanced features and perks",
    price: "$1.99",
    bg: "bg-yellow-500/5",
    perks: [
      {
        perk: "Create as many streaks as you want without limitations.",
        available: true
      },
      { perk: "Access to community streaks", available: true },
      {
        perk: "Access to create sharable streaks, and community listed streaks",
        available: true
      },
      {
        perk: "Gain access to conversational AI companions tailored to motivate and guide",
        available: true
      },
      {
        perk: "Join the competitive leaderboard to see how you rank within the community.",
        available: true
      },
      {
        perk: "Enjoy full customization of reminders for individual streaks",
        available: true
      },
      {
        perk: "Copy and adopt streaks shared by the community to boost your journey",
        available: true
      }
    ]
  }
];

const PricingCard = ({ item }: { item: (typeof pricing)[0] }) => {
  return (
    <div className="col-span-1 bg-slate-300/5 rounded-xl  flex flex-col overflow-clip">
      <div className={` w-full p-7 border-b border-slate-300/20 ${item.bg}`}>
        <p className="font-[600] text-lg capitalize">{item.type} plan</p>

        <div className="flex items-center gap-1">
          <h5 className="font-[900] text-5xl mt-5">{item.price}</h5>
          <sup className="opacity-70">{item.renewal}</sup>
        </div>

        <p className="mt-6 opacity-70 text-sm">{item.description}</p>

        <div className=" pt-10 flex w-full">
          <Link
            href={external_urls.autodetect_store()}
            className="bg-white w-full py-3 px-4 text-black text-center text-sm rounded-lg font-[500]"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-10 px-7">
        <div className="pb-3">
          <p>Features</p>
          <small className="opacity-70 text-xs">
            Everything in our {item.type} plan entails
          </small>
        </div>
        {item.perks.map(({ perk, available }, index) => (
          <Fragment key={index}>
            <div className="flex items-start gap-3">
              {available ? (
                <div className="bg-green-500/10 w-auto text-green-400 p-1 text-[0.4rem] rounded-full">
                  <FaCheck />
                </div>
              ) : (
                <div className="bg-red-500/10 w-auto text-red-400 p-1 text-[0.4rem] rounded-full">
                  <FaTimes />
                </div>
              )}
              <p className="text-sm opacity-70">{perk}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export function Pricing() {
  return (
    <InfoContainer title="Pricing" id={"pricing"}>
      <div className="space-y-4">
        <p className="text-slate-200/70 text-sm">
          We&apos;ve got the plan that is perfect for you.
        </p>

        <div className="grid  gap-3 pt-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {pricing.map((item, key) => (
            <Fragment key={key}>
              <PricingCard item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </InfoContainer>
  );
}
