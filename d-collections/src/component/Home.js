import { Fragment } from "react";
import model from ".././assets/images/d-model.png";
const Home = () => {
  return (
    <Fragment>
      <div className="h-[700px] bg-[#f5dac0] mt-[89px] relative">
        <div className="grid grid-cols-2 gap-4 h-[700px]">
          <div className="h-[700px] flex justify-center items-center">
            <div>
              <p className="text-[#701313] font-semibold text-5xl w-[300px]">
                50% OFF FIRST ORDER
              </p>
              <p className="text-[#701313] text-sm w-[500px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                ullam, dolorem nobis vel ea illum porro Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Atque ab maiores a cum
                deleniti, nostrum ad!.
              </p>
            </div>
          </div>
          <div className="relative flex justify-end items-baseline">
            <img
              src={model}
              alt="modeller"
              className="absolute bottom-0 right-12"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
