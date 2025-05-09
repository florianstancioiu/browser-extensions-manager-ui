import Filter from "./Filter";

const filters = [
  {
    title: "All",
    key: "all",
  },
  {
    title: "Active",
    key: "active",
  },
  {
    title: "Inactive",
    key: "inactive",
  },
];

export type Title = {
  value: string;
  activeFilter: string;
  onClickFilter: (keyTitle: string) => void;
};

const Title = ({ value, activeFilter, onClickFilter }: Title) => {
  return (
    <div className="fm:mb-[30px] mb-[40px] fm:flex fm:justify-between fm:items-center">
      <h1 className="fm:mb-0 dark:text-dark-primary text-primary grid place-items-center font-bold text-[36px] mb-[26px]">
        {value}
      </h1>
      <div className="flex justify-center gap-[12px] items-center">
        {filters.map((filter) => (
          <Filter
            key={filter.key}
            keyTitle={filter.key}
            title={filter.title}
            isActive={activeFilter === filter.key}
            onClickFilter={onClickFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default Title;
