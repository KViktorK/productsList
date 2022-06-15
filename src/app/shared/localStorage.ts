import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService{
    get(key:string){
        const value = localStorage.getItem(key)
        return JSON.parse(value)
    }
    set(key:string,value:any){
        localStorage.setItem(key,value)
    }
    remove(key:string){
        localStorage.removeItem(key)
    }
    clear(){
        localStorage.clear()
    }
}