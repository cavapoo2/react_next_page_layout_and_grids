import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
  <div>
  <HeaderLayout/>
  <Layout>
  <body>
  <header className="masthead">
    <div className="wrapper">
      <h1>Important News</h1>

    </div>
  </header>

  <nav role="navigation" className="navbar">
    <div className="wrapper">
      <ul className="navlist">
        <li><a href="#">Home</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Sports</a></li>
      </ul>
    </div>
  </nav>
  
  <main className="wrapper">
    <section className="subcategory subcategory-a">
      <div className="grid-a">
        <header className="subcategory-header">
          <h2>Lorem ipsum</h2>
        </header>

        <article className="story story-featured">
          <img src="http://placehold.it/600x300" alt="Dummy image"/>
          <h3><a href="#">Cras suscipit nec leo id.</a></h3>
          <p>Autem repudiandae aliquid tempora quos reprehenderit architecto, sequi repellat.</p>
        </article>

        <article className="story">
          <img src="http://placehold.it/600x300" alt="Dummy image"/>
          <h3><a href="#">Perferendis, ipsam!</a></h3>
          <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
        </article>

        <article className="story">
          <img src="http://placehold.it/600x300" alt="Dummy image"/>
          <h3><a href="#">Curabitur mattis purus nec velit.</a></h3>
          <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
        </article>

        <article className="story">
          <h3><a href="#">Perferendis, ipsam!</a></h3>
        </article>

        <article className="story">
          <h3><a href="#">Aliquam mattis eros id posuere.</a></h3>
        </article>

        <article className="story">
          <h3><a href="#">Proin leo felis, semper nec</a></h3>
        </article>

        <article className="story">
          <h3><a href="#">Aliquam vitae risus tortor. Sed!</a></h3>
        </article>
        <article className="story">
          <h3><a href="#">Perferendis, ipsam!</a></h3>
        </article>

        <article className="story">
          <h3><a href="#">Aliquam mattis eros id posuere.</a></h3>
        </article>

        <article className="story">
          <h3><a href="#">Proin leo felis, semper nec</a></h3>
        </article>

        <article className="story">
          <h3><a href="#">Aliquam vitae risus tortor. Sed!</a></h3>
        </article>
      </div>
    </section>
  </main>    
</body>

    <style jsx>{`

/* content styling */

.grid-a {
  display: -webkit-grid;
  display: grid;
  -webkit-grid-template-rows: auto auto auto;
          grid-template-rows: auto auto auto;
  -webkit-grid-template-columns: repeat(5, 1fr);
          grid-template-columns: repeat(5, 1fr);
  margin: 0 -.6875em;
}

.subcategory {
  margin-top: 1.5em;
  border-bottom: 1px solid #8e3339;
}

.subcategory-header {
  padding: .6875em;
  -webkit-grid-row: 1/-1;
          grid-row: 1/-1;
}
.story:nth-of-type(2),
.story:nth-of-type(3) {
  -webkit-order: -2;
          order: -2;
}

.story-featured {
  -webkit-order: -1;
          order: -1;
  -webkit-grid-column: span 2;
          grid-column: span 2;
}

.story {
  padding: .6875em;
  margin: 0 .6875em 1.375em;
  background-color: #eee;
}
.story img {
  /* width: 100%; */
  max-width: 100%;
}

`}</style>

  </Layout>
  </div>
)