import ModelsList from "../components/ModelsList";
import Link from "next/link";

export default function Home(){
  
  return(
    <>
    <h1>Cars</h1>
    <ul>
    <li><Link href={`manufacturers/1`}>Manufacturers</Link></li>
    </ul>
    <ModelsList></ModelsList>
    </>
  )
}