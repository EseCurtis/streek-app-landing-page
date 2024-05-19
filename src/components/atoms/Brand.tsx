import Image from "next/image";

interface IBrand {
  size?: number;
}

const Brand: React.FC<IBrand> = ({ size = "100%" }) => {
  return (
    <div
      style={{
        width: size,
        height: size
      }}
    >
      <Image
        src={"/logo-szn-inverted.png"}
        width={401}
        height={401}
        alt="brand"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Brand;
