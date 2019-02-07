import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store Data to sql-lite-database';

  constructor(private router: Router,
              private storage: Storage
  ) { }

  ngOnInit() {
    this.sqlStorageReadyFn();
  }


  sqlStorageReadyFn(){
    this.storage.ready().then(() => {
    });
  }
}
