import model from ".././assets/images/d-model.png";
const About = () => {
  return (
    <div>
      <div className="lg:h-[700px] h-auto bg-[#f5dac0] mt-[89px] relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:h-[700px] h-auto">
          <div className="lg:h-[700px] h-auto lg:pt-0 pt-24 flex lg:justify-start w-full justify-center lg:items-center items-end">
            <div className=" lg:pl-16">
              <p className="text-[#701313] font-semibold lg:text-5xl md:text-5xl text-4xl w-[400px] mx-auto ">
                D-COLLECTIONS
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
      <div className="lg:w-[220px] md:w-[510px] w-full mx-auto border-l-4 border-l-[#701313]  pt-12 mb-10">
          <h1 className=" lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-[Unbounded] text-left pl-2 text-center">
            About Us
          </h1>
      </div>

      <div className="w-[80%] mx-auto mb-20">
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam et hic incidunt sit ut facilis minus animi repudiandae
             cum magnam ullam sint similique quis, voluptas laudantium, temporibus, 
             rem magni tempore eius laborum repellendus illum maxime illo accusantium! 
             Provident, adipisci, placeat repellat rem molestias ad non modi ratione 
             esse nisi iure voluptates fugiat illum assumenda eos. Esse at quam voluptatem 
             reprehenderit unde aspernatur vitae autem. Commodi aliquam aliquid maxime 
             corrupti, in laborum dolore recusandae, accusamus praesentium laboriosam temporibus 
             perspiciatis alias cumque natus dolorum placeat id tempore quae ullam rem possimus
             quasi? Eveniet officiis cum harum facilis quo soluta perferendis. Ea rem, ab blanditiis 
             inventore quos consequatur commodi! Odit labore magni alias non porro ea sequi quis
             atque tenetur optio, doloribus explicabo quos libero quidem cupiditate a accusantium 
             corrupti mollitia voluptatum natus rem quisquam! Veniam, officia accusantium consectetur 
             odio minima optio nemo a? Ipsam, quo accusamus, eaque voluptatibus explicabo doloremque
             sequi in fuga ea dolorem quos. Voluptates tenetur doloremque ipsam, sit asperiores et
             distinctio dignissimos blanditiis praesentium dolore reprehenderit in sed, corrupti
             dolor, aliquid magni nulla quaerat obcaecati error nam a qui ratione illo. Maxime 
             repudiandae blanditiis quas, quam molestiae, cumque modi ducimus aut ea quo et! Eveniet eum vero magnam impedit.</p>
      </div>
    </div>
  );
};

export default About;
