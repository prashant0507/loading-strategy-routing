import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Getting data which is send by Router.navigate()
    let prevRoute = this.route.snapshot.paramMap.get('prevRoute');
    console.log('prevRoute using route.snapshot', prevRoute);

    // Getting data which is send by router.navigate()
    let prevRoute1 = this.route.snapshot.params['prevRoute'];
    console.log('prevRoute using route.snapshot.params', prevRoute1);

    // Getting data which is send by Router.navigate()
    // it will get complete object : {prevRoute: 'login', city: 'Gwalior'}
    this.route.params.subscribe((params:any) => {
      console.log('prevRoute using route.params', params)
    })

    // Getting data which is send by routing file
    this.route.data.subscribe((params:any) => {
      console.log('prevRoute using route.data', params)
    })
  }

  navigateToSignup() {
    this.router.navigate(['account/signup', { prevRoute: 'login', city: 'Gwalior' }]);
  }

}
