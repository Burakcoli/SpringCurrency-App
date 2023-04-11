import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: String = "";
  password: String = "";

  errorMessages:String[] = [];

  constructor(private http:HttpClient, private dialog:MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>){}

  openLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  CloseDialog(){
    this.dialogRef.close();
  }

  login(){

    this.errorMessages = [];
    if (this.username.length < 5){
      this.errorMessages.push("Username can not be shorter than 5 characters.");
    }
    if (this.password.length < 5){
      this.errorMessages.push("Password can not be shorter than 5 characters.");
    }

    if (this.errorMessages.length > 0){
      return;
    }

    this.http.post("http://localhost:8080/user/login", {username:this.username, password:this.password}).subscribe(
      {
        next: (res) => {
          console.log(res);
          sessionStorage.setItem("loggedIn", 'true');
          this.dialogRef.close();
        },
        error: (error) => {
          console.log(error.error);
          this.errorMessages.push(error.error);
        }
      }
    )
  }
}
