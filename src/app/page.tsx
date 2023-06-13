import Image from 'next/image';
import schoolLogo from '../../public/logo.png';
import backgroundImg from '../../public/background.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black overflow-y-scroll">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <div className="bg-white bg-opacity-30 p-24 flex items-center justify-center rounded-4xl">
          <div className="mr-8">
            <Image src={schoolLogo} alt="School Logo" width={350} height={350} />
          </div>
          <div>
            <h1 className="text-center text-6xl font-bold text-golden font-Forum">
              Golden
            </h1>
            <h2 className="text-center text-6xl font-bold text-golden font-Forum">
              Jubilee
            </h2>
            <h3 className="text-center text-6xl font-bold text-golden font-Forum">
              Celebration
            </h3>
            <h4 className="text-center text-xl text-golden font-normal">Celebrating 50 years of success</h4>
          </div>
        </div>

        <a
          href="invitation-form.html"
          className="mt-8 px-6 py-4 bg-golden text-white font-bold text-lg rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out"
        >
          Submit Invitation Form
        </a>
      </div>
    </div>
  );
};

export default HomePage;
