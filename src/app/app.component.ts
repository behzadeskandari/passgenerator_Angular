import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  title = 'passgenerator';
  onButtonClick() {

    const symbols = '!@#$%^&*()'
    const numbers = '1234567890';
    const letters = 'abcdefgjhigklmnopqrstzyw'

    let validCards = ''
    if (this.includeLetters) {
      validCards += letters;
    }

    if (this.includeNumbers) {
      validCards + numbers;
    }
    if (this.includeSymbols) {
      validCards += symbols;;
    }



    let generatedPassword = ''
    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validCards.length);
      generatedPassword += validCards[index];
    }
    this.password = generatedPassword;

  }
  onChangeLength(value : string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  getPassword() {
    return this.password;
  }


  getName() {
    return 'Alex'
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

}
