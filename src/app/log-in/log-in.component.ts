import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../servises/users/users.service';
import { LocalStorgeService } from '../servises/localstorge/local-storge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private UsersService: UsersService,
    private LocalStorgeService: LocalStorgeService,
    private router: Router
  ) {}

  profileForm = this.fb.group({
    password: ['', [Validators.required]],
    email: ['test', [Validators.required]],
  });

  ngOnInit(): void {}

  valid = '';
  submiting() {
    this.UsersService.login(this.profileForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.LocalStorgeService.saveUserdata(data);
        this.router.navigate(['/']);
      },
      error: (err) => {
        if (err.status == 401) {
          this.valid = 'your password is wrong';
        } else if (err.status == 404) {
          this.valid = 'you must sign up frist';
        }
      },
    });
  }
}
