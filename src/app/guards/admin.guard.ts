import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const usuario = sessionStorage.getItem("usuario");
        const json = usuario ? JSON.parse(usuario) : null;

        if (!json || json.perfil !== 'Administrador') {
            this.router.navigate(['/pages/dashboard']);
            return false;
        }

        return true;
    }

}
