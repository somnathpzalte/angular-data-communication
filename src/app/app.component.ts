import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';
  userList = [] as any;
  onUserAdded(user:Object){
    this.userList.push(user);
    console.log(this.userList);
  }
  onRemoveUsers(){
    this.userList = [];
  }
}
