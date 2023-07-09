import List from "../components/List";
import Link from "next/link";
import { vehicleModelStore } from "@/stores/VehicleStore";
import { useRouter } from "next/router";

export default function Home(){

  const page = useRouter();
  
  return(
    <>
    <h1>Cars</h1>
    <ul>
    <li><Link href={`manufacturers/1`}>Manufacturers</Link></li>
    </ul>
    <List store={vehicleModelStore} page={page.query.page}></List>
    </>
  )
}