export type Filter = {
  title: string;
  keyTitle: string;
  isActive: boolean;
  onClickFilter: (keyTitle: string) => void;
};

const Filter = ({
  title,
  keyTitle,
  isActive = false,
  onClickFilter,
}: Filter) => {
  return (
    <div
      onClick={() => onClickFilter(keyTitle)}
      className={`${
        isActive
          ? "dark:text-primary bg-active-filter border-active-filter-border text-white"
          : "hover:text-hover-primary hover:bg-hover-white-bg dark:hover:text-dark-primary dark:bg-dark-bg dark:hover:bg-hover-dark-bg dark:border-main-border-dark bg-white-bg border-main-border"
      } cursor-pointer font-medium border-[1px] rounded-[25px] h-[44px] leading-[44px] px-[18px]`}
    >
      {title}
    </div>
  );
};

export default Filter;
