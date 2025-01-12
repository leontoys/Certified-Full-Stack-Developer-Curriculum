let inventory = [];

const findProductIndex = (productName) => {
  for(let index = 0; index < inventory.length; index++){
    if(inventory[index].name.toLowerCase() == productName.toLowerCase() ){
      return index;
    }    
  }
  return -1;
}

const addProduct = (product)=>{
  let {name,quantity} = product;
  name = name.toLowerCase();
  let index = findProductIndex(name);
  if(index == -1){
    inventory.push({name:name,quantity:quantity});
    console.log(`${name} added to inventory`);
  }
  else{
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  }
}

const removeProduct = (name,quantity)=>{
  name = name.toLowerCase();
  let index = findProductIndex(name);
  if(index == -1){
    console.log(`${name} not found`);
  }
  else if(inventory[index].quantity < quantity){
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
  }
  else {
    inventory[index].quantity -= quantity;
    if(inventory[index].quantity == 0){
      inventory.splice(index,1);
    }
    else{
    console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
    }
  }
}