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
            className="filter brightness-50 blur-sm"
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
            <div className="text-center">
              <h1 className="text-4xl sm:text-8xl font-Forum text-golden">
                Event Details
              </h1>
              <p className="text-xl sm:text-2xl text-white font-balleza p-4 sm:p-8">
              <a href="https://lu.ma/ch5ykyrt" className="text-golden underline" target="_blank" rel="noopener noreferrer">Come Join us </a>for the grand Golden Jubilee Celebration event, marking 50 glorious years of success and achievements at Motilal Nehru School of Sports. This momentous occasion will take place on Sunday, 2nd July 2023, from 9:00 am to 3:00 pm. We invite you to be part of this memorable event filled with joy, nostalgia, and a reflection on our remarkable journey. The venue for the celebration is located at <a href="https://www.google.com/maps/search/?api=1&query=Motilal%20Nehru%20School%20of%20Sports&query_place_id=ChIJuYb_ECqsDTkRechOQZ9m0LI" className="text-golden underline" target="_blank" rel="noopener noreferrer">Motilal Nehru School of Sports</a>, Rai Sonipat, Haryana - 131029. Come and join us as we celebrate our rich history and accomplishments. It promises to be an unforgettable day filled with special performances, interactive sessions, and heartwarming reunions. We look forward to welcoming you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
