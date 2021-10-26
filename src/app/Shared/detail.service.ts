import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Detail} from '../Shared/detail.model'

@Injectable({
  providedIn: 'root'
})
export class DetailService {
detail: Detail[] = []

  myUrl = "http://localhost:3000/Detail";
  constructor(private httpclient: HttpClient) { }
  
  postDetail(det: Detail) {
    return this.httpclient.post(this.myUrl, det)
  }
}
