export class Flight {

    public Num: string;
    public From: string;
    public To: string;
    public From_date: Date;
    public To_date: Date;
    public Plane: string;
    public Duration: number;
    public From_gate: number;
    public To_gate: number;

    constructor(num: string, from: string, to: string, from_date: Date, to_date: Date, plane: string, duration: number, from_gate: number, to_gate: number) {
        this.Num = num;
        this.From = from;
        this.To = to;
        this.From_date = from_date;
        this.To_date = to_date;
        this.Plane = plane;
        this.Duration = duration;
        this.From_gate = from_gate;
        this.To_gate = to_gate;
    }

}
