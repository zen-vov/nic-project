import Card from "@/app/entities/card/Card";

export default function PopularCar() {
  return (
    <div className="my-[36px]">
      <div className=" mb-[30px]">
        <p className="text-base text-gray font-[600]">Recomendation Car</p>
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
