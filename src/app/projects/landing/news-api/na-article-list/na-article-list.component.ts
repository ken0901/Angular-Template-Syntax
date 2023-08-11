import { Component, OnInit } from '@angular/core';
import { Article, NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css']
})
export class NaArticleListComponent implements OnInit {
  articles: Article[] = 
  [
    {
      "source": {
        "name": "MLB.com"
      },
      "title" :"Kyle Tucker hits go-ahead grand slam in Astros' win over Orioles - MLB.com",
      "url" : "https://www.mlb.com/news/kyle-tucker-hits-go-ahead-grand-slam-in-astros-win-over-orioles",
    },
    {
      "source": {
        "name": "POLITICO"
      },
      "title": "Trump, Christie feast on insults in New Hampshire - POLITICO",
      "url": "https://www.politico.com/news/2023/08/08/trump-christie-new-hampshire-00110413",
    },
    {
      "source": {
        "name": "Deadline"
      },
      "title": "Riley Keough On The Last Time She Saw Mom Lisa Marie Presley & Legal Drama With Grandmother Priscilla - Deadline",
      "url": "https://deadline.com/2023/08/riley-keough-last-time-she-saw-mom-lisa-marie-presley-legal-drama-grandmother-priscilla-1235458098/",
    },
    {
      "source": {
        "name": "The Associated Press"
      },
      "title": "Tory Lanez gets 10 years in prison for shooting Megan Thee Stallion - The Associated Press",
      "url": "https://apnews.com/article/tory-lanez-megan-thee-stallion-sentence-shooting-58a042216c01eae44bc2ed22bf45aba2",
    },
    {
      "source": {
        "name": "Ars Technica"
      },
      "title": "NASA's Artemis II crew meets their Moonship - Ars Technica",
      "url": "https://arstechnica.com/space/2023/08/nasas-artemis-ii-crew-meets-their-moonship/",
    },
    {
      "source": {
        "name": "The Associated Press"
      },
      "title": "Thousands of Los Angeles city workers walk off job for 24 hours alleging unfair labor practices - The Associated Press",
      "url": "https://apnews.com/article/los-angeles-city-workers-strike-689eaa21d729694d8fa91080ddaa01df",
    },
    {
      "source": {
        "name": "CNN"
      },
      "title": "Judge schedules Friday hearing on protective order in election subversion case against Trump - CNN",
      "url": "https://www.cnn.com/2023/08/08/politics/trump-protective-order-hearing/index.html",
    },
    {
      "source": {
        "name": "The Guardian US"
      },
      "title": "Fulton county prosecutors to seek new 2020 election charges next week - The Guardian US",
      "url": "https://www.theguardian.com/us-news/2023/aug/08/trump-2020-election-fulton-county-charges-next-week",
    },
    {
      "source": {
        "name": "Entertainment Tonight"
      },
      "title": "Sandra Bullock’s Partner Bryan Randall's Quiet ALS Battle: Medical Expert Explains Condition - Entertainment Tonight",
      "url": "https://www.youtube.com/watch?v=D9yKhzQ-aTM",
    },
    {
      "source": {
        "name": "The Associated Press"
      },
      "title": "Amazon nations seek common voice on climate change, urge developed world to help protect rainforest - The Associated Press",
      "url": "https://apnews.com/article/belem-amazon-rainforest-summit-brazil-environment-crime-4e68ebf7f6c719d779ed726cc4f0c5dc",
    }
  ];
  numberOfPage: number;
  
  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe((articles) => {
      this.articles = articles;
    });

    // this.newsApiService.getPage(1);
   }

  ngOnInit(): void {
  }

  getNumberOfPage() {
    return this.numberOfPage = 3;
  }
}
