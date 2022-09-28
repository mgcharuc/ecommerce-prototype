import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuOpen: boolean = false;
  public cartOpen: boolean = false;
  public addressOpen: boolean = false;
  public address: string = 'Guatemala';

  constructor() { }

  ngOnInit(): void {
  }

  selectedAddress(pAddress: string) {
    this.address = pAddress;
    this.addressOpen = !this.addressOpen;
  }

}
