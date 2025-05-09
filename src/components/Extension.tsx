import Button from "./Button";
import Switch from "./Switch";

export interface Extension {
  name: string;
  logo: string;
  isActive: boolean;
  description: string;
  onSwitchClick?: (name?: string | undefined) => void;
}

const Extension = ({
  name,
  logo,
  description,
  isActive,
  onSwitchClick,
}: Extension) => {
  return (
    <div className="bg-white-bg mb-[15px] border-main-border border-[1px] rounded-[10px] p-[18px]">
      <div className="flex gap-[16px] mb-[28px]">
        <div>
          <img src={logo} alt={`${name} Extension Logo`} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="font-light">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button title="Remove" />
        <Switch isActive={isActive} name={name} onSwitchClick={onSwitchClick} />
      </div>
    </div>
  );
};

export default Extension;
