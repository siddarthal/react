import { useParams } from "react-router-dom";
const Items = () => {
  const { id } = useParams();
  return (
    <>
      <h1>hi</h1>

      <h2>product id {id}</h2>
    </>
  );
};
export default Items;
