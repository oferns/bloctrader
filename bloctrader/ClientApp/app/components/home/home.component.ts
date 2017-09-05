import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    routeLinks: any[];
    activeLinkIndex = 0;
    constructor(private router: Router) {
        this.routeLinks = [
            { label: 'Welcome', link: 'welcome' },
            { label: 'Home', link: 'home' }];

    }
}
