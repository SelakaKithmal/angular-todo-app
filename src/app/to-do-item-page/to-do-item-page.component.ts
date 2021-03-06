import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item-page',
  templateUrl: './to-do-item-page.component.html',
  styleUrls: ['./to-do-item-page.component.scss']
})
export class ToDoItemPageComponent implements OnInit {
  item:ToDoItem;

  constructor(private route: ActivatedRoute, private toDoItemService: ToDoItemService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const title = param.get('id');
      this.item = this.toDoItemService.getTodoItem(title);
    });
  }

}
