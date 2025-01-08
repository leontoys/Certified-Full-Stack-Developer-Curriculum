const maskEmail =  email  => email[0]+
'*'.repeat(email.indexOf('@')-2)+
email.slice(email.indexOf('@')-1);

  let email = "apple@example.com";
  console.log(maskEmail(email));

