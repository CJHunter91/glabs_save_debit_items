
class AjaxRequest{
  constructor(url){
    this.url = url;
    this.debitItems = null;
  }

  get(callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.url);
    xhr.onload = () =>{
      if (xhr.status === 200){
        var jsonString = xhr.responseText;
        this.debitItems = JSON.parse(jsonString);
        console.log(this.debitItems)
        callback(this.debitItems);
      }
    }
    xhr.send();
  }
}

export default AjaxRequest;
