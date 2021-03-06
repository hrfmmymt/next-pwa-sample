import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#673ab7" />
          <link rel="manifest" href="static/manifest.json" />
          <link
            rel="stylesheet"
            href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
          />
          <title>next-redux-pwa</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
        </body>
      </html>
    )
  }
}
