import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export class FinancialModel {
  private dob: Date = new Date();
  private income: Number = 0;
  private investing: String = '';
}

// @IonicPage({
//   name: 'financial-page',
//   segment: 'financial',
// })
@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html',
})
export class FinancialPage {
  private financial: FinancialModel = new FinancialModel();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.financial);
    console.log('ionViewDidLoad FinancialPage');
  }

}
