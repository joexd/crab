import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GameLauncherComponent } from './game-launcher/game-launcher.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: 'launcher',
    pathMatch: 'full',
    component: GameLauncherComponent
  },
  {
    path: 'form',
    pathMatch: 'full',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
