class StudentController {
    constructor(){

    }

    getMonogoDB(req, res, next){
        //use middleware to get your mongoDB data
        console.log('getMonogoDB');
        next();
    }

    get(req, res){
        // handle data
        res.send('hello');
    }
}

module.exports = new StudentController();
