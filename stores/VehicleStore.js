import VehicleService from '@/common/VehicleService';
import AddModel from '@/components/addModel';
import { runInAction,decorate, observable, makeObservable } from 'mobx'





class VehicleStore {
   result={
    item: []
   };
   all=[];
   pages=[];
   page='?page=1';
   form='';

    searchQuery="";
     status="initial";
     vehicleSchema;

    constructor(vehicleSchema){
        this.vehicleService = new VehicleService(vehicleSchema)
        this.vehicleSchema = vehicleSchema

        makeObservable(this,{
            result: observable,
            page: observable,
            form: observable,
            all: observable
        })
    }

    toggleForm=()=>{
      if(!this.form){
        
        runInAction(()=>{
            this.form = <AddModel store={new VehicleStore(this.vehicleSchema)}></AddModel>
        })
      } else {
        runInAction(()=>{
            this.form = ''
        })
      }
        
        
    }

    setPage(num){
        if (num){
      runInAction(()=>this.page = `?page=${num}`)
        } else return

    }

    getPagesArray=()=>{
        let pagesArr = [];
        const pageNum =this.result.totalRecords
        for (let i = 1; i<=Math.ceil(pageNum/10); i++){
            pagesArr.push(i)
        }
        return pagesArr
    }
    getAsync= async()=>{
         const urlParams = this.page;
       const data = await this.vehicleService.get(urlParams)
         
            runInAction(()=>{
            this.result = data;
           if (this.result.totalRecords) {
              this.pages =  this.getPagesArray()
            } 
        })
    
    }

    getAll= async()=>{
        runInAction(()=>{
            this.all=[]

        })
        
        this.pages.map(async(page)=>{
          const data= await  this.vehicleService.get(`?page=${page}`)
                   runInAction(()=>{
            this.all.push(...data.item);
           })             
        })
    }
        
 

 createAsync = async (make) => {
     try {
         const response = await this.vehicleService.post(make);
         if (response.status === 201) {
             runInAction(() => {
                 this.status = "success";
             })
         } 
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }

 };
 updateAsync = async (make) => {
     try {
         const response = await this.vehicleService.put(make)
         if (response.status === 200) {
             runInAction(() => {
                 this.status = "success";
             })
         } 
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
 };
 deleteAsync = async (id) => {
     try {
         const response = await this.vehicleService.delete(id);
         if (response.status === 204) {
             runInAction(() => {
                 this.status = "success";
             })
         } 
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
 }



}

 const vehicleMakeStore = new VehicleStore('vehicleMake')
 const vehicleModelStore = new VehicleStore('vehicleModel')
 export {vehicleMakeStore, vehicleModelStore}
