import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user-service.service';
import { map } from 'rxjs/operators';
import { SearchFilterPipe } from './search-filter.pipe';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  searchForm = new FormGroup({
    searchTerm: new FormControl('')
  });
  filteredUsers$!: Observable<any[]>;
  dataSource: any[] = []


  constructor(private userService: UserService, private searchFilter: SearchFilterPipe) { }

  ngOnInit() {
    this.filteredUsers$ = this.userService.getUsers();
    this.filteredUsers$.subscribe( users => {
      this.dataSource = users
    })
    this.searchForm.controls.searchTerm.valueChanges.subscribe(() => {
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.filteredUsers$) {
      const searchTerm = this.searchForm.controls.searchTerm.value;
      this.userService.getUsers().subscribe( users => {
        this.dataSource = this.searchFilter.transform(users, searchTerm || '')
      }
    );
  }}
}
