import Card from "./Card"
import {data, DataShape} from "../db/data.ts";

const Home = () => {
  return (
    <section 
      className="flex flex-wrap justify-center gap-10"
      style={{padding: "50px 10px"}}
    >
      {data.map(({title, img, description} : DataShape, index:number) => (
        <Card 
          key={index}
          title={title}
          img={img}
          description={description}
        />
      ))}
      
    </section>
  )
}

export default Home