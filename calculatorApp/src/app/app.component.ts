import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorApp';

  stringInput:string="";

  takeInput(num:string){
    this.stringInput= this.stringInput + num;
    console.log("String Value:",this.stringInput)
  }

  evaluateResult(){
    if(this.stringInput != ''){
      this.stringInput=eval(this.stringInput);
    }
  }

  resetValue(){
    this.stringInput="";
  }
}
