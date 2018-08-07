function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
    const lineNumAndName = [];
    for (let i = 0, l = line.length; i < l; i++){
      lineNumAndName.push(`${i + 1}.${line[i]}`);
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`;
}