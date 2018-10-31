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
  <section className="subcategory row">
    <div className="grid-b">
      <header className="subcategory-header">
        <h2>Dolor sit amet</h2>
      </header>
      <article className="story">
        <img src="http://placehold.it/600x300" alt="Dummy image"/>
        <h3><a href="#">Ut sit amet mi massa</a></h3>
        <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
      </article>

      <article className="story">
        <img src="http://placehold.it/600x300" alt="Dummy image"/>
        <h3><a href="#">Animi, explicabo, ipsum</a></h3>
        <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
      </article>
      <div className="ad">
        <h3><a href="#">Buy more stuff!</a></h3>
      </div>
      <div className="ad">
        <h3><a href="#">Buy other stuff!</a></h3>
      </div>
    </div>
  </section>
</main>
</body>

    <style jsx>{`
  /* content styling */

  .grid-b {
    display: -webkit-grid;
    display: grid;
    -webkit-grid-template-columns: 20% 1fr 1fr 1fr;
            grid-template-columns: 20% 1fr 1fr 1fr;
    -webkit-grid-template-areas: "hd st1 . st2"
                                 "hd st1 . st2";
            grid-template-areas: "hd st1 . st2"
                                 "hd st1 . st2";
    margin: 0 -.6875em;
  }

  .subcategory {
    margin-top: 1.5em;
    border-bottom: 1px solid #8e3339;
  }

  .grid-b .subcategory-header {
    padding: .6875em;
    -webkit-grid-area: hd;
            grid-area: hd;
  }
  .story {
    padding: .6875em;
    margin: 0 .6875em 1.375em;
    background-color: #eee;
    -webkit-grid-template-columns: span 1;
            grid-template-columns: span 1;
  }
  .grid-b .story:nth-child(2) {
    -webkit-grid-area: st1;
            grid-area: st1;
  }
  .grid-b .story:nth-child(3) {
    -webkit-grid-area: st2;
            grid-area: st2;
  }
  .story-featured {
    -webkit-grid-area: a;
            grid-area: a;
  }
  .story img {
    width: 100%;
  }
  .ad {
    padding: .6875em;
    margin: 0 .6875em 1.375em;
    display: flex;
    background-color: #8e3339;
    color: #fff;
  }
/*.ad1 {
  grid-area: ad1;
}
.ad2 {
  grid-area: ad2;
}*/
.ad h3 {
  margin: auto;
}
.ad h3 a {
  color: inherit;
}

`}</style>

  </Layout>
  </div>
)