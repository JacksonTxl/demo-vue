import { Observable, interval } from "rxjs";
import { Subject } from "rxjs";
const log = console.log;
var subject = new Subject();
subject.subscribe({
  next: val => log(val)
});
subject.subscribe({
  next: val => log(val)
});
interval(500)
var observable = Observable.create(function(observer){
  observer.next(111)
});
// observale可以订阅subject
observable.subscribe(subject)