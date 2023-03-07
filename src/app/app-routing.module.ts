import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  
  { path: '', component: PhoneListComponent},
  { path: 'phone-details/:id', component: PhoneDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
