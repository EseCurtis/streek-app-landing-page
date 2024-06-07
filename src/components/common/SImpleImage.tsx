import Image from "next/image";

interface ISimpleImage {
  src: string;
  width?: number;
  height?: number;
  size?: number;
  alt?: string;
  className?: string;
}

const SimpleImage: React.FC<ISimpleImage> = ({
  src,
  width,
  height,
  size,
  alt,
  className
}) => {
  return (
    <Image
      src={src}
      width={width || size || 100}
      height={height || size || 100}
      alt={alt || src || ""}
      className={className}
    />
  );
};

export default SimpleImage;
