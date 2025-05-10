import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import {
  default as ExtensionComponent,
  type Extension,
} from "./components/Extension.tsx";

const App = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
      extensions.map((extension: Extension) => {
        if (extension.name === name) {
          return { ...extension, isActive: !extension.isActive };
        }

        return extension;
      })
    );
  };

  const onRemoveHandler = (name: string) => {
    setExtensions(
      extensions.filter((extension: Extension) => {
        if (extension.name === name) {
          return false;
        }

        return true;
      })
    );
  };

  const onClickFilterHandler = (keyTitle: string) => {
    setActiveFilter(keyTitle);
  };

  return (
    <>
      <div className="min-h-dvh pt-[20px] px-[16px] fm:w-[var(--desktop-container)] fm:mx-auto fm:pt-[40px] fm:pb-[60px]">
        <Header />
        <Title
          value="Extensions List"
          activeFilter={activeFilter}
          onClickFilter={onClickFilterHandler}
        />
        <main className="fm:grid fm:grid-cols-3 fm:gap-[14px]">
          {extensions
            .filter((extension) => {
              if (activeFilter === "active") {
                return extension.isActive;
              }

              if (activeFilter === "inactive") {
                return !extension.isActive;
              }

              return true;
            })
            .map((extension) => (
              <ExtensionComponent
                key={extension.name}
                name={extension.name}
                logo={extension.logo}
                description={extension.description}
                isActive={extension.isActive}
                onSwitchClick={onSwitchClickHandler}
                onRemove={onRemoveHandler}
              />
            ))}
        </main>
      </div>
    </>
  );
};

export default App;
