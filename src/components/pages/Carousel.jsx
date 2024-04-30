import { Carousel } from "antd";
import projeto1 from "../../assets/projeto1.jpg";
import projeto2 from "../../assets/projeto2.jpg";
import projeto3 from "../../assets/projeto3.jpg";
import projeto4 from "../../assets/projeto4.jpg";
import styles from "./Carousel.module.css";
// import Container from "../layout/Container";

const projetos = [
  {
    img: projeto1,
    title: "AngularBlog",
    description: "Blog Simples feito com Angular e TypeScript",
    link: "https/123",
  },
  {
    img: projeto2,
    title: "Loja de Acessórios",
    description: "Aplicação para Loja de Acessórios feita com React.js",
    link: "https/123",
  },
  {
    img: projeto3,
    title: "Interface McDonalds",
    description: "Projeto Simples com Interface Interativa feita com React.js",
    link: "https/123",
  },
  {
    img: projeto4,
    title: "Buzzfeed",
    description: "Aplicação de Quizz Interativa Feita com Angular",
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