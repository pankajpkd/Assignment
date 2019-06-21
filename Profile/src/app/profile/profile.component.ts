import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbRatingConfig]
})
export class ProfileComponent implements OnInit {
  currentRate = 4;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
  }

  ngOnInit() {
  }

}
