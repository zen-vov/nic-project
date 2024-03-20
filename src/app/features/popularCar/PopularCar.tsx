import Card from "@/app/entities/card/Card";

export default function PopularCar() {
  return (
    <div className="my-[36px]">
      <div className="flex items-center justify-between mb-[30px]">
        <p className="text-base text-gray font-[600]">Popular Car</p>
        <p className="text-base text-primary font-[600]">View All</p>
      </div>
      <div className="flex items-center gap-[32px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
