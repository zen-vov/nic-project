export default function Footer() {
  return (
    <footer className="py-[80px] px-[60px]">
      <div className="container">
        <div className="flex justify-between border-b border-gray pb-[36px]">
          <div>
            <h3 className="text-xl2 text-primary font-[700] mb-[16px]">
              Morent
            </h3>
            <p className="text-base text-gray font-[500] w-[290px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex items-center gap-[60px]">
            <div className="flex flex-col">
              <div className="mb-[24px]">
                <p className="text-lg2 text-secondary font-[600]">About</p>
              </div>
              <div className="flex flex-col gap-[20px] text-base text-gray font-[500]">
                <p>Featured</p>
                <p>Featured</p>
                <p>Featured</p>
                <p>Featured</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-[24px]">
                <p className="text-lg2 text-secondary font-[600]">Community</p>
              </div>
              <div className="flex flex-col gap-[20px] text-base text-gray font-[500]">
                <p>Featured</p>
                <p>Featured</p>
                <p>Featured</p>
                <p>Featured</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-[24px]">
                <p className="text-lg2 text-secondary font-[600]">Socials</p>
              </div>
              <div className="flex flex-col gap-[20px] text-base text-gray font-[500]">
                <p>Featured</p>
                <p>Featured</p>
                <p>Featured</p>
                <p>Featured</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[36px]">
          <div>
            <p className="text-base text-secondary font-[600]">
              ©2022 MORENT. All rights reserved
            </p>
          </div>
          <div className="flex gap-[60px] text-base text-secondary font-[600]">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
