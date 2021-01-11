import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  options: Option[] = [
    {value: 'option-0', viewValue: 'Checking Account'},
    {value: 'option-1', viewValue: 'Savings Account'},
    {value: 'option-2', viewValue: 'Investment Account'}
  ];

}
