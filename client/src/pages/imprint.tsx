import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";

import { Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function imprint_page() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12">
        <div className="col-start-3 col-span-8 place-items-left mt-6 mb-6">
          <Heading className="text-4xl mb-2">Impressum</Heading>

          <Text className="mb-2">
            Melvin Rinkleff
            <br />
            Thomasstraße 75
            <br />
            12053 Berlin
          </Text>

          <Heading className="text-4xl mb-2">Kontakt</Heading>

          <Text className="mb-2">
            Telefon:
            <a className="ml-1 hover:underline" href="tel:+49 (0) 1590 1188669">
              +49 (0) 1590 1188669
            </a>
            <br />
            E-Mail:
            <a
              className="ml-1 hover:underline"
              href="mailto:info@getopinio.com"
            >
              melvin.rinkleff@gmx.de
            </a>
          </Text>

          <Text className="mb-2">
            <a
              className="ml-1 hover:underline"
              href="http://localhost:3000/submit/f90e7bb8-3168-4edd-8898-78cfdd20f55b"
            >
              Test
            </a>
          </Text>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default imprint_page;
