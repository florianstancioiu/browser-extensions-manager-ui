const Extension = ({ name, logo, description, isActive }) => {
  return (
    <div>
      <div className="flex gap-[10px]">
        <div>{/*<img src={logo} alt="" /> */}</div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Extension;
