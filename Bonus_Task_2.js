function changeConsonant(str){
    const consonant = 'b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z'
    const conAr= consonant.split(',')
   let newStr = ''
    for(let char of str){
        let index = conAr.indexOf(char)
        if(index !== -1){
           newStr += conAr[index + 1]   
        }else{
          newStr+=char
        }
    }
    return newStr
}