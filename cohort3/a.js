import { promises as fs } from 'fs';

// const filePath = process.argv[2];
// console.log(filePath);


// if (!filePath) {
//   console.error('Please provide a file path. Usage: node index.js <file_path>');
//   process.exit(1);
// }

// // Read the file asynchronously
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err.message);
//     process.exit(1);
//   }

//   // Count words by splitting on whitespace and filtering empty parts
//   const words = data.split(/\s+/).filter(word => word.length > 0);
//   console.log(`You have ${words.length} words in this file`);
// });
//program.parse();  parse(process.argv[2]);

import { Command } from 'commander';
const program = new Command();
const path = 'todos.json';
program
.name('wordcount')
.description('A simple word count CLI tool')
.version('1.0.0');

program.command('counter')
.description('A simple word count CLI tool')
.argument('<file_path>', 'Path to the text file')
.action((filePath) => { 
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      process.exit(1);
    } 
    const words = data.split(/\s+/).filter(word => word.length > 0);
    console.log(`You have ${words.length} words in this file`);
  }
);
})

program
  .command('create')
  .description('creating a todo file')
  .argument('<todo_text>', 'Text for the todo item')
  .action(async (todoText) => {
    try {
      let todos = [];
      try {
        const content = await fs.readFile(path, 'utf-8' );
        if (content) {
          todos = JSON.parse(content);
        }
      } catch (readErr) {
        // If file doesn't exist or is empty, start fresh
        if (readErr.code !== 'ENOENT') throw readErr;
      }
    const newTodo = { id: Date.now(), text: "how are you doinn!", completed: false };
      console.log(newTodo.text)
      todos.push(newTodo);
      await fs.writeFile(path, JSON.stringify(todos, null,2));
      console.log('Todo created successfully:', newTodo);
    } catch (error) {
      console.error('Error creating todo:', error.message);
      process.exit(1);
    }
  });

program
.command('showtodos')
.description('listing all todo items')
.arguments('<path>', 'path to the todo file')
.action(async(path)=>{
  try {
    const data = await fs.readFile(path, 'utf8');
    if(!data){
      console.error('No todos found.');
      process.exit(1);
    }
    const todos =JSON.parse(data);
    todos.map((todo)=>{
      console.log(`${todo.id} - ${todo.text} - ${todo.completed ? 'Completed' : 'Pending'}`);
    })
  } catch (error) {
    console.error('Error reading todos:', error.message);
    process.exit(1); 
  }
})

program
.command('delete')
.description('deleting a todo item')
.argument('<id>','ID of the todo item to delete')
.action(async(id)=>{
  try {
    const data = await fs.readFile(path,'utf8');
    if(!data){
      console.error('No todos found.');
      process.exit(1);
    }

    let todos =JSON.parse(data);

    const initiallength = todos.length;
    todos = todos.filter((todo)=>todo.id !== parseInt(id));

    if(todos.length === initiallength){
      console.error('Todo not found.');
      process.exit(1);
    }
    console.log('Todo deleted successfully.');
    await fs.writeFile(path,JSON.stringify(todos,null,2));
  } catch (error) {
    console.error('Error deleting todo:', error.message);
    process.exit(1);
  }
})

program
.command('updated')
.description('updating a todo item')
.arguments('<id>','ID of the todo item to update')
.action(async(id)=>{
  const data =  await fs.readFile(path,'utf8');
  if(!data){
    console.error('No todos found.');
    process.exit(1);
  }
  let todos =JSON.parse(data);
  const todo = todos.filter((todo)=>todo.id === parseInt(id));
  if(!todo){
    console.error('Todo not found.');
    process.exit(1);
  }
  todo.completed = true;
  todo.text = "i am updated todo";
  await fs.writeFile(path,JSON.stringify(todos,null,2));
  console.log('Todo updated successfully.', todo);
})

program.parse();

// cli program.