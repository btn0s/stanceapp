
app = {

    data : {},

    /**
     * Loops over all inputs and saves them to the data variable
     * Inputs must be child to a container with the class {name}-info
     */
    saveData : function() {
        var self = this;
        $('[class*="-info"]').each(function(ind, val) {
            // We can also decide section with data-section attribute instead of class if it becomes an issue
            var section = val.className.match(/[\S]{1,}-info/);
            var class_name = '.{0}'.format(section);
            var section_info = {};
            $('input, select, textarea', $(class_name)).each(function() {
                var ident = $(this).attr('id');
                section_info[ident] = $(this).val();
            });
            self.data[section] = section_info;
        });

        console.log(self.data);
    },

    bindActions : function() {
        var self = this;
        $('input, select, textarea').on('blur', function() {
            self.saveData();
        });

        // No submit button yet, but dropped this here for future use
        $('#submit').on('click', function() {
            self.saveData();
        });
    }
};

$(document).ready(function() {
    app.bindActions();
});


// Function for string formatting. Use like
// 'This is a {0} string that can be {1} {2}.'.format('Cool', 'formatted')
// Output >> This is a Cool string that can be formatted {2}.
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number] : match;
        });
    };
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
