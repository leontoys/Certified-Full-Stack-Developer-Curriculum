const generatePassword =  (passwordLength)=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for(let i = 0; i <passwordLength; i++){
      const randomNumber = Math.floor( Math.random( )*passwordLength );
      password += characters[randomNumber];
    }
    return password;
  }
  
  let password = generatePassword(5);
  console.log("Generated password:"+password);