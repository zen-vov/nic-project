import PopularCar from "@/app/features/popularCar/PopularCar";
import recCar from "@/app/features/recCar/recCar";

export default function Home() {
  return (
    <section className="container">
      <div className="left bg-primary2 flex flex-col">
        <h1 className="text-xl2 w-[272px] mb-[16px]">
          The Best Platform for Car Rental
        </h1>
        <p className="text-base mb-[20px]">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
      </div>
      <div>
        <PopularCar />
      </div>
      <div>
        <PopularCar />
      </div>
      <div>
        <PopularCar />
      </div>
    </section>
  );
}
