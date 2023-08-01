function minFlips(a: number, b: number, c: number): number {
    const limit = Math.max(a, b, c);
    let check = 1;
    let result = 0;
    while(check <= limit){
        if(check & c){
            if(!(check & a) && !(check & b)){
                result++;
            }
        }else{
            if(check & a){
                result++;
            }
            if(check & b){
                result++;
            }
        }
        check *= 2;
    }
    return result;
};