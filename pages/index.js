import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Message from "./Message";
import NavBar from "./NavBar";
import UserCard from "./UserCard";
import ItemClick from "./ItemClick"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div>
      <Header />
      <NavBar></NavBar>
      <UserCard 
        name='Tien Trung Ngo'
        age={20}
        course={"CPAN144"}
      ></UserCard>
      <Counter></Counter>
      <Message></Message>
      
      <ItemClick></ItemClick>
      
    </div>
  );
}


