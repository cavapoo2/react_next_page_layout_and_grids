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

      <section className="subcategory">
        <div className="row">
          <header className="col subcategory-header">
            <h2>Lorem ipsum</h2>
          </header>
          <div className="col subcategory-content">
            <div className="row row-quartet">
              <div className="col subcategory-featured">
                <article className="story">
                  <img src="http://placehold.it/600x300" alt="Dummy image"/>
                  <h3><a href="#">Cras suscipit nec leo id.</a></h3>
                  <p>Autem repudiandae aliquid tempora quos reprehenderit architecto, sequi repellat.</p>
                </article>
              </div>
              <div className="col">
                <article className="story">
                  <img src="http://placehold.it/600x300" alt="Dummy image"/>
                  <h3><a href="#">Perferendis, ipsam!</a></h3>
                  <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
                </article>
              </div>
              <div className="col">
                <article className="story">
                  <img src="http://placehold.it/600x300" alt="Dummy image"/>
                  <h3><a href="#">Curabitur mattis purus nec velit.</a></h3>
                  <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
                </article>
              </div>
            </div>
            <ul className="row row-quartet row-wrapping">
              <li className="col">
                <div className="story">
                  <h3><a href="#">Perferendis, ipsam! Dolor sit amet consectetur</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Aliquam mattis eros id posuere.</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Proin leo felis, semper nec</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Aliquam vitae risus tortor. Sed!</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Perferendis, ipsam!</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Aliquam mattis eros id posuere.</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Proin leo felis, semper nec</a></h3>
                </div>
              </li>
              <li className="col">
                <div className="story">
                  <h3><a href="#">Aliquam vitae risus tortor. Sed!</a></h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="subcategory">
        <div className="row">
          <header className="col subcategory-header">
            <h2>Dolor sit amet</h2>
          </header>
          <div className="col subcategory-content">
            <div className="row row-trio">
              <div className="col">
                <article className="story">
                  <img src="http://placehold.it/600x300" alt="Dummy image"/>
                  <h3><a href="#">Ut sit amet mi massa</a></h3>
                  <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
                </article>
              </div>
              <div className="col">
                <article className="story">
                  <h3><a href="#">Nunc mollis sit amet nunc</a></h3>
                  <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
                </article>
                <article className="story">
                  <h3><a href="#">Duis sed ante enim. Cras</a></h3>
                  <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
                </article>
              </div>
              <div className="col">
                <article className="story">
                  <img src="http://placehold.it/600x300" alt="Dummy image"/>
                  <h3><a href="#">Animi, explicabo, ipsum</a></h3>
                  <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  </body>

    <style jsx> {`

/* grid styling */
.row {
  list-style: none;
  padding: 0;
  margin: 0 -.6875em;
}

.row {
 display:flex-box; 
}
/*
.flexbox .row,
.flexboxtweener .row {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}*/
.row:after {
  content: '';
  display: block;
  clear: both;
}
.row-quartet > * {
  width: 25%;
}
.row-trio > * {
  width: 33.3333%;
}
.row-wrapping {
  font-size: 0;
  margin: 0 -11px;
  margin: 0 -.6875rem;
}
.flexwrap .row-wrapping {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
}
.row-wrapping > .col {
  float: none;
  vertical-align: top;
  display: inline-block;
  font-size: 16px;
  font-size: 1rem;
}
.col {
  float: left;
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  padding: 0 .6875em 1.375em;
}
.flexbox .col,
.flexboxtweener .col {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}
.flexbox .col > *,
.flexboxtweener .col > * {
  -webkit-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1;
}
.col:last-child {
  float: right;
}
/* content styling */

.subcategory {
  margin-top: 1.5em;
  border-bottom: 1px solid #8e3339;
}
.subcategory-featured {
  width: 50%;
}
.subcategory-content {
  width: 80%;
}
.subcategory-header {
  width: 20%;
}

.story {
  padding: .6875em;
  background-color: #eee;
}
.story + .story {
  margin-top: 1.375em;
}
.story img {
  width: 100%;
}

`}</style>

  </Layout>
  </div>
)