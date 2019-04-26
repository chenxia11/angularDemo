# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## angular&&Rxjs踩过的那些坑

* http请求和统一数据处理[拦截器](./src/app/services/default.interceptor.ts)


* 状态管理
   >>1.[ExpressionChangedAfterItHasBeenCheckedError](https://segmentfault.com/a/1190000013972657)
   
   >>2.[无法获取初始值](https://cn.rx.js.org/manual/overview.html#h26)

   >>3.扩展 （Angular组件之间的3种通信方式组建）
        
        [将一个组件的引用传递给另一个组件](https://stackblitz.com/edit/angular-communication-1)
           
        [通过父组件进行通信](https://stackblitz.com/edit/angular-communication-2)
            
        [通过服务沟通](https://stackblitz.com/edit/angular-communication-3)

* Rxjs
  
   >> 报错后无法继续更新 需要重新订阅
