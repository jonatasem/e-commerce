import resumePhone from '../assets/img/home-phone.png';
import './Home.scss';

const Home = () => {
    return (
        <>
            <section className="container-home">
                <article className="resume">
                    <h1>AirPods Max</h1>
                    <h2>Headphone</h2>
                    <p>Apple</p>
                    <span>
                        <a href="#products">Shop Now</a>
                    </span>
                </article>
                <article className="resume-phone">
                    <img src={resumePhone} alt="HeadPhone" />
                </article>
            </section>
            <h2 className='title'>Melhores Produtos</h2>
        </>
    );
}

export default Home;