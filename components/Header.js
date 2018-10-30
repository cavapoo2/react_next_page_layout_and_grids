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
    <Link href="/contentWrapper">
      <a style={linkStyle}>ConentWrapper</a>
    </Link>
    <Link href="/floatColumnsWholeGrid">
      <a style={linkStyle}>floatColumnWholeGrid</a>
    </Link>
    <Link href="/flexboxColumnsEqualHeight">
      <a style={linkStyle}>flexboxColumnsEqualHeight</a>
    </Link>



    <style jsx> {`
   display: inline-block;
   padding: 0.25em;
   `}</style>
  </div>
)

export default Header