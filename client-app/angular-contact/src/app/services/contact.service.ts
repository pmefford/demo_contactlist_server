import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, of} from "rxjs";
import {IContact} from "../model/contact.model";
import {IPage} from "../model/page.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl  = 'http://localhost:8080';

  constructor(
    private http: HttpClient) { }


  createContact(contact: IContact):Observable<string> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<string>(this.baseUrl+'/contacts/',contact, options)
      .pipe(catchError(this.handleError<string>('createContact', '')))
  }
  getContact(contactId: string):Observable<IContact> {
    return this.http.get<IContact>(this.baseUrl+'/contact/'+contactId)
      .pipe(catchError(this.handleError<IContact>('getContact', {} as IContact)))
  }
  getContactsPage(page: number, size: number):Observable<IPage> {
    return this.http.get<IPage>(this.baseUrl+'/contacts/page?page='+page+'&size='+size)
      .pipe(catchError(this.handleError<IPage>('getContactsPage', {} as IPage)))
  }
  updateContact(contact: IContact):Observable<string> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<string>(this.baseUrl+'/contact/'+contact.id,contact, options)
      .pipe(catchError(this.handleError<string>('updateContact', '')))
  }
  deleteContact(contactId: string):Observable<string> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<string>(this.baseUrl+'/contact/'+contactId,options)
      .pipe(catchError(this.handleError<string>('deleteContact', '')))
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
