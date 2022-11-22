
function solution(obj) {
    let out=[];
    const arr = Object.entries(obj)
    arr.forEach((item)=>{
        out.push({"id": item[0],"name": item[1]})
    })
    return out;
  }

  const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
  };
  
  console.log(solution(obj));