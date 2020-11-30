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
    let maxPoint: number = Math.max(this.P1point, this.P2point);
    let subtractPoint:number = this.P1point - this.P2point;
    if (this.P1point === this.P2point ) {
      score = this.getScoreP1EquarP2(this.P1point) || score; 
    }
    // if (maxPoint > 0 ) {
    //   score = this.getScoreMaxpointLagerZero(this.P1point,this.P2point) || score;
    // }
    if (subtractPoint > 0  ) {
      score = this.getScoreP1LagerP2(this.P1point,this.P2point);
    }
    if(subtractPoint < 0) {
      score = this.getScoreP2LagerP1(this.P1point,this.P2point);
    }
    if (maxPoint >= 4) {
      score = this.getWinner(this.P1point,this.P2point) ? this.getWinner(this.P1point,this.P2point) : score;
    } 
    return score;
  }
  // getScoreMaxpointLagerZero(p1:number,p2: number) {
  //   if (p2 === 0) return this.getScore1(p1,'Love');
  //   if (p1 === 0) return this.getScore1('Love',p2)
  // }
  getScoreP1EquarP2(p1:number) {
    let score: string = '';
    if (p1 < 4) score = this.hash[p1] + '-All'
    if (p1 >= 3) score = 'Deuce';
    return score;
  }
  getScoreP1LagerP2(p1:number,p2: number) {
    if (p1 < 4) return  this.hash[p1] + '-' +  this.hash[p2];
    if (p2 >= 3) return 'Advantage player1';
  }
  getScoreP2LagerP1(p1:number,p2: number) {
    if (p2 < 4) return  this.hash[p1] + '-' +  this.hash[p2];
    if (p1 >= 3) return 'Advantage player2';
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
  getWinner(p1:number,p2:number) {
    let score: string = '';
    if (p2 >= 0 && (p1 - p2) >= 2) score = 'Win for player1';
    if (p1 >= 0 && (p2 - p1) >= 2) score = 'Win for player2';
    return score;
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
