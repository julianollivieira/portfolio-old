import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Summary from "@/components/Summary";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mx-auto font-roboto text-white md:container">
        <div className="w-min">
          <p className="pt-20 pb-14 text-4xl font-bold text-center sm:text-6xl lg:text-9xl lg:text-left 2xl:whitespace-nowrap">
            {"julian ollivieira"}
          </p>
          <Summary />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
