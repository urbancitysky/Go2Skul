
//create user
db.createUser({ 
	user: "sean",
	pwd: "1234",  
	roles: [ "readWrite", "dbAdmin" ]
});


//---------------------------------------------------
db.students.find();


db.createCollection('students');

//insert data to db
db.students.insert(
	[
		{
			_id: 000000000000,
			firstName: "John", 
			lastName: "Huang"
		}
	]
);


db.students.insert(
	[{firstName: "John", lastName: "Huang"}, {firstName: "Sean", lastName: "Chen"}]
);

//remove
db.students.remove({firstName:"Sean"});

//remove just one
db.students.remove({firstName:"Sean"},{justOne:true});

/*
* Update cmd is not working yet
*/
/*
db.students.update({firstName: "John"},{firstName: "John", lastName: "Huang"})
db.students.update({firstName: "John"},{$set{id:0000000000}});
db.students.update({firstName: "John"},{firstName: "John", lastName: "Chen"}));
db.students.update({firstName: "John"},{$rename:("gender":"sex")}));
*/
//---------------------------------------------------
db.classes.find();

db.classes.remove({className: "My class"});

db.createCollection('classes');

db.removeCollection('classes');

db.classes.insert(
   {
        _id: ObjectId(),
        className: 'My class'
        student_ids: ObjectId(000000000000)
    }
);

db.classes.insert(
   {
        _id: ObjectId(),
        className: 'My class',
        "student_ids": [ 
			"00000000"
		]
    }
);



//---------------------------------------------------
//use $lookup to connect Collections
db.students.aggregate([
	{
	   $lookup:
		 {
		   from: "students",
		   localField: "_id",
		   foreignField: "student_ids",
		   as: "list"
		 }
	}
]);