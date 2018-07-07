window.onload = (()=>{

    var view = document.querySelector('.textview');
    insert = (num) =>{
        view.value = view.value + num;
    };

    equal = () => {
        view ? view.value = eval(view.value) : view.value;    
    };
    
    clean = () =>{
        view.value = "";
    };

    back = () => {
        view.value = view.value.substring(0, view.value.length-1);
    };

});