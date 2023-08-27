const ListLayout = (props) => {
  return (
    <>
      <div>
        <p>Hello {props.Data.name}</p>
      </div>
      <button onClick={() => props.onDelete(props.Data.id)}>Delete</button>
    </>
  );
};
export default ListLayout;
