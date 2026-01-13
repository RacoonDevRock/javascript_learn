import './style.css'
import userStore from "./users/store/users-store";
import { UsersApp } from './users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');
UsersApp(element);