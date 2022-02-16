import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'x-rapidapi-key': '049e9734a8msh1233a0b011a51b0p125e93jsne4595ad539ee',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
          key: '13cb1df3a61f4d938768db4b4e015e09',
        }
      });
      return next.handle(req);
  }

}