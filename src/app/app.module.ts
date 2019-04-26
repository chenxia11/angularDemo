import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
// 拦截器
import { DefaultInterceptor } from './services/default.interceptor';
//服务
import { HttpService } from './services/http.service';
import { GobalService } from './services/gobal.service';
import { Children1Component } from './demo/children1/children1.component';
import { Children2Component } from './demo/children2/children2.component';
import { Children3Component } from './demo/children3/children3.component';
import { Children4Component } from './demo/children4/children4.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Children1Component,
    Children2Component,
    Children3Component,
    Children4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: DefaultInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
