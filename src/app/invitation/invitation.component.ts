import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../userservice.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-invitation",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./invitation.component.html",
  styleUrls: ["./invitation.component.css"],
})
export class InvitationComponent implements OnInit {
  userId: string | null = null;
  public attendance: string = "";
  public guests: number = 2;
  public transport: string = "";
  public menu: string = "";
  public hotel: string = "";
  public message: string = "";
  public user: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId  = params['userId'];
      this.userService.getUserData(this.userId!).then((x)=>{
        this.user = x;
      });
    });
  
  }
  constructor(private userService: UserService,private route: ActivatedRoute) {}
  


  // Form submission handler
  public submit() {
  //   var guestList = [
  //     "Даниела и Адем",
  //     "Цветелина и Георги",
  //     "Ивалина и Мирослав",
  //     "Петя и Симеон",
  //     "Петя и Йордан",
  //     "Александра и Деян",
  //     "Ивайло и Мария",
  //     "Кристиян и Аня",
  //     "Михаела и Николай",
  //     "Нели и Богомил",
  //     "Мария - Магдалена и Виктор",
  //     "Виолета и Гроздан",
  //     "Ирена и Георги",
  //     "Венелина и Иван",
  //     "Деница",
  //     "Спас",
  //     "Кръстьо",
  //     "Грета",
  //     "Галина",
  //     "Иринка",
  //     "Мария и Кали",
  //     "Кристиян",
  //     "Цветан",
  //     "Диляна и Даниел",
  //     "Вивиян",
  //     "Йоана и Валентин",
  //     "Наско",
  //     "Рая",
  //     "Даниел и Мария",
  //     "Габриела и Иван",
  //     "Полина и Георги",
  //     "Мирена",
  //     "Весела и Ангел",
  //     "Борис",
  //     "Дамян",
  //     "Тодор",
  //     "Спас",
  //     "Валерия и Васил",
  //     "Диляна и Стоил",
  //     "Николай",
  //     "Иван Цурев",
  //     "Ивайло",
  //     "Мария",
  //     "Владимир",
  //     "Виктория Банкова",
  //     "Ани",
  //     "Ангел Атанасов",
  //     "Александър Атанасов",
  //     "Диана , Кристиян и Изабел",
  //     "Ангелина и Атанас ( Сем. Симеонови)",
  //     "Недка и Иван ( Сем. Величкови)",
  //     "Силвия, Цветан и Ивона ( Сем. Спасови)",
  //     "Милена , Николай и Камен",
  //     "Петя, Иван , Мария и Габриела ( Сем. Атанасови)",
  //     "Албена и Николай (Сем. Лупови)",
  //     "Дима, Ненко и Атанас (Сем. Механджийки)",
  //     "Стефан и Ани",
  //     "Сем. Иброви",
  //     "Сем. Ненчеви",
  //     "Магдалена и Георги",
  //     "Ани и Том",
  //     "Пламена",
  //     "Сем. Владимирови",
  //     "Сем. Вътеви",
  //     "Иванка и Розарио",
  //     "Цвета Санкева",
  //     "Сем. Гуглеви",
  //     "Сем. Добреви",
  //     "Сем. Иванови",
  //     "Сем. Солакови",
  //     "Светла и Любчо",
  //     "Сем. Стоилови",
  //     "Жералдин и Никола",
  //     "Евгения и Георги",
  //     "Милена и Валери",
  //     "Борислав, Борислав, Ивона",
  //     "Бойка, Стефан, Елица и Виктор (Сем. Дунчеви)",
  //     "София, Георги и Стоян ( Сем. Каменски)",
  //     "Ваня, Паун, Мария и Ангел (Сем. Власеви)"
  //   ];

  // // Loop and save each guest/group to Firestore
  // guestList.forEach(async (guestName, index) => {
  //   const userId = `guest_${index}_${new Date().getTime()}`; // Simple unique ID
  //   const userData = {
  //     name: guestName,
  //     attendance: null,    // default values
  //     guests: null,
  //     transport: null,
  //     menu: null,
  //     message: "",
  //   };
  
  //   try {
  //     await this.userService.saveUserData(userId, userData);
  //     console.log(`Saved: ${guestName}`);
  //   } catch (error) {
  //     console.error(`Failed to save ${guestName}:`, error);
  //   }
  // });
  
    const userData = {
      name: this.user.name,
      attendance: this.attendance,
      guests: this.guests,
      transport: this.transport,
      menu: this.menu,
      message: this.message,
    };
    this.user.attendance = this.attendance;

    // Save the data to Firestore
    this.userService
      .saveUserData(this.userId!, userData)
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
