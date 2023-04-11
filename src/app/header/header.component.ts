import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialogService:DialogService){}

  GetLoggedIn(){
    return sessionStorage.getItem('loggedIn');
  }

  OpenRegisterDialog(){
    this.dialogService.openRegisterDialog();
  }

  OpenLoginDialog(){
    this.dialogService.openLoginDialog();
  }

  LogOut(){
    sessionStorage.setItem('loggedIn', 'false');
  }


}
