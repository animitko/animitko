import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {}
  ngOnInit(): void {
   console.log("asdasdasd")
   this.test();
  }
  
  test(){
    console.log("fire")
    const userId = '12345';
    const userData = { name: 'John Doe', age: 30 };

    this.userService.saveUserData(userId, userData)
      .then(() => {
        console.log('User data saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving user data:', error);
      });
      this.userService.getUserData("12345").then((x)=>{
        console.log(x)
      })
    // Example to call getUserData
  }
  title = 'lts';
}
