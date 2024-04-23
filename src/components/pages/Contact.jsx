import perfil2 from '../../assets/perfil2.jpg'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1>Contato</h1>
      <img src={perfil2} alt="" />
      <p>Caio</p>
      <span>Desenvolvedor Front-end</span>
      <a href="#">Link Currículo</a>
    </div>
  )
}
