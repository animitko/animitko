import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../userservice.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-invitation",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./invitation.component.html",
  styleUrls: ["./invitation.component.css"],
})
export class InvitationComponent implements OnInit {
  public attendance: string = "";
  public guests: number = 2;
  public transport: string = "";
  public menu: string = "";
  public hotel: string = "";
  public message: string = "";
  ngOnInit() {
  }
  constructor(private userService: UserService) {}

  
  // Form submission handler
  public submit() {
    console.log("enterrrrrrrr");
    const userData = {
      attendance: this.attendance,
      guests: this.guests,
      transport: this.transport,
      menu: this.menu,
      hotel: this.hotel,
      message: this.message,
    };
    console.log(userData);
    const userId = new Date().toISOString(); // Example userId (use your own strategy)

    // Save the data to Firestore
    this.userService
      .saveUserData(userId, userData)
      .then(() => {
        alert("Your message has been sent successfully!");
        // Optionally reset the form
        this.resetForm();
      })
      .catch((error) => {
        console.error("Error saving user data: ", error);
      });
  }

  // Reset form fields after submission
  resetForm() {
    this.attendance = "";
    this.guests = 2;
    this.transport = "";
    this.menu = "";
    this.hotel = "";
    this.message = "";
  }
}
