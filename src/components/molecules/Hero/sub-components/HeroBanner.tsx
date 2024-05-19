interface IHeroBanner {}

const HeroBanner: React.FC<IHeroBanner> = () => {
  return (
    <div className="col-span-3 flex justify-between w-full relative z-20 py-3 pt-0 pb-12 ">
      {Array.from({ length: 6 }).map((_, key) => (
        <div
          className="text-white col-span-1 h-20 flex items-center justify-center"
          key={key}
        >
          <h3 className="text-3xl font-extrabold uppercase text-slate-700/20">
            {" "}
            {key % 2 == 0 ? (
              "SPONSOR"
            ) : (
              <span
              className="text-transparent"
                style={{
                    WebkitTextStrokeWidth: "3px",
                    WebkitTextStrokeColor: "rgb(51 65 85 / 0.2)",
                }}
              >
                SPONSOR
              </span>
            )}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
