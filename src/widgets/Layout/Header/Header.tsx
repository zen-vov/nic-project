export default function Header() {
  return (
    <header className="container py-10 flex justify-between items-center bg-white">
      <div className="flex">
        <div className="logo text-xl2 text-primary font-bold leading-[48px] mr-16">MORENT</div>
        <div className="py-3 px-5 border-[1px] border-input rounded-[50px]">
          <input type="text" className="bg-transparent text-input font-medium leading-[21px] text-justify" placeholder="Search something here" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="text-center rounded-[90px] border-[1px] h-[44px] w-[44px] opacity-80 border-input">Член</div>
        <div className="text-center rounded-[90px] border-[1px] h-[44px] w-[44px] opacity-80 border-input">Попа</div>
        <div className="text-center rounded-[90px] border-[1px] h-[44px] w-[44px] opacity-80 border-input">Секс</div>
      </div>
    </header>
  );
}
