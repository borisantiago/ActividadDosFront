import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public open_cart = false;

  open_modal_cart(){
  if(!this.open_cart){
    this.open_cart = true;
    $('#cart').addClass('show');
  }else{
    this.open_cart = false;
    $('#cart').removeClass('show');
  }
  }

}



