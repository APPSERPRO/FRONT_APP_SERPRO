import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcfesModulesListComponent } from './serpro-components/icfes-modules-list/icfes-modules-list.component';
import { ModulesTestListComponent } from './serpro-components/modules-test-list/modules-test-list.component';
import { IcfesTestComponent } from './serpro-components/modules-test-list/icfes-test/icfes-test.component';


const routes: Routes = [
  {path: 'listaModulos', component: IcfesModulesListComponent},
  {path: 'listaTests', component: ModulesTestListComponent},
  {path: 'test', component: IcfesTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
