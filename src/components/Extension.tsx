import Button from "./Button";
import Switch from "./Switch";

export type Extension = {
  name: string;
  logo: string;
  isActive: boolean;
  description: string;
  onSwitchClick: (name: string) => void;
  onRemove: (name: string) => void;
};

const Extension = ({
  name,
  logo,
  description,
  isActive,
  onSwitchClick,
  onRemove,
}: Extension) => {
  return (
    <div className="dark:bg-dark-bg dark:border-main-border-dark bg-white-bg mb-[15px] border-main-border border-[1px] rounded-[10px] p-[18px]">
      <div className="flex gap-[16px] mb-[28px]">
        <img
          className="w-[60px] h-[60px]"
          src={logo}
          alt={`${name} Extension Logo`}
        />
        <div>
          <p className="font-bold mb-[15px]">{name}</p>
          <p className="font-light">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button title="Remove" keyTitle={name} onClickButton={onRemove} />
        <Switch isActive={isActive} name={name} onSwitchClick={onSwitchClick} />
      </div>
    </div>
  );
};

export default Extension;
