import React from "react";
import Image from 'next/image'
import Link from 'next/link'

import pic_melvin from './../../public/pic_melvin.jpg';
import pic_markus from './../../public/pic_markus.jpg';
import pic_zino from './../../public/pic_zino.jpg';


import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";
import { Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12">

        <div className="col-start-3 col-span-8 place-items-left mt-6 mb-6">

          <Heading className="text-4xl mb-2">About</Heading>

          <Text className="mb-2">
            Welcome to Opinio - a product created by three talented software engineering students at Code University Berlin. Our team is passionate about leveraging technology to create products that solve real-world problems, and we are excited to share our vision with you.
          </Text>

          <Text className="mb-2">
            Opinio is a revolutionary tool designed to help companies gain insight into what their employees like or dislike about their internal software tools. We understand that companies rely on a range of software tools to support their operations, from communication tools to project management software, and everything in between. However, it can be challenging to determine whether these tools are meeting employees' needs and expectations.
          </Text>

          <Text className="mb-2">
            That's where Opinio comes in. Our platform allows employees to provide feedback on the software tools they use regularly. This feedback is then aggregated and presented to companies in an easy-to-understand format, allowing them to identify areas for improvement and make informed decisions about their software investments.
          </Text>

          <Text className="mb-2">
            Our team is committed to making Opinio the go-to tool for companies looking to improve their internal software offerings. We are constantly iterating and improving our platform to ensure that it is easy to use and provides valuable insights to our customers.
          </Text>

          <Text className="mb-4">
            Thank you for considering Opinio, and we look forward to helping your company gain valuable insights into your internal software tools.
          </Text>

          <Heading className="text-4xl">Team</Heading>
        </div>

        <div className="col-start-3 col-span-3">
          <Heading className="text-xl">Markus Klepping</Heading>
          <Image alt="Photo Markus Klepping" src={pic_markus} width={150} placeholder="blur" />
          <Text>Lead Designer</Text>
          <Link href="https://www.linkedin.com/in/markus-klepping-5b2377223/">Markus's LinkedIn Profile</Link>
        </div>

        <div className="col-start-6 col-span-3">
          <Heading className="text-xl">Melvin Rinkleff</Heading>
          <Image alt="Photo Melvin Rinkleff" src={pic_melvin} width={150} placeholder="blur" />
          <Text>Procastination King</Text>
          <Link href="https://www.linkedin.com/in/melvin-rinkleff/">Melvin's LinkedIn Profile</Link>
        </div>

        <div className="col-start-9 col-span-3">
          <Heading className="text-xl">Zino Meyer</Heading>
          <Image alt="Photo Zino Meyer" src={pic_zino} width={150} placeholder="blur" />
          <Text>Techno King</Text>
          <Link href="https://www.linkedin.com/in/zinomeyer21/">Zino's LinkedIn Profile</Link>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;
