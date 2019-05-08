import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private navParams: NavParams, private modal: ModalController) { }

  ngOnInit() {
    console.log(this.navParams.data.data);
    console.log(this.navParams.data.type);
  }

  back() {
    this.modal.dismiss();
  }

}
