var users = [
	{
		id:1,
		firstName:'Vasiliy',
		lastName:'Pupkin',
		birthDay:'06.12.1985',
		phones:[
			'89162358649',
			'89295671585'
		]
	},
	{
		id:2,
		firstName:'Ivan',
		lastName:'Petrov',
		birthDay:'12.06.1991',
		phones:[
			'89032569815'
		]
	},
	{
		id:3,
		firstName:'Piotr',
		lastName:'Ivanov',
		birthDay:'05.07.1963',
		phones:[
			'89156325470',
			'89020004789'
		]
	}
];

function init() {
	showUsers(users);
}

function printUser(user) {
	var row = document.createElement('div');
	row.id = 'u_' + user.id;
	row.className = 'row';
	
	var colCont = '<div class="col">'+user.firstName+'</div>';
	colCont += '<div class="col">'+user.lastName+'</div>';
	colCont += '<div class="col">'+user.birthDay+'</div>';
	colCont += '<div class="col">'+user.phones.join('<br/>')+'</div>';
	colCont += '<div class="del" onclick="delBtnHandler(event)" title="удалить">X</div>';
	row.innerHTML = colCont;
	
	return row;
}

function showUsers(users) {
	var userTable = document.getElementById('usersTable');
	userTable.innerHTML = null;
	users.forEach(function (user) {
		userTable.insertBefore(printUser(user), userTable.childNodes[0]);
	});
}

function removeUser(users, id) {
	var l = users.length;
	for(var i = 0; i < l; i ++) {
		if(users[i].id == id) {
			users.splice(i, 1);
			break;
		}
	}
}

function csvFormat(users) {
	return users.map(function(user) {
		return Object.keys(user).map(function(key) {
			if(typeof user[key] == 'string' || typeof user[key] == 'number') return ''+user[key]+'';
			else return user[key].map(function(phone) {
				return ''+phone+'';
			}).join(';');
		}).join(';');
	}).join('\r\n');
}

function addBtnHandler(evt) {
	var params = evt.target.parentNode.getElementsByTagName('input');
	var l = params.length;
	var user = { id:new Date().getTime().toString(16) };
	for(var i = 0; i < l; i ++) {
		user[params[i].name] = params[i].name == 'phones' ? params[i].value.split(',') : params[i].value;
		params[i].value = '';
	}
	users.push(user);
	showUsers(users);
}

function delBtnHandler(evt) {
	var userId = evt.target.parentNode.id.split('_')[1];
	removeUser(users, userId);
	showUsers(users);
}
