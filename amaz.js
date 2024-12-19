

function totalCost(){

    const inputValue =document.querySelector('.js-input');
    let cost =Number(inputValue.value);

    /*document.querySelector('.js-value')
    .innerHTML ='';
    document.querySelector('.js-errror-messge')
    .innerHTML='';*/
    if(cost < 0){
        document.querySelector('.js-error-message ')
        .innerHTML = 'Error: cost cannot be less than $0';
        return;
    }  
    
    
    if(cost < 40){
        cost = cost+10;
    }
    document.querySelector('.js-value')
    .innerHTML =`$${cost}`;
}
