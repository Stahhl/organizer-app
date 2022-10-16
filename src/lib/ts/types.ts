export type TodoRoot = {
	reCalc: Date;
	todos?: Todo[];
};

export enum IntervalUnit {
	DAYS = 'Days',
	WEEK = 'Weeks',
	MONTH = 'Months',
	YEAR = 'Years'
}

export type Interval = {
	unit: IntervalUnit;
	amount: number;
};

export type Todo = {
	id: number; // satt i AddTodo
	title: string;
	description: string;
	done: boolean;
	daysLeft: number;
	interval: Interval;
};

// export class Todo {
//     id: number; // satt i AddTodo
//     title: string;
//     description: string;
//     done: boolean;
//     daysLeft: number;
//     interval: Interval;

//     constructor(id: number, title: string, description: string, interval: Interval){
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.done = false;
//         this.interval = interval;
//         this.daysLeft = this.CalcDays(interval);
//     }

//     CalcDays(interval: Interval): number{
//         switch(interval.unit){
//             case IntervalUnit.WEEK: {
//                 return interval.amount * 7;
//             }
//             case IntervalUnit.MONTH: {
//                 return interval.amount * 30;
//             }
//             case IntervalUnit.YEAR: {
//                 return interval.amount * 365;
//             }
//             default: {
//                 return interval.amount;
//             }
//         }
//     }
// }
