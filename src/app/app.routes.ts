import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  standalone: true,
  template: ''
})
class ExplorePropertiesRedirectComponent implements OnInit {
  ngOnInit(): void {
    window.location.replace('/explore-property.html');
  }
}

export const routes: Routes = [
  {
    path: 'explore-properties',
    component: ExplorePropertiesRedirectComponent
  }
];
