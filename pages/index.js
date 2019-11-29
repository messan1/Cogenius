import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import '../styles/global.css'
const Home = () => (
  <Container>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
  </Container>
);

export default Home;

const Container = styled.div``