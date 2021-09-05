
export class myData {

    private _tal: string;
    public get tal(): string {
        return this._tal;
    }
    public set tal(v: string) {
        this._tal = v;
    }

    private _talNr : number;
    public get talNr() : number {
        return this._talNr;
    }
    public set talNr(v : number) {
        this._talNr = v;
        
    }

    
}