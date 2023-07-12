import List from "../components/List";
import Link from "next/link";
import { vehicleModelStore } from "../stores/VehicleStore";
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home(){
  const router = useRouter();
 useEffect(()=>{router.push('/1')},[]) 
  return
}
