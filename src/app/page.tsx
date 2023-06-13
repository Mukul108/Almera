import Image from "next/image";
import backgroundImg from "../../public/background.jpg";
import schoolLogo from "../../public/logo.png";
import Header from "./header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-50 "
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8">
          <Header />
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8">
            <div className="mb-8 sm:mb-0 sm:mr-8">
              <Image
                src={schoolLogo}
                alt="School Logo"
                width={400}
                height={400}
              />
            </div>
            <div>
              <h1 className="text-center text-4xl sm:text-8xl font-Forum text-golden">
                GOLDEN
              </h1>
              <h2 className="text-center text-4xl sm:text-8xl font-Forum text-golden">
                JUBILEE
              </h2>
              <h3 className="text-center text-4xl sm:text-8xl font-Forum text-golden">
                CELEBRATION
              </h3>
              <h4 className="text-center text-xl sm:text-2xl text-white font-balleza p-4 sm:p-8">
                CELEBRATING 50 YEARS OF SUCCESS 1973-2023
              </h4>
              <div className="flex flex-col items-center">
                <hr className="w-2/3 sm:w-full border border-golden my-4" />
                <h6 className="text-center text-xl sm:text-3xl text-golden font-bold">
                  MOTILAL NEHRU SCHOOL OF SPORTS
                </h6>
                <h6 className="text-center text-xl sm:text-3xl text-golden font-bold">
                  RAI SONIPAT HARYANA - 131029
                </h6>
                <hr className="w-2/3 sm:w-full border border-golden my-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8">
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex items-center justify-center rounded-2xl">
            <div className="text-center text-4xl sm:text-8xl font-Forum">
              Event Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
