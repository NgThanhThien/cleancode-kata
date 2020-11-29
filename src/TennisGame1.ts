import { TennisGame } from './TennisGame';


export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) return this.getScoreOne(this.m_score1);
    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;
      return this.getScoreTwo(minusResult)
    }
    return this.getScoreThree(this.m_score1,this.m_score2)
  }
  getScoreOne(score:number) {
    const hash= {'0': 'Love-All', '1': 'Fifteen-All','2': 'Thirty-All'}
    if (hash[score]) return hash[score];
    return 'Deuce'; 
  }
  getScoreTwo(minusResult:number) {
    if (minusResult === 1) return'Advantage player1';
    if (minusResult === -1) return 'Advantage player2';
    if (minusResult >= 2) return 'Win for player1';
    return 'Win for player2';
  }
  getScoreThree(score1:number,score2:number){
    let tempScore:number;
    let score:string = '';
    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = score1;
      else { score += '-'; tempScore = score2; }
      score = this.getChildScore(score,tempScore)
    }
    return score;
  }
  getChildScore(sign:string,tempScore:number) {
    const hash= {'0': 'Love', '1': 'Fifteen','2': 'Thirty'}
    if(hash[tempScore]) return sign += hash[tempScore];
    return sign += 'Forty'; 
  }
}
