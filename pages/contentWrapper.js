import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
    <div>
        <HeaderLayout />
        <Layout>
            <body>
                <div className="wrapper">
                    <h1>My page</h1>
                </div>
            </body>

            <style jsx>{`
    body {
      margin: 0;
     
    }
    .wrapper {
      width: 95%;
      max-width: 76em;
      margin: 0 auto;
      background-color: #ccc;
      min-height: 300px;
    }
  `}</style>

        </Layout>
    </div>
)