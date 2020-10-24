import { genSalt, hash } from 'bcrypt';

function generateBash(password){
  const saltRounds = 10;
  let bashedPass;

  hash(password, saltRounds, (err, hash)=>{
    bashedPass = hash;
  })

  return bashedPass;
}

export {generateBash}