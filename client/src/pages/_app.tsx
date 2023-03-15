import "../styles/globals.css";


// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { useRouter } from "next/router";

const protectedRoutes = ["/dashboard"];

// App component
function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
