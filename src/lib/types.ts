export type TodoRoot =  {
    reCalc: Date
    todos?: Todo[]
}

export type Todo = {
    id?: number, // autoIncrement by idb 
    title: string,
    description: string,
    done: boolean
}