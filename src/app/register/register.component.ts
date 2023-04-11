import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: String = "";
  password: String = "";
  confirmPassword: String = "";

  errorMessages:String[] = [];

  constructor(private http:HttpClient, private dialog:MatDialog,
    private dialogRef: MatDialogRef<RegisterComponent>){}

  openRegisterDialog(){
    const dialogRef = this.dialog.open(RegisterComponent);

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

  register(){

    this.errorMessages = [];
    if (this.username.length < 5){
      this.errorMessages.push("Username can not be shorter than 5 characters.");
    }
    if (this.password.length < 5){
      this.errorMessages.push("Password can not be shorter than 5 characters.");
    }
    if (this.password != this.confirmPassword){
      this.errorMessages.push("Passwords don't match.");
    }

    if (this.errorMessages.length > 0){
      return;
    }

    this.http.post("http://localhost:8080/user/register", {username:this.username, password:this.password}).subscribe(
      {
        next: (res) => {
          console.log(res);
          if (res != null || res != undefined){
            sessionStorage.setItem('loggedIn', 'true');
          }
          this.dialogRef.close();
        },
        error: (error) => {
          console.log(error);
          this.errorMessages.push(error.error);
        }
      }
    )
  }
}
