export class RequestHelper {

  static serialize(object) {
     var serializedArray = [];
     for(var propertyName in object){
         if (object.hasOwnProperty(propertyName)) {
             serializedArray.push(encodeURIComponent(propertyName) + "=" + encodeURIComponent(object[propertyName]));
         }
     }
     return serializedArray.join("&");
  }

}
