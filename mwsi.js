module.exports = class MWIS{
    max = (a,b) => {
        return (a > b ? a :b);
    }
    popular = (arr) => {
        let arrAux = []
        arrAux[0] = 0, arrAux[1] = arr[0] 
        for (let index = 2; index <= arr.length; index++) {
            arrAux[index] = this.max(arrAux[index-1],arrAux[index-2] + arr[index-1])
        }
        return arrAux
    }
    reconstruir = (arr,arrAux) => {
        let S = [];
        let i = arrAux.length-1
        while(i >= 1 ){
            if(arr[i-1] >= arr[i-2] + arr[i-1]) i--
            else{
                S.push(arrAux[i])
                i -= 2
            }
        }
        return S;
    }
    main = (arr) => {
        return(this.reconstruir(this.popular(arr),arr));
    }
}