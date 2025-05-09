export interface Button {
  title: string;
}

const Button = ({ title, keyTitle, onClickButton }: Button) => {
  return (
    <div
      onClick={() => onClickButton(keyTitle)}
      className="dark:text-dark-primary dark:bg-dark-bg bg-white-bg cursor-pointer border-[1px] border-button-border h-[36px] leading-[36px] px-[15px] rounded-[20px] text-primary font-normal"
    >
      {title}
    </div>
  );
};

export default Button;
