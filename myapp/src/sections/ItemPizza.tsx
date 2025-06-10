import { Pizza } from "../models/pizza.model";
// megre trong type
type Abc = Pizza & {
    handleChangePerson:(data:Pizza) => void;
};
const ItemPizza = ({ title, description,handleChangePerson }: Abc) => {
  return (
    <>
      <div> {title}</div>
      <div> {description}</div>;
      {/* Khi bam thi thang HomePage.tsx se nhan duoc gia tri Theanh va Mota va data */}
      <button onClick={() => handleChangePerson({title:"Theanh",description:"Mota"})}>Change Person</button>
    </>
  );
};
export default ItemPizza;
