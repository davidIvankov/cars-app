import { makeObservable, observable, runInAction } from "mobx";

class MediaQueryStore {
    isActive=false;
    shouldShowInfo=false;

    constructor(){
        makeObservable(this, {
            isActive: observable,
            shouldShowInfo: observable
        })
    }

    setActive=()=>{
        runInAction(()=>{
            this.shouldShowInfo = false
            this.isActive = !this.isActive})
    }
    setShowInfo=()=>{
        runInAction(()=>{
            this.isActive = false
            this.shouldShowInfo = !this.shouldShowInfo})
    }
}
const mediaQueryStore = new MediaQueryStore();
export default mediaQueryStore