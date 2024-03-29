
/* Every student receives a grade

 in the inclusive range from 0 to 100
 .
 Any grade
 less than 40

 is a failing grade.

 Sam is a professor at the university and likes to round each student's grade

 according to these rules:

 If the difference between the grade

 and the next multiple of 5 is less than 3, round grade up to the next multiple of 5 
 round grade.
 If the value of grade
 is less than 38, no rounding occurs as the result will still be a failing grade.
 */

function gradingStudents(grades: number[]): number[] {
	let gradesRounded:number[]=[];
	for(let i=0;i<grades.length;i++){
	if((grades[i]%5) <3 || grades[i]<38){
		gradesRounded.push(grades[i]);
			}
	else{
		const add = 5-(grades[i]%5)
		gradesRounded.push(grades[i]+ add);
	}
		
	}
return gradesRounded
}

// const grade = parseInt(readLine());
// const next = grade % 10 > 5 ? tens + 10 : tens + 5; 