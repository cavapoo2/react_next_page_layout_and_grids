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
          <h2>Sub-section 1</h2>
        </header>
        <div className="col subcategory-content">
          <div className="row row-quartet">
            <div className="col subcategory-featured">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
          </div>
          <div className="row row-quartet">
            <div className="col">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="subcategory">
      <div className="row">
        <header className="col subcategory-header">
          <h2>Sub-section 1</h2>
        </header>

        <div className="col subcategory-content">
          <div className="row row-trio">
            <div className="col">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
            <div className="col">
              <h3>Story</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>    
</body>

    <style>{`
  /* our grid styles: */
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
  .col {
    float: left;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
    min-height: 100px;
    outline: 1px solid #666;
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
`}</style>

  </Layout>
  </div>
)