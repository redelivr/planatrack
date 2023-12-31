import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {



  public loggedIn?: Boolean;

  constructor(private authservice: AuthService, private router: Router) {

    this.authservice.isAuth().subscribe((authed) => {
      this.loggedIn = authed;
      console.log(this.loggedIn);

      if(this.loggedIn != true) {
        this.router.navigate(['/menu/login']);
      }
    })


  }


  ngOnInit() {




  }

  signOut() {
    this.authservice.logout();

    setTimeout(() => {
      this.router.navigate(['/menu/login']);
    }, 500);
  }

  goToLink(link: string) {
    this.router.navigate([link]);
  }
}
