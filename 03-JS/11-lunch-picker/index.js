const lunches = ["Greens", "Corns", "Beans"];

const addLunchToEnd =  (lunchItem) => {
  lunches.push(lunchItem);
  return `${lunchItem} added to the end of the lunch menu.`;
}

const addLunchToStart =  (lunchItem) => {
  lunches.unshift(lunchItem);
  return `${lunchItem} added to the start of the lunch menu.`;
}

const removeLastLunch =  () => {
  if(lunches.length > 0){
  let lunchItem = lunches[lunches.length-1];
  lunches.pop();
  return `${lunchItem} removed from the end of the lunch menu.`;
  }
  else{
    return "No lunches to remove.";
  }
}

const removeFirstLunch =  () => {
  if(lunches.length > 0){
  let lunchItem = lunches[0];
  lunches.shift();
  return `${lunchItem} removed from the start of the lunch menu.`;
  }
  else{
    return "No lunches to remove.";
  }
}

const getRandomLunch =  () => {
  if(lunches.length > 0){
  let randomNumber = Math.floor( Math.random()*lunches.length ); 
  let lunchItem = lunches[randomNumber];
  return `Randomly selected lunch: ${lunchItem}`;
  }
  else{
    return "No lunches available.";
  }
}

const showLunchMenu =  () => {
  if(lunches.length > 0){
    let menuItems = lunches.join(", ");
    return `Menu items: ${menuItems}`;
  }
  else{
    return "The menu is empty.";
  }
}


console.log(showLunchMenu(lunches));