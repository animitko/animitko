import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserService } from '../userservice.service';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allUsers: any[] = [];

  constructor(
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.userService.getAllUsers().then(users => {
        this.allUsers = users;
      });
    } else {
      console.log('Skipping user fetch on server (SSR)');
    }
  }

  copyInvitationLink(userId: string): void {
    const url = `${window.location.origin}/invitation?userId=${encodeURIComponent(userId)}`;
    const message = `Здравейте!
 С радост искаме да ви поканим на нашата сватба на 15.06.2025г! 
Официалната покана,както и всички подробности за събитието, ще откриете на следния линк! 
${url}
  
Моля да потвърдите присъствието си до 20.05.25!`;
  
    navigator.clipboard.writeText(message)
      .then(() => {
        alert('Поканата е копирана успешно!');
      })
      .catch((err) => {
        console.error('Грешка при копиране на поканата:', err);
        alert('Възникна грешка при копиране.');
      });
  }
  
}
