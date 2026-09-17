function OddEven(){
    let num=-1;
    if(num%2==0){
        document.write("Even Number" + " " + num);
    }
    else if(num%2==1){
        document.write("Odd Number" +  " "  +num);
    }
    else{
        document.write("Invalid! Number");
    }
}
OddEven();