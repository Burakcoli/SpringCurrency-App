import { Injectable } from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(private dialog: MatDialog){}

    openRegisterDialog(){
        const dialogRef = this.dialog.open(RegisterComponent);

        dialogRef.afterClosed().subscribe({
            next: (result) => {
                console.log(result);
            }
        })
    }

    openLoginDialog(){
        const dialogRef = this.dialog.open(LoginComponent);

        dialogRef.afterClosed().subscribe({
            next: (result) => {
                console.log(result);
            }
        })
    }
}