export default function Partner() {
  return (
    <div className="relative w-full h-[200px] text-white text-center">
      <img
        src="/assets/cofee.jpg"
        alt="Coffee Beans Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2">
        <div>
          <p className="text-lg font-semibold">Available ON</p>
          {/* Flexbox untuk meratakan teks */}
          <div className="flex justify-between w-44">
            <p className="text-sm">Weekdays</p>
            <p className="text-sm">09AM - 11PM</p>
          </div>
          <div className="flex justify-between w-44">
            <p className="text-sm">Weekend</p>
            <p className="text-sm">09AM - 12AM</p>
          </div>
        </div>

        {/* Flex Container */}
        <div className="flex gap-4 mt-2">
          <div className="bg-white p-1 rounded-md">
            <img
              src="/assets/gojek.png"
              alt="Gojek"
              className="w-24 h-12 object-contain"
            />
          </div>
          <div className="bg-white p-1 rounded-md">
            <img
              src="/assets/grab.jpg"
              alt="GrabFood"
              className="w-24 h-12 object-contain"
            />
          </div>
          <div className="bg-[#f5462f] p-1 rounded-md">
            <img
              src="/assets/sf.jpg"
              alt="ShopeeFood"
              className="w-24 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
