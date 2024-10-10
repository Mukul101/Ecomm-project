import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

constructor(private seller:SellerService) {}
  signUp(data:object): void{
    console.log(data);
    this.seller.userSignUp(data).subscribe((result) => {
      console.warn(result);

    });

  }
}
