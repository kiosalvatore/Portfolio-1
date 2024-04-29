import { Carousel } from "antd";
import programming from "../../assets/programming.png";
import styles from "./Carousel.module.css";
// import Container from "../layout/Container";

const projetos = [
  {
    img: programming,
    title: "buzzfeed",
    description: "loremloremlorem",
    link: "https/123",
  },
  {
    img: programming,
    title: "buzzfeed",
    description: "loremloremlorem",
    link: "https/123",
  },
  {
    img: programming,
    title: "buzzfeed",
    description: "loremloremlorem",
    link: "https/123",
  },
  {
    img: programming,
    title: "buzzfeed",
    description: "loremloremlorem",
    link: "https/123",
  },
];

const Carrossel = () => (
  <>
   
      <section className={styles.sectionProjetos}>
        <h2>Projetos</h2>
        <Carousel
          autoplay
          pauseOnHover
          // initialSlide={4}
          slidesToShow={3}
          dots={false}
          className={styles.carouselWrapper}
          responsive={[
            {
              breakpoint: 1181,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {projetos.map((projeto, index) => (
            <div key={index} className={styles.boxCards}>
              <img src={projeto.img} alt={projeto.titulo} />
              <h3>{projeto.title}</h3>
              <p>{projeto.description}</p>
            </div>
          ))}
        </Carousel>
      </section>
   
  </>
);
export default Carrossel;