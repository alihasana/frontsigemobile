import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'member',
        children: [
            { path: '', loadChildren: '../member/search/search.module#MemberSearchPageModule'},
            { path: 'student_create', loadChildren: '../member/create/create.module#CreatePageModule' }]
      },
      {
        path: 'class',
        children: [{ path: '', loadChildren: '../tab2/tab2.module#Tab2PageModule'}]
      },
      {
        path: 'tab3',
        children: [{path: '', loadChildren: '../tab3/tab3.module#Tab3PageModule'}        ]
      },
      { path: 'setting', loadChildren: '../setting/setting.module#SettingPageModule' },
      { path: '', redirectTo: '/tabs/member', pathMatch: 'full' }
    ]
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginPageModule'
  },
  {
    path: '', redirectTo: '/tabs/member', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
