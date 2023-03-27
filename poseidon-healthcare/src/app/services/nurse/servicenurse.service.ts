import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface items{
  id:number;
  reason:string;
  date:string;
  submissionDate:string;
}


@Injectable({
  providedIn: 'root'
})


export class ServicenurseService {

  constructor(private http:HttpClient){}

  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',

    })  
  }
  postData(bp:number,rr:number,temp:number,height:number,weight:number,notes:string,bps:number,bg:string):Observable<any>{
  
    return this.http.post("https://localhost:7292/poseidonhc/AddVisitDetails",
    {
      "patientId": this.myData.patientId,
      "height": height,
      "weight": weight,
      "bloodPressureSystolic": bps,
      "bloodPressureDiastolic":bp,
      "bodyTemperature":temp,
      "respirationRate": rr,
      "bloodGroup": bg,
      "nurseEmail": "string",
      "physicianEmail": this.myData.physicianEmail,
      "appointmentId": this.myData.id,
      "keyNotes": notes
    })
  }
  public getData():Observable<any>
  {
    return this.http.get("https://localhost:7292/poseidonhc/Get_all_appointment",{headers:this.httpOptions.headers});
  }
  public serviceUrl="https://localhost:7292/poseidonhc/updateby_patID";

  public update(data:any):Observable<any>{
      return this.http.put(`${this.serviceUrl}/${data.patientId}`, {
        
        "reason": data.reason,
        "date": data.date,
        "acceptance": 2,
        "patientId": data.patientId,
        "physicianEmail": data.physicianEmail,
        "submissionDate": data.submissionDate
      })
  }

  public getPatientData(data:any):Observable<any>{
    
    return this.http.get(`https://localhost:7292/poseidonhc/Get_by_ID/${data}`,{headers:this.httpOptions.headers});
  }
  public getDoctorData(data:any):Observable<any>{
    return this.http.get(`https://localhost:7292/poseidonhc/Get_particular_doctor/${data}`,{headers:this.httpOptions.headers});

  }

  public getMedicalHistory(data:any):Observable<any> {
    return this.http.get(
      `https://localhost:7292/poseidonhc/GetVisitDetailsById/${data}`
    );
  }
  public myData:any;
  public medPatientData:any;
}
