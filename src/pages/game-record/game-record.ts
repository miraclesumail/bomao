import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the GameRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface record{
   number:number,
   gameName:string,
   betNum:string,
   betPrice:number,
   betTime:string,
   betStatus:number
}

@IonicPage()
@Component({
  selector: 'page-game-record',
  templateUrl: 'game-record.html',
})
export class GameRecordPage {
  gameList:Array<record>;
  gameRecords:Array<record> = [
    {number:123456,gameName:'ssc',betNum:'2345566',betPrice:99,betTime:'2018-4-10',betStatus:0},
    {number:123456,gameName:'ssc',betNum:'2345566',betPrice:99,betTime:'2018-4-08',betStatus:0},
    {number:123456,gameName:'lhc',betNum:'2345566',betPrice:99,betTime:'2018-4-11',betStatus:1},
    {number:123456,gameName:'ssc',betNum:'2345566',betPrice:99,betTime:'2018-4-12',betStatus:0},
    {number:123456,gameName:'ssc',betNum:'2345566',betPrice:99,betTime:'2018-4-07',betStatus:1},
    {number:123456,gameName:'lhd',betNum:'2345566',betPrice:99,betTime:'2018-4-13',betStatus:0},
    {number:123456,gameName:'dlt',betNum:'2345566',betPrice:99,betTime:'2018-4-15',betStatus:0}
  ]

  gameKind:Array<any> = [
    {name:'ssc',id:1},
    {name:'lhc',id:2},
    {name:'lhd',id:3},
    {name:'dlt',id:4},
  ]

  gameObserver = new Subject()

  eventOne = {timeStarts: '', timeEnds: '', name: null};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      let startDay = new Date();
      startDay.setDate(startDay.getDate() - 7);
      let endDay = new Date();
      endDay.setDate(endDay.getDate() + 1);
      this.eventOne = {
      timeStarts: this.format(startDay),
      timeEnds: this.format(endDay),
      name: 'ssc'
      };
      this.getFilterData(this.eventOne)

      this.gameObserver.subscribe(val => {
          this.getFilterData(val)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameRecordPage');
  }

  getFilterData(params){
    this.gameList = this.gameRecords.filter(
      item => item.gameName == params.name && 
      new Date(item.betTime).getTime() > new Date(params.timeStarts).getTime()
      && new Date(item.betTime).getTime() < new Date(params.timeEnds).getTime()
      )
  }

  format(d: Date): string {
    let oMonth = "0" + (d.getMonth() + 1);
    oMonth = oMonth.slice(-2);
    return d.getFullYear() + "-" + oMonth + "-" + ('0' + d.getDate()).slice(-2);
  }

  say(){
    this.gameObserver.next(this.eventOne)
  }
}
