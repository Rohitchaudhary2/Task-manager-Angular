import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { SelecetedUser } from './app.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selecteduser?: SelecetedUser

  user = output<SelecetedUser>()

  onSelectUser(id: string) {
    const user = this.users.filter(user => user.id === id)
    if(user){

      this.selecteduser = {name: user[0].name, id}
      // console.log(this.selecteduser)
    }

  }
}
