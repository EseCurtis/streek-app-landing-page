import Brand from "@/components/atoms/Brand";

interface INavBrand {}

const NavBrand: React.FC<INavBrand> = () => {
  return (
    <div className="h-full flex items-center py-[0.7rem]">
      <div className="aspect-square w-7 h-7 pr-1">
        <Brand />
      </div>
      <h4 className="font-bold text-lg flex items-start pr-">StreekApp </h4>
      {/* <div className="h-full py-1 flex items-end">
          <span className="w-1 h-1 bg-accent block rounded-full"></span>
        </div> */}
    </div>
  );
};

export default NavBrand;
