import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {pageIndexSelector, updatePage} from "../../reducers/pagination/pagination";
import {PageEvent} from "@angular/material/paginator";
import {filteredProductsSelector} from "../../reducers/filters/filters";
import {PaginationService} from "./pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  length = 0;
  pageIndex = 0;

  constructor(private store: Store, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.store.select(filteredProductsSelector).subscribe((products) => {
      this.length = products.length;
    });
    this.store.select(pageIndexSelector).subscribe((pageIndex) => {
      this.pageIndex = pageIndex;
    });
    this.paginationService.init();
  }

  handlePageEvent($event: PageEvent) {
    this.store.dispatch(updatePage({pageIndex: $event.pageIndex}));
  }
}
