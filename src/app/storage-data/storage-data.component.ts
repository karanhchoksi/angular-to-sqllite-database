import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-storage-data',
  templateUrl: './storage-data.component.html',
  styleUrls: ['./storage-data.component.scss']
})
export class StorageDataComponent implements OnInit {

  constructor(private router: Router,
              private storage: Storage
  ) { }

  data = [
    {
      name : 'John',
      mobile : '0000011111',
      email : 'john@gmail.com'
    },
    {
      name : 'Sena',
      mobile : '0000022222',
      email : 'sena@gmail.com'
    }
  ];

  user = {
    id: 1,
    mobileNumber: '0000011111',
    mobileCountryCode: '+91',
    firstName: 'John',
    lastName: 'Sena',
    email: 'johnsena@gmail.com'
  };

  userData: any;

  ngOnInit() {
  }


  setDataInSqlStorage(): void {
    this.storage.ready().then(() => {
      this.storage.set('userData', this.user);
    });
  }

  getDatafromSqlStorage(): void {
    this.storage.ready().then(() => {
      this.storage.get('userData').then((val: string) => {
        this.userData = val;
      });
    });
  }

  setArrayData(): void {
    this.storage.ready().then(() => {
      this.storage.set('tempData', this.data);
    });
  }

  getArrayData(): void {
    this.storage.ready().then(() => {
      this.storage.get('tempData').then((val: string) => {
        this.userData = val;
      });
    });
  }

  removeKey(): void {
    this.storage.remove('tempData');
  }
  getkeys() {
    this.storage.keys().then(data => {
      this.userData = data;
    }).catch(err => {

    });
  }

  getStorageSize() {
    this.storage.length().then(result => {
      this.userData = result;
    });
  }
}
