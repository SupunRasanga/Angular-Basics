import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList: any[] = [];
  collectionSize: number = 0;
  pageSize: number = 10;
  page: number = 1;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.postService.getPostList().subscribe(data => {
      this.postList = data;
      this.collectionSize = this.postList.length;
    });
  }

  gotoDetailsPage(id: number) {
    this.router.navigate(['/post-list', id]);
  }

  gotoView(id: number) {
    this.router.navigate(['/post-details', { type: 'view', postId: id }]);
  }

  // Using Query Params method
  gotoView2(id: number) {
    this.router.navigate(['/post-details'], { queryParams: { type: 'view', postId: id } });
  }

}
