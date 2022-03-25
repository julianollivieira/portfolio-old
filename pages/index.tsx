import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Picture from "@/components/sections/Picture";
import Skills from "@/components/sections/Skills";
import SocialLinks from "@/components/sections/SocialLinks";
import Summary from "@/components/sections/Summary";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mx-auto font-roboto text-white lg:container">
        <div className="w-11/12 2xl:w-min">
          <p className="pt-20 text-5xl font-bold text-center sm:text-7xl lg:text-9xl lg:text-left 2xl:whitespace-nowrap">
            {"julian ollivieira"}
          </p>
          <hr className="my-14 border-2" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="order-first col-span-1 lg:order-none">
              <Picture />
            </div>
            <div className="flex col-span-1 items-center lg:col-span-3">
              <Summary />
            </div>
            <div className="flex -order-1 grid-cols-1 justify-center lg:order-none">
              <div className="flex justify-center w-52">
                <SocialLinks />
              </div>
            </div>
            <div className="grid-cols-1 lg:col-span-3">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
