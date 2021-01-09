import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
// import { AccountHomeComponent } from '../account-home/account-home.component';
// import { UserProfileComponent } from '../user-profile/user-profile.component';
// import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';
// import { CheckingAccountComponent } from '../account-home/checking-account/checking-account.component';
// import { SavingsAccountComponent } from '../account-home/savings-account/savings-account.component';
// import { InvestmentAccountComponent } from '../account-home/investment-account/investment-account.component';
//create routes array
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register-user', component: RegisterUserComponent },
  // { path: 'account-home', component: AccountHomeComponent },
  // { path: 'user-profile', component: UserProfileComponent },
  // { path: 'transaction-history', component: TransactionHistoryComponent },
  // { path: 'checking-account', component: CheckingAccountComponent },
  // { path: 'savings-account', component: SavingsAccountComponent },
  // { path: 'investment-account', component: InvestmentAccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
