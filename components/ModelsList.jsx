import { observer } from "mobx-react"
import ModelsListItem from "./ModelsListItem"
import Link from "next/link";
import React from "react";

import { vehicleMakeStore, vehicleModelStore } from "../stores/VehicleStore";
import Sort from "./Sort";

class ModelsList extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
       if (window.location.href.match(/manufacturers/g)){
            this.store = vehicleMakeStore;
       } else {
           this.store = vehicleModelStore 
       }
       this.store.setPage(window.location.href.match(/\d+$/g))
    }

    componentDidUpdate(){
        if (window.location.href.match(/manufacturers/g)){
            this.store.setPage(window.location.href.match(/\d+$/g))
            this.store.getAsync()
        } else {
            this.store.setPage(window.location.href.match(/\d+$/g))
        this.store.getAsync()
        }
    }

    

 render(){
if (!this.store) return <div>Loading...</div>
console.log(this.store.result)
    return (
        <div>
            <Sort store={this.store}></Sort>
            <ol>{this.store.result.item.map((item)=>{
            return (<ModelsListItem
                        item={item} 
                        key={item.id} 
                        model={this.store.vehicleSchema}
                        store={this.store}
                    ></ModelsListItem>)
            })
            }
            </ol>
            <div>{this.store.pages.map((page)=>{ 
                return <Link href={{pathname:'/manufacturers/[page]',
                query:{page: page}}} passHref={true} key={page}>{page}</Link>
                })}
            </div>
            <button onClick={()=>{this.store.toggleForm(undefined,this.store)}}></button>
           {this.store.form}
        </div>
    )
            }
}

export default observer(ModelsList)
