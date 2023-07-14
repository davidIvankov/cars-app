import List from "../../components/List";
import { vehicleMakeStore } from "@/stores/VehicleStore";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home(){
  const page= useRouter();
  return(
    <>
      <List store={vehicleMakeStore} page={page.query.page}></List>
    </>
  )
}