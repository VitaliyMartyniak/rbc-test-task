import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {PageEvent} from "@angular/material/paginator";
import {PaginationService} from "./pagination.service";
import {Product} from "../../interfaces/catalog";
import {Observable, Subscription} from "rxjs";
import {pageIndexSelector} from "../../store/selectors/pagination";
import {updatePage} from "../../store/actions/pagination";
import {filteredProductsSelector} from "../../store/selectors/filters";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  length = 0;
  pageIndex$: Observable<number> = this.store.pipe(select(pageIndexSelector));

  filteredProductsSub: Subscription;

  constructor(private store: Store, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.filteredProductsSub = this.store.select(filteredProductsSelector).subscribe((products: Product[]): void => {
      this.length = products.length;
    });
    this.paginationService.init();
  }

  handlePageEvent($event: PageEvent): void {
    this.store.dispatch(updatePage({pageIndex: $event.pageIndex}));
  }

  ngOnDestroy(): void {
    this.filteredProductsSub.unsubscribe();
  }
}
