import { Injectable } from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    public authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeaderString = this.authService.getAuthenticationToken();
    if (authHeaderString){
      // @ts-ignore
      req = req.clone({
        setHeaders: {
          Auth: authHeaderString
        }
      });
    }
    if (!req.headers.has('Content-Type')) {

      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    // @ts-ignore
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(`event--->>> ${event}`);
        }
        return event;
      })
    );
  }
}
