import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';

const routes: Routes = [
  {path:'contador', component:ContadorComponentComponent},
  {path:'lista', component:ListItemsComponent},
  {path:'cadastrar', component:FormCadastroComponent},
  {path:'component', component:ComponentePaiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
