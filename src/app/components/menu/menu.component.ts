import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/interfaces/imenu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:IMenuItem[]=[{icon:'bi bi-file-person-fill',name:'קצת עלינו'},{icon:'bi bi-house',name:'בית'},]
  constructor() { }

  ngOnInit(): void {
  }

}
