import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const usuario = sessionStorage.getItem("usuario");

        if(!usuario) {
            this.router.navigate(['/pages/autenticar-usuario']);
            return false;
        }

        return true;
    }

}