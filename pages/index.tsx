import type {NextPage} from "next";
import Head from "next/head";
import DashboardLayout from "../layouts/Dashboard";
import {Filters} from "../components/Filters";
import ShopList from "../components/ShopList";
import {FilterProvider} from "../contexts/FilterContext";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hustle Sasa</title>
        <meta name="description" content="Shop here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <FilterProvider>
          <DashboardLayout>
            <Filters />
            <ShopList />
          </DashboardLayout>
        </FilterProvider>
      </main>
    </div>
  );
};

export default Home;
