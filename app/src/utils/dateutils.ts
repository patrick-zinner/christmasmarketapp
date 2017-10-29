
export class DateUtils {
    static isMoreThan24HoursAgo(date : Date) : boolean {
        let _24hours = 24 * 60 * 60 * 1000;
        let now = new Date();
        return (now.getTime() - date.getTime()) >= _24hours;
    }
}
