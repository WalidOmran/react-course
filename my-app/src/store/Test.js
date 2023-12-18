/*
    const avatar = "https://picsum.photos/200/200";
     baseUrl :'https://i.imgur.com/QIrZWGIs.jpg'
*/


function Item(){
    const person = {
        avatar : { 
          baseUrl :'https://i.imgur.com/',
          imgId: 'QIrZWGIs' ,
          imgSize: 's',
          theme : {
            color: 'blue',
            width: '100% !important',
            borderRadius : '20px !important'  
          }
        },
        pName  : 'Walid Omran',
        pDesc  : 'random image',
        theme  : {
          maxWidth: 150,
          margin: '50px auto',
          padding: '0px',
          borderRadius : '20px',
          backgroundColor : '#fff',
          color : 'red'
        }
    }
    return(
        <div style={person.theme}>
            <img
            style={person.avatar.theme}
            src={person.avatar.baseUrl + person.avatar.imgId + '.jpg'}
            title={person.pDesc}
            alt="Just An Image"
            />
            <h3>{person.pName}</h3>
            <p>{person.pDesc}</p>
            <p style={person.avatar.theme}>test</p>
        </div>
    );
}





function Test (){
    
    return(
        <Item person />
    );
}
export default Test 