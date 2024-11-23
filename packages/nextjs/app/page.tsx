import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">CureLedger</span>
          <span className="block text-4xl font-bold">DSCI Token</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/hero.png"
            width="727"
            height="231"
            alt="challenge banner"
            className="rounded-xl border-4 border-primary"
          />
          
          <div className="p-8 bg-base-200 text-base-content">
        {/* section */}
        <section className="py-12 text-center">
          
          <p className="text-xl mt-4 text-base-content max-w-xl mx-auto">
            A decentralized revolution in global health
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="btn btn-secondary btn-wide text-base-content"
            >
              White Paper
            </a>
            <a
              href="#"
              className="btn btn-secondary btn-wide text-neutral-content"
            >
              Connect
            </a>
          </div>
        </section>

        {/* Other sections remain unchanged */}

        <section className="py-12 bg-base-200 text-base-content">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-primary-content">
              Guided by Vision, Driven by Experience
            </h2>
            <p className="text-lg mt-4 text-base-content">
              CureLedger is not just a new entrant in the market. It is the product of six years of dedication, innovation, and deep understanding of the challenges in healthcare. 
            </p>
            <p className="text-lg mt-4 text-base-content">
              We’ve worked closely with the biggest entities in healthcare and navigated the complexities of global data-driven compliance to develop a platform that truly meets the needs of today's health data industry while scaling innovation.
            </p>
            <p className="text-lg mt-4 text-base-content">
              Our journey has been shaped by collaboration, and we invite you to be part of the next chapter in decentralized healthcare.
            </p>
             
            <div className="mt-8">
              <a
                href="#"
                className="btn btn-secondary btn-wide text-neutral-content"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </section>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
