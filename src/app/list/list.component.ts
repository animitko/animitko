import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice.service';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-list',
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // fixed property name: "styleUrl" → "styleUrls"
})
export class ListComponent implements OnInit {

  allUsers: any[] = []; // This array will hold all user data

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().then(users => {
      this.allUsers = users;
    });
  }
  copyInvitationLink(userId: string): void {
    const url = `${window.location.origin}/invitation/${userId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Поканата е копирана успешно!');
    }).catch(err => {
      console.error('Грешка при копиране:', err);
    });
  }
  
}
