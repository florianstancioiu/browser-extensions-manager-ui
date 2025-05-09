import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[20px] px-[16px]">
        <Header />
        <main>
          <h1 className="text-3xl font-noto-sans font-bold underline">
            Hello world!
          </h1>
        </main>
      </div>
    </>
  );
};

export default App;
