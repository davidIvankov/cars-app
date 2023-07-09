import ModelsList from "@/components/ModelsList";
import Link from "next/link";

export default function Home(){
  return(
    <>
    <h1>Manufacturers</h1>
    <ul>
    <li><Link href='/'>Home</Link></li>
    </ul>
    <ModelsList ></ModelsList>
    </>
  )
}