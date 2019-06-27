import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  pullSupport = 'https://n1sharmonypull.azurewebsites.net/api/ContactsPull?code=qLBOWarRjj0PHTWEewFsPhR4sYftDLgE9N49p44Kk9kFyv5aqNuxbg==';

  constructor(private http: HttpClient) { }

  getSupport() {
    return this.http.get(this.pullSupport);
  }
}
