// import InfoContainer from "../Intro/sub-layouts/InfoContainer";

// export function Pricing() {
//   return (
//     <InfoContainer title="Pricing" id={"pricing"}>
//       <div className="">
//         <p>
//           StreekApp operates on a Freemium/Premium model, allowing users to
//           choose between staying as free users or upgrading to a premium plan
//           called ULTRA. The ULTRA plan unlocks the following exclusive benefits:
//         </p>

//         {/* <div className="md:grid md:grid-cols-3 gap-5 py-3 pt-10">
//           {_membership_plans.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="border pt-2 border-slate-300/20  col-span-1 rounded-3xl"
//               >
//                 <PricingItem theme={item.color} index={index} item={item} />
//               </div>
//             );
//           })}
//         </div> */}
//       </div>
//     </InfoContainer>
//   );
// }

import InfoContainer from "../Intro/sub-layouts/InfoContainer";

export function Pricing() {
  return (
    <InfoContainer title="Pricing" id={"pricing"}>
      <div className="space-y-4">
        <p>
          StreekApp operates on a Freemium/Premium model, allowing users to
          choose between staying as free users or upgrading to a premium plan
          called <strong>ULTRA</strong>. The ULTRA plan unlocks the following
          exclusive benefits:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Unlimited Streaks:</strong> Create as many streaks as you
            want without limitations.
          </li>
          <li>
            <strong>AI Companions:</strong> Gain access to conversational AI
            companions tailored to motivate and guide you.
          </li>
          <li>
            <strong>Leaderboard Access:</strong> Join the competitive
            leaderboard to see how you rank within the community.
          </li>
          <li>
            <strong>Advanced Reminder Controls:</strong> Enjoy full
            customization of reminders for individual streaks.
          </li>
          <li>
            <strong>Community Streak Sharing:</strong> Copy and adopt streaks
            shared by the community to boost your journey.
          </li>
        </ul>

        <div className="py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="border border-slate-300/20 p-4 rounded-3xl text-center bg-slate-900/80">
              <h3 className="text-lg font-bold">Free Plan</h3>
              <p className="mt-2 text-sm text-slate-300">
                Access core features like streak monitoring, habit tracking, and
                basic reminders—for free!
              </p>
            </div>
            <div className="border border-yellow-400/50 p-4 rounded-3xl text-center bg-yellow-800/20 shadow-md">
              <h3 className="text-lg font-bold text-yellow-400">ULTRA Plan</h3>
              <p className="mt-2 text-sm text-yellow-100">
                Unlock all premium features and take full control of your habit
                management.
              </p>
              <p className="mt-4 text-xl font-semibold">$1.99/month</p>
            </div>
          </div>
        </div>
      </div>
    </InfoContainer>
  );
}
