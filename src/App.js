function App() {
  return (
    <div className=" w-full ">
      <div>
        <p className="text-2xl font-bold top-10 m-7 font-sans">
          {" "}
          404 NOT FOUND
        </p>
      </div>
      <div className=" flex flex-wrap mx-auto m-40 font-mono ">
        <div>
          <img
            src="/Scarecrow.png"
            alt="Scarecrow"
            height={447.43}
            width={539.22}
          />
        </div>
        <div className=" m-12">
          <p className=" font-bold text-5xl ">I have some bad news for you</p>
          <p className=" font-normal font-spacemono text-2xl w-96 h-28 left-96 ">
            The page you are looking for might be removed or is temporarily
            available
          </p>
          <button className=" bg-gray-700 text text-white text-sm font-mono font-bold w-40">
            <p className=" m-3 font-bold font-spacemonon">BACK TO HOMEPAGE</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center text-gray-500">
        Created by Remzeey - devChallenges.io
      </div>
    </div>
  );
}

export default App;
