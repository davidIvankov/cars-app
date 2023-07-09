import ModelsList from "@/components/ModelsList";
import Link from "next/link";
import { vehicleModelStore } from "../stores/VehicleStore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home(){
  const router = useRouter();
  useEffect(()=>{
    router.push('/1')
  },[])

  return(
    <>
    <h1>Cars</h1>
    <ul>
    <li><Link href='/manufacturers/1'>Manufacturers</Link></li>
    </ul>
    <ModelsList ></ModelsList>
    </>
  )
}
