import { compare } from 'bcrypt';

function chackHashofPassword(password, hashPassword):boolean{
  let isValid;
  compare(password, hashPassword, (err, result)=>{
    isValid = result;
  })

  return isValid;
}

export {chackHashofPassword}