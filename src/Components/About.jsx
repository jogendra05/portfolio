export default function About() {
    return (
      <section className="about section py-12" id="about">
        <h2 className="section-title">About</h2>
  
        <div className="about__container grid gap-8 md:grid-cols-2 md:items-center">
          <div className="about__img justify-self-center">
            <img 
              src="/assets/img/about.jpg" 
              alt="About" 
              className="w-48 rounded-lg md:w-64"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="about__subtitle text-xl font-semibold mb-4">I'am Marlon</h2>
            <p className="about__text text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora,
              assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae
              alias accusamus atque.
            </p>
          </div>
        </div>
      </section>
    );
  }