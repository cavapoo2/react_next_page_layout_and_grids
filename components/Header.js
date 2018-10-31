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
    <Link href="/gridLayoutAlignment">
      <a style={linkStyle}>gridLayoutAlignment</a>
    </Link>
    <Link href="/gridLayoutAuto">
      <a style={linkStyle}>gridLayoutAuto</a>
    </Link>
    <Link href="/gridLayoutOrder">
      <a style={linkStyle}>gridLayoutOrder</a>
    </Link>
    <Link href="/gridLayoutImplicitAutoSparse">
      <a style={linkStyle}>gridLayoutImplicitAutoSparse</a>
    </Link>
    <Link href="/gridLayoutImplicitAutoDense">
      <a style={linkStyle}>gridLayoutImplicitAutoDense</a>
    </Link>
     <Link href="/gridLayoutTemplate">
      <a style={linkStyle}>gridLayoutTemplate</a>
    </Link>









    <style jsx> {`
   display: inline-block;
   padding: 0.25em;
   `}</style>
  </div>
)

export default Header