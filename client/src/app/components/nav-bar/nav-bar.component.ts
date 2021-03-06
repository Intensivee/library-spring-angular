import {AuthenticationService} from '../../service/security/authentication.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthenticationService,
              private route: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  searchFor(key: string): void {
    this.route.navigate(['search', key]);
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, this.getDialogConfiguration());
  }

  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, this.getDialogConfiguration());
  }

  private getDialogConfiguration(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    return dialogConfig;
  }

  logoutUser(): void {
    this.authService.logout();
  }
}
