import { PostService } from './../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  params!: any;
  selectedId!: any;
  post: any;
  isReadonly: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    
    this.params = this.route.snapshot.params;
    
    // When using query params
    // this.params.id = this.route.snapshot.queryParamMap.get('id');
    // this.params.type = this.route.snapshot.queryParamMap.get('type');

    if(this.params){
      if(this.params.type == 'view'){
        this.isReadonly = true;
      }
      this.getPost(this.params.postId);
    }

    this.selectedId = this.route.snapshot.paramMap.get('id');

    if (this.selectedId) {
      this.getPost(this.selectedId);
    }
  }

  getPost(id: number): void {
    this.postService.getPostById(id).subscribe(res => {
      this.post = res;
    });
  }

}
