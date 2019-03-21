import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeTab = 0;
  title = 'bar-tab';
  tabs = ['AgitationTank001', 'AgitationTank002', 'AgitationTank003', 'Tank', 'ReallyLongTankName001', 'ReallyLongTankName002' ];
  maxWidth = 250;
  minWidth = 50;
  tabWidth = 0;

  addTab(newTab: string) {
      console.log(newTab);
      if(newTab) {
          this.tabs.push(newTab);
      }
 }

 selectTab(tab: number) {
    if(tab) {
        this.activeTab = tab;
    }
 }
 removeTab(tab: number) {
     if (tab) {
         this.tabs.splice(tab, 1);
     }
 }
}
