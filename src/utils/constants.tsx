export const external_urls = {
  appstore: null,
  playstore: null,
  autodetect_store: () => ""
};

const plan_colors = ["#c17b43", "#c0c0c0", "#FFBF00"]

export const _membership_plans = [
  {
    title: "StreekApp Premium",
    description: "Base level Access to interesting premium features, and creation of more streeks",
    benefits: [""],
    color: plan_colors[0],

  },

  {
    title: "StreekApp Platinum",
    description: "Slightly limited Access to more features including timely notifications and reminders",
    benefits: [""],
    color: plan_colors[1]
  },

  {
    title: "StreekApp Ultra",
    description: "Unlimited Access to all features including conversational companion",
    benefits: [""],
    color: plan_colors[2]
  },
];
