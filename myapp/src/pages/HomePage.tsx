import { useState } from "react";
import LogoPizza from "../assets/pizza.png";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/pizza.model";
import ItemPizza from "../sections/ItemPizza";

const HomePage = () => {
  const [pizza, setPizza] = useState<Pizza[]>([
    {
      id: 1,
      title: "Pizza Thit Bam",
      description : "Thi bam sot ca chua",
    },
    {
      id: 2,
      title: "Pizza Thit Bam",
      description : "Thi bam sot ca chua",
    },
    {
      id: 3,
      title: "Pizza Thit Bam",
      description : "Thi bam sot ca chua",
    },
  ]);

  
  const [person , setPersion] = useState<Pizza>({
    title:"TheAnhDev",
    description:"Mota"
  });

  //Cha hung du lieu tu component con goi la
  //function Props 
  const handleChangePerson = (data:Pizza) => {
    setPersion(data);
    console.log(data)
  }
  return (
    <div
      style={{
        height: "calc(100vh - 309px",
        padding: "4rem 4rem",
        overflow: "auto",
      }}
    >
      <div className="wrapper-card-items">
        {pizza.map(item =>  <CardPizza id={item.id} title={item.title} description={item.description} />)}
       
      </div>
      <br/>
      <ItemPizza title={person.title} description={person.description} handleChangePerson={handleChangePerson} />
    </div>
  );
};

export default HomePage;
