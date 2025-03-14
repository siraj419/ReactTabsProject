import { FC } from "react";

interface CardProps{
  title: string;
  description: string,
  img: string;
};  

const Card : FC<CardProps> = ({title, description, img}) => {
  return (
    <div className="w-[300px] rounded-lg shadow-xl">
        <section className="w-full h-[100px] bg-gray-300 rounded-t-lg">
            <img 
              src={img}
              alt="not found"
              className="w-fit h-fit rounded-t-lg"
            />
        </section>
        <section style={{padding: "15px"}}>
          <h4 className="font-bold text-2xl" style={{marginBottom: "5px"}}>
            {title}
          </h4>
          <p>
            {description}
          </p>

          <button className="text-xl shadow border-[1px] border-gray-100 rounded"
                  style={{padding: "5px 10px", marginTop: "10px"}}
          >
            Learn More
          </button>
        </section>
    </div>
  )
}

export default Card;