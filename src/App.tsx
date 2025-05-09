import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Extension from "./components/Extension";

const App = () => {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch("data.json");
        const json = await response.json();
        setExtensions(json);
      } catch {
        setExtensions([]);
      }
    };

    fetchExtensions();
  }, []);

  return (
    <>
      <div className="pt-[20px] px-[16px]">
        <Header />
        <Title value="Extensions List" />
        <main>
          {extensions.map((extension) => (
            <Extension key={extension.name} {...extension} />
          ))}
        </main>
      </div>
    </>
  );
};

export default App;
