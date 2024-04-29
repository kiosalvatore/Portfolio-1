// import Message from '../layout/Message'
// import { useNavigate } from 'react-router-dom'
import styles from "./Projects.module.css";
// import Container from "../layout/Container";
// import LinkButton from '../layout/LinkButton'

import Carrossel from "./Carousel.jsx";

export default function Projects() {
  // const navigate = useNavigate()
  // let message = ''
  // if(navigate.state) {
  //   message = navigate.state.message
  // }

  return (
    <>
      <section className={styles.project_container}>
        <div className={styles.title_container}>
          <h1>Meus Projetos</h1>
      
        <Carrossel/>
        </div>
      </section>
    </>
  );
}

