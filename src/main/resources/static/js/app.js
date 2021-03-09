const API = apimock
app = (function () {
    function getByAuthor(funcion) {
        return funcion.map(function(f){
            return {name:f.name,points:Object.keys(f.points).length};
        });
    }

    function getBlueprintsByNameAndAuthor(author, bpName){
        $("#current").text(bpName)
        return API.getBlueprintsByNameAndAuthor(author, bpName, draw);
    }

    function run() {
        var nombre = $('#autor').val();
        generarTable(nombre,API.getBlueprintsByAuthor(nombre,getByAuthor));
    }

    function draw(funcion) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log(canvas.width, canvas.height)
        funcion.points.map(function(f){
            console.log(f.x)
            ctx.lineTo(f.x,f.y);
            ctx.stroke();
        })
        ctx.closePath()
    }

    function generarTable(name,funcion) {
        $("#nombre").text(name+"'s")
        $("#cuerpo").html("");
        var total=0
        funcion.map(function(f) {
            $('#cuerpo')
                .append(
                  `<tr>
                    <td>`+f.name+`</td>
                    <td>`+f.points+`</td>`+
                    "<td><form><button type='button' onclick='onclick=app.getBlueprintsByNameAndAuthor( \"" +name +'" , "' +f.name +"\")')'>Open</button></form></td>"+
                  `</tr>`
                );
                console.log(f.points)
                total+=f.points
        });
        $("#total").text(total)
    }

    return {
        run: run,
        getBlueprintsByNameAndAuthor:getBlueprintsByNameAndAuthor
    }
})();