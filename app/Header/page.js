export default function Search() {
  return (
    <>
      <section className="flex gap-5 py-4 pr-20 pl-10 w-full text-sm leading-5 text-gray-700 bg-white rounded-[40px_40px_0px_0px] max-md:flex-wrap max-md:px-5 max-md:max-w-full relative">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ea3d4efe712f250006ce08de5310f024dfba36a708e8e28b98e32a25aef2fc?apiKey=074feec80a53420dbce67f0921d9b5b4&"
          alt=""
          className="shrink-0 aspect-square w-[49px]"
        />
        <div className="flex gap-1 self-start px-4 py-3 bg-slate-50 rounded-[100px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b6088ec03312ea3906b708ff6ede9595107d972cc5532e57cd2addc9f6b83e?apiKey=074feec80a53420dbce67f0921d9b5b4&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
          <label htmlFor="search" className="sr-only">
            Search events...
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search events..."
            className="flex-auto my-auto bg-transparent outline-none max-md:max-w-full"
          />
        </div>
        <div className="hidden max-md:flex absolute inset-y-0 right-0 items-center pr-4">
          {/* Hamburger icon */}
          <svg
            className="h-6 w-6 text-gray-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
