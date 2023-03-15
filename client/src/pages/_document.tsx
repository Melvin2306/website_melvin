import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

// Chakra UI
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <Link rel="icon" href="client/public/favion.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
