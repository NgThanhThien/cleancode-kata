import { TennisGame } from './TennisGame';


export class TennisGame3 implements TennisGame {
  private p2: number = 0;
  private p1: number = 0;
  private p1N: string;
  private p2N: string;

  constructor(p1N: string, p2N: string) {
    this.p1N = p1N;
    this.p2N = p2N;
  }
  
  getScore(): string {
    let s: string;
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) return this.getSubScore1(this.p1,this.p2);
    if (this.p1 === this.p2) return 'Deuce';
    return this.getSubScore2(this.p1,this.p2)
  }
  getSubScore1(score1: number,score2: number) {
    const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    let s = p[score1];
    return (score1 === score2) ? s + '-All' : s + '-' + p[score2];
  }
  getSubScore2(score1: number,score2: number) {
    let s =  score1 > score2 ? this.p1N : this.p2N;
    return (((score1 - score2) * (score1 - score2)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
  }
  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;

  }
}
