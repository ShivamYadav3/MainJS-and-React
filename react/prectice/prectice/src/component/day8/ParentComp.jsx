import ChildComp from "./ChildComp";
const ParentComp = () => {
  const OnClick = () => {
    console.log("i am clicked");
  };
  return (
    <>
      <p>I am Parent</p>
      <ChildComp onSomeClick={OnClick} />
    </>
  );
};
export default ParentComp;
