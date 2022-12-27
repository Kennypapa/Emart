import { Fragment } from "react";
import model from ".././assets/images/d-model.png";
const Home = () => {
  return (
    <Fragment>
      <div className="lg:h-[700px] h-auto bg-[#f5dac0] mt-[89px] relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:h-[700px] h-auto">
          <div className="lg:h-[700px] h-auto lg:pt-0 pt-24 flex lg:justify-start w-full justify-center lg:items-center items-end">
            <div className=" lg:pl-16">
              <p className="text-[#701313] font-semibold lg:text-5xl md:text-5xl text-4xl w-[300px] mx-auto ">
                50% OFF FIRST ORDER
              </p>
              <p className="text-[#701313] text-sm lg:w-[500px] w-[90%] mx-auto text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                ullam, dolorem nobis vel ea illum porro Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Atque ab maiores a cum
                deleniti, nostrum ad!.
              </p>
            </div>
          </div>
          <div className="relative flex lg:justify-end justify-center items-baseline lg:h-[700px] h-[600px]">
            <img
              src={model}
              alt="modeller"
              className="absolute bottom-0  lg:right-12 lg:w-auto w-[350px] "
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
