const Filter = ({ title, keyTitle, isActive = false, onClickFilter }) => {
  return (
    <div
      onClick={() => onClickFilter(keyTitle)}
      className={`${
        isActive
          ? "bg-active-filter border-active-filter-border text-white"
          : "bg-white-bg border-main-border"
      } cursor-pointer font-medium border-[1px] rounded-[25px] h-[44px] leading-[44px] px-[18px]`}
    >
      {title}
    </div>
  );
};

export default Filter;
