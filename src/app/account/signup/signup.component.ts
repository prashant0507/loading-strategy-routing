import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { 
    // Getting data which is send by router.navigate()
    let prevRoute = this.route.snapshot.paramMap.get('prevRoute');
    console.log('prevRoute using route.snapshot.paramMap', prevRoute);

    // Getting data which is send by router.navigate()
    let prevRoute1 = this.route.snapshot.params['prevRoute'];
    console.log('prevRoute using route.snapshot.params', prevRoute1);

    // Getting data which is send by router.navigate()
    // it will get complete object : {prevRoute: 'login', city: 'Gwalior'}
    this.route.params.subscribe((params:any) => {
      console.log('prevRoute using route.params', params)
    })

    // Getting data which is send by routing file
    this.route.data.subscribe((params:any) => {
      console.log('prevRoute using route.data', params);
    })
  }

  navigateToSignin() {
    this.router.navigate(['account/login', { prevRoute: 'signup', city: 'Seondha' }]);
  }

}
