import Link from 'next/link'

const linkStyle = {
  /*  marginRight: 15*/
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <style jsx> {`
   display: inline-block;
   padding: 0.25em;
   `}</style>
  </div>
)

export default Header