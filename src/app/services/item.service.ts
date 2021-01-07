import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private endPoint = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) { }

  getItems(id?: string) {
    let url = (id)? `${this.endPoint}?parentId=${id}` : this.endPoint;

    return this.http.get(url);
  }
}