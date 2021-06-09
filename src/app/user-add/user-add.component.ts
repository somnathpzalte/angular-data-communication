import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    selector : 'app-user-add',
    templateUrl : './user-add.component.html'
})

export class UserAddComponent{
    userName = "";
    userAddress = "";
    @Output() userAdded = new EventEmitter();
    onUserAdd(){
        const user = {
            userName: this.userName,
            userAddress: this.userAddress
        }
        this.userAdded.emit(user);
        this.userName = "";
        this.userAddress = "";
    }
}
