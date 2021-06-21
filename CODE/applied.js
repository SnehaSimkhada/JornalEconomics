function addItemsToList(author,title,url){
        var ul = document.getElementById('list');
        //var header = document.createElement('h2')
    
        var _author = document.createElement('li');
        var _title= document.createElement('li');
        var _url= document.createElement('li');
        var _space= document.createElement('li');
    
    _author.innerHTML = '<b>AUTHOR(S):</b> ' + author;
   
    _url.innerHTML  =  'TITLE: ' ;
    _space.innerHTML  =  "  .  " ;


  ul.appendChild(_author);
  ul.appendChild(_url).style.color = 'blue';
 ul.appendChild(_title);
   ul.appendChild(_space); 
    
    if(url.indexOf("./" ) === 0){
                                var a = document.createElement('a');
                                var link = document.createTextNode(title)
                                a.appendChild(link);
                                a.title = author;
                                a.href = url;
                                a.target="_blank"
                                document.body.appendChild(a);
                                _url.append(a);
                            // }else{
                            //     if(url.indexOf("https://") === 0){
                            //     var a = document.createElement('a');
                            //     var link = document.createTextNode(page)
                            //     a.appendChild(link);
                            //     a.title = name;
                            //     a.href = url;
                            //     a.target="_blank"
                            //     document.body.appendChild(a);
                            //     _url.append(a);
                             }
                             else {
                                _url.innerHTML =  'Title: ' + url; 
                            }
                            }                  
    
    
    
    function FetchAllData(){
        firebase.database().ref('IJAE').once('value',function(snapshot){
            snapshot.forEach(
                function(ChildSnapshot){
                    let author = ChildSnapshot.val().Author;
                    let title = ChildSnapshot.val().Title;
                    let url = ChildSnapshot.val().URL;
    
    addItemsToList(author,title,url);
    
                }
            );
            
        });
    
    }
    
    

