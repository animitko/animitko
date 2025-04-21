import { Routes } from '@angular/router';
import { InvitationComponent } from './invitation/invitation.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'invitation', component: InvitationComponent },
    { path: 'list', component: ListComponent }
];
