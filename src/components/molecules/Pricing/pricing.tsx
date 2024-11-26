import { _membership_plans } from "@/utils/constants";
import InfoContainer from "../Intro/sub-layouts/InfoContainer";
import { PricingItem } from "./molecules/pricing-item";

export function Pricing() {
  return (
    <InfoContainer title="Pricing" id={"pricing"}>
      <div className="">
        <p>we have just three plans you can choose from</p>

        <div className="md:grid md:grid-cols-3 gap-5 py-3 pt-10">
          {_membership_plans.map((item, index) => {
            return (
              <div
                key={index}
                className="border pt-2 border-slate-300/20  col-span-1 rounded-3xl"
              >
                <PricingItem theme={item.color} index={index} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </InfoContainer>
  );
}
