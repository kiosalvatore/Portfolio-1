import styles from './Home.module.css'
import savings from '../../assets/savings.svg'
import LinkButton from '../layout/LinkButton'
import { FaAngular, FaReact, FaHtml5, FaCss3Alt, FaGitSquare, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao meu <span>Portfólio</span></h1>
      {/* <p>Comece a gerenciar os seus projetos agora mesmo!</p> */}
      <LinkButton to="/projects" text="Meus Projetos"/>
      <img src={savings} alt="Costs"  />
      <h2>Sobre mim</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos fugiat blanditiis cum placeat, consectetur in omnis delectus ipsam pariatur, quo dolorem nisi temporibus quia, esse nobis fuga laboriosam nihil. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa rerum quas explicabo officia nobis velit, harum distinctio, ipsum doloribus et sed. Ad voluptatibus vel exercitationem mollitia minima autem, quod quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem a quasi ratione molestiae. Corporis voluptatibus in explicabo assumenda ea. Dolorem consequuntur eos neque nulla debitis optio voluptatibus! In, tenetur?</p>
        <h1><span>Tecnologias</span></h1>
      <div>
          <ul>
            <li><FaHtml5/></li>
            <li><FaCss3Alt/></li>
            <li><IoLogoJavascript/></li>
            <li><SiTypescript/></li>
            <li><FaReact/></li>
            <li><FaAngular/></li>
            <li><FaGitSquare/></li>
            <li><FaGithub/></li>
          </ul>
      </div>
      
    </section>
  )
}
