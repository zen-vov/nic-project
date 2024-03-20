import Image from "next/image";

export default function Home() {
  return (
    <section className="container ">
      <div className=" flex gap-8 py-8 justify-center items-center">
        <div className="w-[640px] p-6 left rounded-[10px] bg-primary2 flex flex-col">
          <h1 className="text-xl2 text-white w-[272px] mb-[16px] font-semibold">The Best Platform for Car Rental</h1>
          <p className="text-base w-[284px] text-white mb-[20px] font-medium">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className="w-40 rounded-[4px] py-2.5 text-white px-5 text-base font-semibold leading-[24px] bg-primary">Rental Car</button>
          <Image 
            className="relative left-16"
            src={'/car.png'}
            width={406}
            height={116}
            alt="car"
          />
        </div>
        <div className="w-[640px] p-6 right bg-primary rounded-[10px] flex flex-col">
          <h1 className="text-xl2 text-white w-[300px] mb-[16px] font-semibold">Easy way to rent a car at a low price</h1>
          <p className="text-base w-[284px] text-white mb-[20px] font-medium">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className="w-40 rounded-[4px] py-2.5 px-5 text-white text-base font-semibold leading-[24px] bg-primary2">Rental Car</button>
          {/* Мне пиздец лень */}
          <Image 
            className="relative left-16"
            src={'/car.png'}
            width={406}
            height={116}
            alt="car"
          />
        </div>
      </div>
    </section>
  )
}
