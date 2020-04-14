import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'view',
        component: ViewComponent
    },
    {
        path: 'update',
        component: UpdateComponent
    },
    {
        path: 'delete',
        component: DeleteComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }