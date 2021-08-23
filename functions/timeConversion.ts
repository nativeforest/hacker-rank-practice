//Given a time in
//-hour AM/PM format, convert it to military (24-hour) time.
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 



function timeConversion(s: string): string {
    let vector = s.split(":")
    let newTime;

    if(s.includes("PM")){
        if(Number(vector[0])!=12){
            let hour24Format = Number(vector[0]) + 12;
            vector[0]=String(hour24Format);}
        newTime = vector.join(':');
        return newTime.replace('PM','')
        
    }else {
        if(Number(vector[0])!=12){
            newTime= s.replace("AM","");
            return newTime }
        vector[0]='00'
        newTime = vector.join(':')
        return  newTime.replace('AM','')
    }
}