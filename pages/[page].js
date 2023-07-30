import List from "../components/List";
import Link from "next/link";
import { vehicleModelStore } from "@/stores/VehicleStore";
import { useRouter } from "next/router";
import { vehicleMakeStore } from "@/stores/VehicleStore";

export default function Home(){

  const page = useRouter();
  
  return(
    <>
    <List store={vehicleModelStore} make={vehicleMakeStore} page={page.query.page}></List>
    </>
  )
}