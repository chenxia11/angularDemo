import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
// 组件
import { LayoutComponent } from './components/layout/layout.component';
import { Children1Component } from './demo/children1/children1.component';
import { Children2Component } from './demo/children2/children2.component';
import { Children3Component } from './demo/children3/children3.component';
import { Children4Component } from './demo/children4/children4.component';
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: '', redirectTo: '/index', pathMatch: 'full'},
      {
        path: 'children1',
        component:Children1Component
      },
      {
        path: 'children2',
        component:Children2Component
      },
      {
        path: 'children3',
        component:Children3Component
      },
      {
        path: 'children4',
        component:Children4Component
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false, // 使用history路由
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules // 开启预加载
    })
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
