import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routong Componetes
import { RegistrationComponent } from './conponents/registration/registration.component';

const routes: Routes = [
	{ path: '', redirectTo:'apply', pathMatch:'full'},
	{ path:'apply', component: RegistrationComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComonets = [
	RegistrationComponent
]