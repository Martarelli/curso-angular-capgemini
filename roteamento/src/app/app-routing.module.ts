import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

const routes: Routes = [
  {path: "", redirectTo: "primeira-pagina", pathMatch: "full"},
  {path: "primeira-pagina", component: PrimeiraPaginaComponent},
  {path: "segunda-pagina", component: SegundaPaginaComponent},
  {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
