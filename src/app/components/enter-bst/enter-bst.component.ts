import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostBstService } from 'services/post-bst.service';
import { DrawTree } from 'app/classes/drawTree';

@Component({
  selector: 'app-enter-bst',
  templateUrl: './enter-bst.component.html',
  styleUrls: ['./enter-bst.component.scss']
})
export class EnterBstComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  drawTree: DrawTree;
  bst;
  data;

  constructor(private postService: PostBstService) { }

  ngOnInit() { }

  postbst() {
    console.log(this.bst);
    if (this.bst) {
      this.bst = JSON.stringify(this.bst);
      this.subscription = this.postService.postBst(this.bst).subscribe(data => {
        this.data = data;
        console.log(data);
        this.drawTree = new DrawTree(this.data);
      });
    }
  }

  changeInput() {
    console.log(this.bst);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
