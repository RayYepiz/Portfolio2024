import heroImage from '../../images/heroImage.png'

export default function HeroSection () {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey I am Raymond</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. Asperiores id, ratione aliquam ex qui perspiciatis. Praesentium.
                    </p>
                    </div>
                    <button className='btn btn-primary'>Get In Touch</button>
                    </div>
                    <div className='hero--section--img'>
                        <img src={heroImage} alt='Image of Raymond Yepiz merged with the letter R'/>
                    </div>
        </section>
    );
}