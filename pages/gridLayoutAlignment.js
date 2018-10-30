import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
  <div>
  <HeaderLayout/>
  <Layout>
  <body>
  <div className="grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>

  <div className="grid grid-end">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="grid grid-center">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="grid grid-space-between">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="grid grid-space-around">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div className="grid grid-space-evenly">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>

    <style jsx>{`
  body {
    padding: 2em;
  }
  .grid {
    display: -webkit-grid;
    display: grid;
    height: 100px;
    margin-bottom: 4em;
    outline: 2px dashed #666;
    width: 500px;
    -webkit-grid-template-rows: 100px;
            grid-template-rows: 100px;
    -webkit-grid-template-columns: repeat(8, 50px);
            grid-template-columns: repeat(8, 50px);
    justify-content: start; /* implied, default */
  }
  .grid-end {
    -webkit-justify-content: end;
            justify-content: end;
  }
  .grid-center {
    -webkit-justify-content: center;
            justify-content: center;
  }
  .grid-space-between {
    -webkit-justify-content: space-between;
            justify-content: space-between;
  }
  .grid-space-around {
    -webkit-justify-content: space-around;
            justify-content: space-around;
  }
  .grid-space-evenly {
    -webkit-justify-content: space-evenly;
            justify-content: space-evenly;
  }
  .grid > * {
    outline: 1px solid #fff;
    background-color: #ccc;
  }

`}</style>

  </Layout>
  </div>
)