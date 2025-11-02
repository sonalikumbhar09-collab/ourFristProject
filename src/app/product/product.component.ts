
import { Component } from "@angular/core";

@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls :['./product.component.scss']

})
export class ProductComponent{
  public productName: string ='Samsung M31'
  public productId :string = 's-4567';

  userInfo = {
    fname : "Jhon",
    lname : "Doe",
    nativePlace : "pune",
    profile : 'Full Stack Developer'
  }

  skills : Array<string> = ["Apple", "Vivo", "Oppo", "Realme"]
}