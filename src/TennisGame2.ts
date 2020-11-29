import { TennisGame } from './TennisGame';


export class TennisGame2 implements TennisGame {
  P1point: number = 0;
  P2point: number = 0;

  P1res: string = '';
  P2res: string = '';
  hash:object = {'0':'Love','1':'Fifteen','2':'Thirty','3':'Forty'}

  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }
  
  getScore(): string {
    let score: string = '';
    if (this.P1point === this.P2point && this.P1point < 4) {
      score = this.hash[this.P1point] + '-All'
    }
    if (this.P1point === this.P2point && this.P1point >= 3)
      score = 'Deuce';

    if (this.P1point > 0 && this.P2point === 0) {
      score = this.getScore1(this.P1point,'Love')
    }
    if (this.P2point > 0 && this.P1point === 0) {
      score = this.getScore1('Love',this.P2point)
    }

    if ((this.P1point > this.P2point && this.P1point < 4 ) || (this.P2point > this.P1point && this.P2point < 4)) {
      this.P1res = this.hash[this.P1point];
      this.P2res = this.hash[this.P2point];
      score = this.P1res + '-' + this.P2res;
    }
    if (this.P1point > this.P2point && this.P2point >= 3) {
      score = 'Advantage player1';
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
      score = 'Advantage player2';
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
      score = 'Win for player1';
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }
  getScore1(s1:any,s2:any) {
    if(typeof s1 == 'string') {
      this.P1res = this.hash[s2];
      this.P2res = s1
    } else {
      this.P2res = this.hash[s1];
      this.P1res = s2
    } 
    return this.P1res + '-' + this.P2res;
  }

  SetP1Score(score: number): void {

    for (let i = 0; i < score; i++) {
      this.P1Score();
    }

  }

  SetP2Score(score: number): void {

    for (let i = 0; i < score; i++) {
      this.P2Score();
    }

  }

  P1Score(): void {
    this.P1point++;
  }

  P2Score(): void {
    this.P2point++;
  }

  wonPoint(player: string): void {
    if (player === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }
}
