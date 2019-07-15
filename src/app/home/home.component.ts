import { Component, ViewChild, ElementRef , Renderer2,OnInit} from '@angular/core';
import { UserPreference } from '../services/userPreference.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

@ViewChild('color') inputColor : ElementRef  


 
private userPreferenceService : UserPreference

constructor(private renderer : Renderer2) {
  this.userPreferenceService = new UserPreference()
  console.log('New userPreference Instance is created')
}

ngOnInit() {
  const color = this.userPreferenceService.color
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',color)
  //this.renderer.setStyle(this.inputColor.nativeElement,'color',color)
}

onChange() {
  
  const newColor = this.inputColor.nativeElement.value
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',newColor)
  //this.renderer.setStyle(this.inputColor.nativeElement,'color',newColor)
  this.userPreferenceService.color = newColor
}

}


/* 

We have userpreference service where color is initialized to blue.
Now we have two routes , Home & Users 

We have a constructor in HomeComponent, where we have created a new instance of the userPreference service.
Inorder to set the dom properties , we need to use renderer2. Nerver set dom properties  using only native element

*/