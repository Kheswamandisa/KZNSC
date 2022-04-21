
    async function fetchDistrict() {

        try {
            const reponse = await fetch ('https://sfrs-j75dy.ondigitalocean.app/api/listDistricts',{method:'POST'});
            if (!reponse.ok){
                throw new Error(`Failed to fetch district: ${reponse.status}`)
            }
            return reponse.json();
        }
        catch(e){
            console.log(e);
        }
            }
    
    function  listDistrict(json)
    {
        var obj = json;
        var Msg = "Name      Province\n";
        var Dsp = document.getElementById("Data")
        Dsp.innerHTML = '<tr> <th> District Name </th> <th> Province </th></tr> ' ;
         for(var i = 0; i < obj.data.length; i++)
         {
             Msg += obj.data[i].name+"        "+ obj.data[i].province.name +"\n";
             Dsp.innerHTML += '<tr> <td>'+ obj.data[i].name + '</td> <td>' + obj.data[i].province.name + '</td> </tr>' ;

         }
         return Msg;
    }
    // function capitalizeFirstLLetter(str) {
    //     return str.charAt(0).toUpperCase() + str.slice(1)
    // }
    fetchDistrict().then(function(json){
        console.log(listDistrict(json))
        })