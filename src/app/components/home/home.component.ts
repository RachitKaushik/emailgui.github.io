import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private snack:MatSnackBar){} // MatSnackBar is a service which can be opened by the snack variable
  //snack is a service(MatSnackBar) variable


  btnclick()
  {
    console.log("btn click");
    this.snack.open("Hey welcome to this app","Cancel")  //here snak is refered to as MatSnackBar , open is a inbuild fxn
  }

}
