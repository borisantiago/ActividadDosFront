import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  public user : any= {
    email:'',
    password:''
  };

  constructor(
    private _adminService:AdminService
  ){
  }

  ngOnInit():void{

  }
  
  login(loginForm:any){
    if(loginForm.valid){
      console.log("data", this.user);
      let data = {
        email: this.user.email,
        passworf: this.user.password
      }
      
      this._adminService.login_Admin(data).subscribe(
        response => {
            console.log(response);
        },
        error =>{
          console.log(error);
        }
      )
      
    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
    });
    }
  }

}


