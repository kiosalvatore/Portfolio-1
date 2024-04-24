
import { Carousel } from 'antd';
import programming from '../../assets/programming.png'
import styles from './Carousel.module.css'


 const projetos = [
    {
        img: programming,
        title: 'buzzfeed',
        description: 'loremloremlorem',
        link: 'https/123',
    },
    {
        img: programming,
        title: 'buzzfeed',
        description: 'loremloremlorem',
        link: 'https/123',
    },
    {
        img: programming,
        title: 'buzzfeed',
        description: 'loremloremlorem',
        link: 'https/123',
    },
    {
        img: programming,
        title: 'buzzfeed',
        description: 'loremloremlorem',
        link: 'https/123',
    },
 ]

const Carossel = () => (
  <div className={styles.carousel_container}>
      
      <Carousel autoplay className={styles.carousel_content}>

        {projetos.map((data, id) => (

        <div className={styles.box_carousel} key={id}>
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <span>{data.link}</span>
        </div>

        ))}
      </Carousel>
  </div>
);
export default Carossel;