import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent { 
  name = 'Accounts';

  private selectedOptions: string;

  options = [
    {name: "Checking Account", value: 1},
    {name: "Savings Account", value: 2},
    {name: "Investment Account", value: 3},
  ]
}














  // @Output() public sidenavToggle = new EventEmitter();

  // constructor() { }

  // ngOnInit(): void {
  // }

  // account: any = [
  //   {
  //     full: "Checking Account",
  //     short: "Checkings"
  //   },
  //   {
  //     full: "Savings Account",
  //     short: "Savings"
  //   },
  //   {
  //     full: "Investment Account",
  //     short: "Investment"
  //   }
    
  // ];
  // selectedAccount: string = "Checkings";

  // selectedAccountControl = new FormControl(this.selectedAccount);

  // public onToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  // }

// }
