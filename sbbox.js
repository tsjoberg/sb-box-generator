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
        generateBox();
    })

    function getNames(){
        var names = [];
        var $names = $(".names");
        var multiplier = Math.floor(100 / $names.length);

        console.log(multiplier);

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
        console.log(names.length);
        return names;
    }

    function generateBox(){
        var names = _.shuffle(getNames());
        var numbers = _.shuffle([0,1,2,3,4,5,6,7,8,9]);
        var topRow = "<tr><td></td>";
        var arr = [];

        numbers.forEach(function(num){
            topRow = topRow + "<td>" + num + "</td>";
        });

        $('tbody').append(topRow + "<tr>");

        numbers = _.shuffle([0,1,2,3,4,5,6,7,8,9]);

        var rowMarkup = "";

        names.forEach(function(name, index){
            console.log(name, index);

            rowMarkup = rowMarkup + "<td>" + name + "</td>";

            console.log(rowMarkup);

            if((index + 1) % 10 == 0){
                rowMarkup = "<tr><td>" + numbers.pop() + "</td>" + rowMarkup + "</tr>";
                console.log('inside append', rowMarkup);
                $('tbody').append(rowMarkup);
                rowMarkup = "";    
            }

        })


    }

});