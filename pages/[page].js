import ModelsList from "@/components/ModelsList";
import Link from "next/link";
import { vehicleModelStore } from "@/stores/VehicleStore";
import { useRouter } from "next/router";

export default function Home(){
  const router = useRouter();
  
  return(
    <>
    <h1>Cars</h1>
    <ul>
    <li><Link href={`manufacturers/1`}>Manufacturers</Link></li>
    </ul>
    <ModelsList store={vehicleModelStore} page={router.query.page}></ModelsList>
    </>
  )
}