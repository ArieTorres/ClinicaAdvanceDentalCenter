import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlianzaUserComponent } from './alianza-user/alianza-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PpSsComponent } from './pp-ss/pp-ss.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'pp-ss', component: PpSsComponent },
  { path: 'alianza-de-usuarios', component: AlianzaUserComponent },
  { path: '**', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {    }
