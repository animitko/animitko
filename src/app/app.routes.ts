import { Routes } from '@angular/router';
import { InvitationComponent } from './invitation/invitation.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'invitation/:id', component: InvitationComponent },
    { path: 'list', component: ListComponent }
];
