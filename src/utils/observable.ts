import { Observable } from "rxjs/internal/Observable";

var observable = Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
console.log("just before subscribe");
observable.subscribe({
  next: x => console.log("got value " + x),
  error: err => console.error("something wrong occurred: " + err),
  complete: () => console.log("done")
});
console.log("just after subscribe");

function testPromise(){
  var promise = new Promise((resolve, reject) =>{
    console.log(111)
    resolve(111)
  })
  promise.then(values => {
    console.log('then' + values)
  })
}
console.log('start promise')
testPromise()
console.log('end promise')