import { Heading } from "@chakra-ui/react"
import React from "react"
import ContactForm from "../components/website/ContactForm"
import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";

function ContactPage() {
    return (
        <>

            <Navbar />

            <div className="grid grid-cols-4">

                <div className="col-start-2 col-span-3">

                    <Heading as="h1" size="2xl" textAlign="left" mt="10">
                        Contact Us
                    </Heading>

                    <br />
                    <br />

                    <ContactForm />

                </div>

            </div>

            <Footer />

        </>
    )
}
export default ContactPage