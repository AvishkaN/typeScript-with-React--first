
class Todo{
    id:string;
    text:string;

    constructor(todoText:string) { // create todo object
        this.id=new Date().toISOString()+todoText;
        this.text=todoText;
    }
    
    
}


export default Todo;