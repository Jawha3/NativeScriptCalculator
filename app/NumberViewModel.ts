import { Observable } from "@nativescript/core";
import { myData } from "./myData";


export class NumberViewModel extends Observable {

    constructor() {
        super();
    }

    private _tal1: string;
    public get tal1(): string {
        return this._tal1;
    }

    public set tal1(v: string) {
        this._tal1 = v;
        this.notifyPropertyChange("tal1", v)

    }

    private _tal2: string;
    public get tal2(): string {
        return this._tal2;
    }

    public set tal2(v: string) {
        this._tal2 = v;
        this.notifyPropertyChange("tal2", v)
    }

    private _result: number;
    public get result(): number {
        return this._result;
    }

    public set result(v: number) {
        this._result = v;
        this.notifyPropertyChange("result", v)
    }

    
    private _hvilketTal : number;
    public get hvilketTal() : number {
        return this._hvilketTal;
    }
    public set hvilketTal(v : number) {
        this._hvilketTal = v;
        this.notifyPropertyChange("hvilketTal", v)
    }

    goFetchFirst() {

        this.hvilketTal = 1
    }

    goFetchSecond() {
        this.hvilketTal = 2
    }


    onAdd() {

        this.result = parseInt(this.tal1) + parseInt(this.tal2)
    
    }

    onSubtract() {

        this.result = parseInt(this.tal1) - parseInt(this.tal2)
    
    }

    onMultiply() {

        this.result = parseInt(this.tal1) * parseInt(this.tal2)
    
    }

    onDivide() {

        this.result = parseInt(this.tal1) / parseInt(this.tal2)
    
    }
}
