import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invitation',
  imports: [FormsModule],
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.css'
})
export class InvitationComponent {
  
  public attendance: string = '';
  public guests: number = 2;
  public transport: string = '';
  public menu: string = '';
  public hotel: string = '';
  public message: string = '';

  constructor(private userService: UserService) {}

  // Form submission handler
  onSubmit() {
    const userData = {
      attendance: this.attendance,
      guests: this.guests,
      transport: this.transport,
      menu: this.menu,
      hotel: this.hotel,
      message: this.message
    };

    const userId = new Date().toISOString(); // Example userId (use your own strategy)
    
    // Save the data to Firestore
    this.userService.saveUserData(userId, userData)
      .then(() => {
        alert('Your message has been sent successfully!');
        // Optionally reset the form
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error saving user data: ', error);
      });
  }

  // Reset form fields after submission
  resetForm() {
    this.attendance = '';
    this.guests = 2;
    this.transport = '';
    this.menu = '';
    this.hotel = '';
    this.message = '';
  }
}
