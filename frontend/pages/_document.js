import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inria%20Sans&display=swap"
          />
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter&display=swap"
          /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
