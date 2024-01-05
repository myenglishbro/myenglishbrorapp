import {data} from "../../utils/data.js"
import Card from "./Card.jsx"
const ContainerCard = () => {
  return (
    <section className="grilla">
      {data.map((item) => (
          <Card
            key={item.id}
            thumbnail={item.thumbnail}
            thumbnailcae={item.thumbnailcae}

            thumbnailfce={item.thumbnailfce}

            thumbnailcpe={item.thumbnailcpe}

            title={item.title}
            type={item.type}
            dateAdded={item.dateAdded}
            calificacion={item.calificacion}
            description={item.description}
            enlace={item.enlace}
            precio={item.precio}
            demo={item.demo}
          />
        ))}
    </section>
  )
}

export default ContainerCard
