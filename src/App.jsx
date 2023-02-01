import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div>
      {/* Header Section*/}
      <Header />
      {/* Banner Section*/}
      <Banner />

      <main className="">
        {/* Explore Section */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
};

export default App;
