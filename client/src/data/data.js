export class CharacterData {
    constructor(id, first, middle, last, img) {
        this.id = id;
        this.first = first;
        this.middle = middle;
        this.last = last;
        this.img = img;
    }
}

export class EventDate {
    constructor(year, month, day, hours, minutes) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
    }
}

export class EventData {
    constructor(id, date, description, characters) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.characters = characters;
    }
}

export function getMonth(month) {
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            throw new Error('Specified months must be an int number between 0 and 11');
    }
}
