export default function Home() {
    return (
      <section className="home relative grid gap-20 py-16 md:py-32" id="home">
        <div className="home__data self-center">
          <h1 className="home__title text-4xl md:text-7xl font-bold mb-8">
            Hi,<br />I'am <span className="text-first-color">Jogendra</span><br /> Web Designer
          </h1>
          <a href="#contact" className="button bg-first-color text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Contact
          </a>
        </div>
  
        <div className="home__social flex flex-col gap-4">
          {['bxl-linkedin', 'bxl-behance', 'bxl-github'].map((icon) => (
            <a key={icon} href="#" className="home__social-icon text-2xl text-second-color hover:text-first-color transition-colors">
              <i className={`bx ${icon}`}></i>
            </a>
          ))}
        </div>
  
        <div className="home__img absolute right-0 bottom-0 w-64 md:w-[450px]">
          <svg className="home__blob" viewBox="0 0 479 467">
            {/* Keep the original SVG structure */}
            <mask id="mask0">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
              <image className="home__blob-img" x="50" y="60" href="/assets/img/perfil.png"/>
            </g>
          </svg>
        </div>
      </section>
    );
  }