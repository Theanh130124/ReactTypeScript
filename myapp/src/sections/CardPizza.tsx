import LogoPizza from "../assets/pizza.png";
import { Pizza } from "../models/pizza.model";


//Day la compoment con cua HomePage.tsx -> nhan gia tri truyen Props


//Day la 1 component Card minh tu dinh nghia
//interface di voi class
type Props = Pizza;
const CardPizza = ({
    title,
    description
}:Props) => {
  return (
    <div className="card-items">
      <img className="card-image-pizza" src={LogoPizza} alt="Anh Pizza" />
      <div style={{ height: "50%", width: "100%" }}></div>
      <div className="card-content">
        <div>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>
           {title}
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#fff",
              marginTop: ".5rem",
            }}
          >
          {description}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;
