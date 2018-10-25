export class Talk {

  title: string;
  author: string;
  description: string;
  votes: number;

  constructor(title: string, author: string, description: string, votes?: number) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }
}
