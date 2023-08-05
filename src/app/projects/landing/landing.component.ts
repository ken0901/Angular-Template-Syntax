import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 *  # Where to place Services
 *  
 *  1. Local  - In same module they are used in
 *     Global - In the module that they most make sense to pair with
 * 
 *  2. Local  - In same module they are used in
 *     Global - In the app module
 * 
 *  3. Local  - In same module they are used in
 *     Global - In a 'core' module
 * 
 *  4. Everything  - All services in a 'core' module
 *     
 * 
 *  5. Everything  - All services in the 'app' module
 *     
 */
