import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'student',
        children: [
            { path: '', loadChildren: '../member/student/search/search.module#MemberSearchPageModule'},
            { path: 'create', loadChildren: '../member/student/create/create.module#CreatePageModule' }]
      },
      {
        path: 'class',
        children: [{ path: '', loadChildren: '../tab2/tab2.module#Tab2PageModule'}]
      },
      {
        path: 'tab3',
        children: [{path: '', loadChildren: '../tab3/tab3.module#Tab3PageModule'}        ]
      },
      { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
      { path: '', redirectTo: '/tabs/student', pathMatch: 'full' }
    ]
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: '../list/list.module#ListPageModule'
  },
  {
    path: '', redirectTo: '/tabs/student', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
