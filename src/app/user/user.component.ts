import { Component, computed, input, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

import {User} from './user.model'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  // @Output() select = new EventEmitter()


  user = input.required<User>()
  selected = input.required<boolean>()
  // id = input.required<string>()

  // avatar = input.required<string>()
  // name = input.required<string>()
  select = output<string>() 

  imagePath = computed(() => `/assets/users/${this.user().avatar}`)

  onSelectUser(){
    this.select.emit(this.user().id)
  }
}
