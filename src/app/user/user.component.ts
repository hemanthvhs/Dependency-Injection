import { Component, ViewChild, ElementRef , Renderer2,OnInit} from '@angular/core';
import { UserPreference } from '../services/userPreference.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  

@ViewChild('color') inputColor : ElementRef


 
private userPreferenceService : UserPreference

constructor(private renderer : Renderer2) {
  this.userPreferenceService = new UserPreference()
  console.log('New userPreference Instance is created')
}

ngOnInit() {
  const color = this.userPreferenceService.color
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',color)
}

onChange() {
  
  const newColor = this.inputColor.nativeElement.value
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',newColor)
  this.userPreferenceService.color = newColor
}

}







