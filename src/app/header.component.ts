import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  constructor(){}
  ngOnInit(){
    
  }
}
