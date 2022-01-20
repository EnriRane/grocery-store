const Delete = ({ handleDelete }) => {
  return (
    <div className="d-flex align-items-center">
      <i
        className="fa fa-trash mb-1 text-danger"
        style={{ cursor: "pointer" }}
        onClick={handleDelete}
      ></i>
    </div>
  );
};

export default Delete;
{
}
