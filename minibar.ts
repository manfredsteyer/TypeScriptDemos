/**
 * Created by steyer on 01.03.2016.
 */

export interface IMiniBar {
    betrag: number;
    entnehmen(anzahl: number)
    bezahlen();
}

export class MiniBar /* implements IMiniBar */ {

    protected _betrag: number;

    constructor() {
        this._betrag = 0;
        this.entnommen = (anzahl) => {}
    }

    public entnommen: (anzahl: number) => void;

    public entnehmen(anzahl: number) {
        this._betrag += anzahl * 3;
        this.entnommen(anzahl);
    }

    public bezahlen() {
        console.debug("Betrag bezahlt!");
        this._betrag = 0;
    }

    public get betrag(): number {
        return this._betrag;
    }
}

export class QuotaMinibar extends MiniBar {

    constructor(private quota: number) {
        super();
    }

    public entnehmen(anzahl: number) {


        var neuerBetrag = this._betrag + anzahl * 3;
        if (neuerBetrag > this.quota) {
            throw new Error("Quota überschritten");
        }
        super.entnehmen(anzahl);
    }

}


