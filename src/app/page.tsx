import Image from 'next/image';
import backgroundImg from '../../public/background.jpg';
import schoolLogo from '../../public/logo.png';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <div className="rounded-full bg-white bg-opacity-20 p-16">
          <Image src={schoolLogo} alt="School Logo" width={200} height={200} />
        </div>
        <h1 className="text-4xl font-bold mt-8">Golden Jubilee Celebration</h1>
      </div>

      <div className="bg-white bg-opacity-20 p-8 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold">Event Details</h2>
        <p className="mt-4">Date: [Insert Date]</p>
        <p className="mt-2">Time: [Insert Time]</p>
        <p className="mt-2">Location: [Insert Location]</p>
      </div>

      <button className="bg-white text-black px-8 py-4 rounded-lg mt-8">
        Register Now
      </button>
    </div>
  );
};

export default HomePage;
