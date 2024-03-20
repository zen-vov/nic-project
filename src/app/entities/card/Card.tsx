import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col w-[300px] h-[380px]">
      <div className="flex flex-col gap-[4px]">
        <p className="text-lg2 text-secondary">Koenigsegg</p>
        <p className="text-sm font-[700] text-gray">Sport</p>
      </div>
      <div className="pt-[64px] pb-[27px]">
        <Image src="/card/car.png" width={232} height={72} alt="car" />
      </div>
      <div className="flex items-center text-center text-sm text-gray gap-[16px]">
        <p>90L</p>
        <p>Manual</p>
        <p>2 people</p>
      </div>
      <div className="flex items-center gap-[24px] mt-[24px]">
        <div className="flex items-center">
          <p className="text-lg2 text-secondary">$99.00/</p>
          <p className="text-sm text-gray">day</p>
        </div>
        <button className="border rounded-[4px] border-primary bg-primary text-base text-white font-[600] py-[10px] px-[20px]">
          Rent Now
        </button>
      </div>
    </div>
  );
}
