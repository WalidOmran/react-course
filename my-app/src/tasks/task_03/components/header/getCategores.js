const getCategores = await fetch('https://fakestoreapi.com/products/categories')
                    .then(res => res.json())
                    .then(completData => completData)
                    .catch(error => console.log(error));


function  getCategores2(apiData) {
    return fetch(apiData)
           .then(res => res.json())
           .then(completData => completData)
           .catch(error => console.log(error))
}

export default getCategores