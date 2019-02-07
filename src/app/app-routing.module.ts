import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StorageDataComponent} from './storage-data/storage-data.component';

const routes: Routes = [
  {
    path: '',
    component: StorageDataComponent,
  },
  {
    path: 'storage-data',
    component: StorageDataComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

