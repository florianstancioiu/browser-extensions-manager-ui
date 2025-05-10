export type Switch = {
  isActive: boolean;
  name: string;
  onSwitchClick: (name: string) => void;
};

const Switch = ({ name, isActive, onSwitchClick }: Switch) => {
  return (
    <div>
      {isActive && (
        <div
          onClick={() => onSwitchClick(name)}
          className="bg-active-switch-bg w-[36px] h-[20px] relative rounded-[10px] cursor-pointer"
        >
          <div className="h-[16px] w-[16px] bg-white-bg absolute top-[2px] right-[2px] rounded-full"></div>
        </div>
      )}
      {!isActive && (
        <div
          onClick={() => onSwitchClick(name)}
          className="bg-inactive-switch-bg w-[36px] h-[20px] relative rounded-[10px] cursor-pointer"
        >
          <div className="h-[16px] w-[16px] bg-white-bg absolute top-[2px] left-[2px] rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Switch;
