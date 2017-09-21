$(document).ready(function () {

    let list = [{
        name: '',
        type: 'diy',
        instructions: ["these are instructions"],
        solution: ["this is the solution"]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'challenge',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'challenge',
        instructions: [""],
        solution: [""]
    },



    ];

	/*
	,{
		name:'',
		type: 'diy',
        instructions: []
        solution:[]
	}
	*/

    //Add the DIY and Challenges
    let diyCount = 1, chalCount = 1, downloadCount = 1;

    for (let item in list) {
        if (list[item].type == 'diy') {
            addItem(diyCount, list[item]);
            diyCount++;
        } else if (list[item].type == 'challenge') {
            addItem(chalCount, list[item]);
            chalCount++;
        }
    }

    //Hide everyting and only show div clicked on
    $('section div').hide();
    $('menu li').click(function (evt) {
        //If click on menu item
        evt.preventDefault();
        let divID = $(this).attr('id') + '-section'; //Get relevant ID
        $('section div').hide();
        $('#' + divID).show();
    });

    function addItem(itemCount, item) {
        //Adds in an element to the menu list and section
        let listID = (item.type == 'diy') ? 'diy' + itemCount : 'chal' + itemCount
            , divID = ((item.type == 'diy') ? 'diy' + itemCount : 'chal' + itemCount) + '-section'
            , title = '<h2>' + ((item.name.length == 0) ? ((item.type == 'diy') ? 'DIY ' + itemCount : 'Challenge #' + itemCount) : item.name) + '</h2>'
            , instructions = '';
            //, solution = '';
        //Make the list of instructions
        for (let i in item.instructions) {
            instructions += '<li>' + item.instructions[i] + '</li>';
        }

        //Make the list of solutions
        //for (let i in item.solution) {
          //  solutions += '<li>' + item.solution[i] + '</li>';
        //}


        //Insert into the DOC
        $('menu ul').append('<li id="' + listID + '" class="">' + title + '</li>');
        $('section').append('<div id="' + divID + '">' + title + '<ul>' + instructions + '</ul></div>');
    }

});