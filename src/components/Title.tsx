import Filter from "./Filter";

const Title = ({ value }) => {
  return (
    <div className="flex justify-between items-center">
      <h1>{value}</h1>
      <div className="flex justify-between items-center">
        <Filter title="All" type="all" />
        <Filter title="Active" type="active" />
        <Filter title="Inactive" type="inactive" />
      </div>
    </div>
  );
};

export default Title;
