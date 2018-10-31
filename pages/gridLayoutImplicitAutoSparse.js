import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
  <div>
  <HeaderLayout/>
  <Layout>
  <body>
  <div className="wrapper">
    <main>
      <div className="subsection">
        <ul className="grid-auto-rows">
          <li className="story">
            <h3><a href="#">Story 1</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 2</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 3</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 4</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 5</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 6</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 7</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 8</a></h3>
          </li>

          <li className="story">
            <h3><a href="#">Story 9</a></h3>
          </li>
        </ul>
      </div>
    </main>
  </div>

</body>

    <style jsx>{`
  /**
  * 1. The grid has only one auto-sized row.
  * 2. We can use the repeat()-function for sequences of same-size tracks.
  * 3. By default, grids outside of the defined grid end up in auto-created
  *    tracks. This is called the implicit grid.
  * 4. The auto-rows are sized with grid-auto-rows: the default value is "auto".
  */
  .grid-auto-rows {
    list-style: none;
    padding: 0;
    display: -webkit-grid;
    display: grid;
    -webkit-grid-template-rows: auto; /* 1 */
            grid-template-rows: auto; /* 1 */
    -webkit-grid-template-columns: repeat(5, 1fr); /* 2 */
            grid-template-columns: repeat(5, 1fr); /* 2 */
    /* grid-auto-flow: row; - this is implied. */ /* 3 */
    /* grid-auto-rows: auto; - this is implied */ /* 4 */
    margin: 1.5em -.6875em;
  }

  /* some stories with different spans */

  .story:nth-child(1),
  .story:nth-child(2) {
    -webkit-grid-column: span 3;
            grid-column: span 3;
  }

  .story:nth-child(4) {
    -webkit-grid-column: span 2;
            grid-column: span 2;
  }

  .story {
    padding: .6875em;
    margin: 0 .6875em 1.375em;
    background-color: #eee;
  }

`}</style>

  </Layout>
  </div>
)