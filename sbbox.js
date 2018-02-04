$( function() {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#add-name").click(function(e){
        e.preventDefault();
        $('.sidebar-nav').append("<li class='name-wrapper'><input type='text' class='names'></li>")
    });

    $("#generate-box").click(function(e){
        e.preventDefault();
        $('tbody').empty();
        generateBox();
    })

    function getNames(){
        var names = [];
        var $names = $(".names");
        var multiplier = Math.floor(100 / $names.length);

        $(".names").each(function(){
            for(var i=0; i < multiplier; i++){
                names.push($(this).val());
            }
        });

        if(names.length !== 100){
            var count = 100 - names.length;
            for(var i=0; i < count; i++){
                names.push("HOUSE");
            }
        }
        return names;
    }

    function getTeams(){
        var teams = [];
        $(".teams").each(function(){
            teams.push($(this).val());
        });
        return teams;
    }

    function generateBox(){
        var teams = _.shuffle(getTeams());
        var names = _.shuffle(getNames());
        var numbers = _.shuffle([0,1,2,3,4,5,6,7,8,9])
        var topTeam = "<tr><td colspan='12'>" + teams[0] + "</td></tr>";
        $('tbody').append(topTeam);
        var topRow = "<tr><td class='rotate' rowspan='12'>" + teams[1] + "</td><td></td>";
        var arr = [];

        numbers.forEach(function(num){
            topRow = topRow + "<td class='number-box'>" + num + "</td>";
        });

        $('tbody').append(topRow + "<tr>");

        numbers = _.shuffle([0,1,2,3,4,5,6,7,8,9]);

        var rowMarkup = "";

        names.forEach(function(name, index){
            rowMarkup = rowMarkup + "<td>" + name + "</td>";

            if((index + 1) % 10 == 0){
                rowMarkup = "<tr><td class='number-box'>" + numbers.pop() + "</td>" + rowMarkup + "</tr>";
                $('tbody').append(rowMarkup);
                rowMarkup = "";    
            }

        })


    }

});