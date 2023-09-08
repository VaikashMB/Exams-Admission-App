import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageHallTicketsAdminListComponent } from './manage-hall-tickets-admin-list/manage-hall-tickets-admin-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path: '', component: ManageHallTicketsAdminListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
 
export class ManageHallTicketsRoutingModule { }