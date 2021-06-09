import {Component, EventEmitter, Output, Input} from '@angular/core'

@Component({
    selector : 'app-user-list',
    templateUrl : './user-list.component.html'
})

export class UserListComponent{
    @Output() removeUsers = new EventEmitter();
    @Input() users = [];
    removeAll(){
        this.removeUsers.emit();
    }
}