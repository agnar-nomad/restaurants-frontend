


// TODO: text clip a bug profitak coloured h1

export default function Header() {
  return (
    <header className="sticky left-0 top-0 p-4 w-full bg-background drop-shadow-md z-10">
      <div className="w-full grid gap-4 grid-flow-col items-center justify-between max-h-24">
        <img src="images/pot-of-food.svg" alt="Food logo" className="h-auto max-h-24" />
        <img src="images/profitak-logo.svg" alt="Profitak logo" width="300px" className="w-80 h-auto max-h-24" />
      </div>
    </header>
  );
};
