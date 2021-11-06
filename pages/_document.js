//* If blank, It'll cause a server error.
//* Since it's rendered on the server, onclick events don't work.
//* In most cases you wouldn't need to use this,
//* Meta tags can be handled by the </Head>

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
        //* You can now props directly into the html
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument