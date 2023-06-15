import React from 'react';
import Image from "next/image";
import backgroundImg from "../../public/background.jpg";
import schoolLogo from "../../public/logo.png";
import Header from "./header";
import Highlights from "./highlights";

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
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin">
            <div className="mb-8 sm:mb-0 sm:mr-8 container-size">
              <Image
                src={schoolLogo}
                alt="School Logo"
                width={400}
                height={400}
              />
            </div>
            <div className="container-size">
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
        <div id="Principals Desk" className="relative z-10 flex flex-col items-center justify-center text-white mt-8 container-margin">
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex items-center justify-center rounded-2xl mt-8 mx-4 container-size">
            <div className="text-center">
              <h1 className="text-4xl sm:text-8xl font-Forum text-golden">
                Principals  Desk
              </h1>
              <br /><br />
               <p className="text-xl font-Forum text-white">I, Principal & Director Col. Ashok Mor &#40;Retd.&#41;, along with the esteemed staff and vibrant student community cordially invites you to the Golden Jubilee Celebration of Mnss, Rai marking 50 glorious years of academic excellence from 1973 to 2023. We extend our heartfelt invitation to commemorate this momentous occasion. Join us on 2nd July 2023 for a nostalgic day filled with captivating events, mesmerizing performances, heartwarming reunions, and a majestic spectacle showcasing our exceptional achievements. Kindly Rigestration Form. Let's honor the cherished past, celebrate the present, and embrace the promising future together.</p>
    
            </div>
          </div>
        </div>

        <div id="event-details" className="relative z-10 flex flex-col items-center justify-center text-white mt-8 container-margin">
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex items-center justify-center rounded-2xl mt-8 mx-4 container-size">
            <div className="text-center">
              <h1 className="text-4xl sm:text-8xl font-Forum text-golden">
                Event Details
              </h1>
              <p className="text-xl sm:text-2xl text-white font-balleza p-4 sm:p-8">
                <a
                  href="https://lu.ma/mnss"
                  className="text-golden underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Come Join us
                </a>
                &nbsp; for the grand Golden Jubilee Celebration event, marking 50 glorious years of success and achievements at Motilal Nehru School of Sports. This momentous occasion will take place on Sunday, 2nd July 2023, from 9:00 am to 3:00 pm. We invite you to be part of this memorable event filled with joy, nostalgia, and a reflection on our remarkable journey. The venue for the celebration is located at{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Motilal%20Nehru%20School%20of%20Sports&query_place_id=ChIJuYb_ECqsDTkRechOQZ9m0LI"
                  className="text-golden underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Motilal Nehru School of Sports
                </a>
                , Rai Sonipat, Haryana - 131029. Come and join us as we celebrate our rich history and accomplishments. It promises to be an unforgettable day filled with special performances, interactive sessions, and heartwarming reunions. We look forward to welcoming you!
              </p>
            </div>
          </div>
        </div>
        

        {/* <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8 container-margin">
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 rounded-2xl mt-8 mx-4 container-size">
            <h1 className="text-4xl sm:text-8xl font-Forum text-golden">
              Location
            </h1>
            <div className="aspect-w-16 aspect-h-9 mt-4 container-size">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.982663694542!2d77.14221487494466!3d29.000239147323736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39117deee29615dd%3A0xe2d4d7635889d073!2sMotilal%20Nehru%20School%20of%20Sports!5e0!3m2!1sen!2sus!4v1625297287314!5m2!1sen!2sus"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div> */}

        <div id="highlights" className="relative z-10 flex flex-col items-center justify-center text-white mt-8 container-margin">
          <Highlights />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
