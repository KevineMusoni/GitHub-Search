export class User {
    public showDepositories: boolean;
    constructor(public id: number, public name: string, public depositories: string, public completeDate: Date) {
        this.showDepositories = false;
     }
}
