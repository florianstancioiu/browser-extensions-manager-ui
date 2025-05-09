import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Extension from "./components/Extension.tsx";

const App = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);

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

  const onSwitchClickHandler = (name: string) => {
    setExtensions(
      extensions.map((extension: typeof Extension) => {
        if (extension.name === name) {
          return { ...extension, isActive: !extension.isActive };
        }

        return extension;
      })
    );
  };

  return (
    <>
      <div className="pt-[20px] px-[16px]">
        <Header />
        <Title value="Extensions List" />
        <main>
          {extensions.map((extension) => (
            <Extension
              key={extension.name}
              name={extension.name}
              logo={extension.logo}
              description={extension.description}
              isActive={extension.isActive}
              onSwitchClick={onSwitchClickHandler}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default App;
