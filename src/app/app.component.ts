import { Component } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currenyAngular';

  constructor(private dialogService:DialogService){}

  SetSession(){
    if (sessionStorage.getItem('loggedIn') === null){
      sessionStorage.setItem("loggedIn", 'false');
    }
  }

  GetLoggedIn(){
    return sessionStorage.getItem('loggedIn');
  }

  OpenRegisterDialog(){
    this.dialogService.openRegisterDialog();
  }

  OpenLoginDialog(){
    this.dialogService.openLoginDialog();
  }

  ngOnInit(){
    this.SetSession();
    console.log(sessionStorage.getItem('loggedIn'));
  }
}
