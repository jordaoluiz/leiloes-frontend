var usuario = document.getElementById('nome');
var idade = document.getElementById('idade');
var valorLance = document.getElementById('valorLance');
var btnCadastrar = document.getElementById('darLance');
var ulListaLeilao = document.getElementById('listaLeilao')

var leiloes = getLeiloes();
var lances = getLances();
var ts;

async function getLances(){
    var resp;
    await  $.ajax({
        url: "http://localhost:3000/leiloes/lances",
        cache: false,
        dataType: "json",
        success: function(response){
             resp = response['lances'];
        }
    });
    return resp;


}
async function getLeiloes(){
    var resp;
    await  $.ajax({
        url: "http://localhost:3000/leiloes",
        cache: false,
        dataType: "json",
        success: function(response){
             resp = response['leiloes'];
        }
    });
    return resp;
}
leiloes.then((resolve, rejected)=>{
    var leilao = resolve 
    leilao.map(el=>{
        var elLeilao = document.createElement('li');
        var nome = document.createTextNode(el.nome );
        var space = document.createTextNode(' || ')
        var valor = document.createTextNode('R$'+ el.valor )
        elLeilao.appendChild(nome)
        elLeilao.appendChild(space)
        elLeilao.appendChild(valor)
        ulListaLeilao.appendChild(elLeilao)
    })
})
lances.then((resolve, reject) => {
    var lances = resolve;
    lances.ForEach((el=>{
    }))
    document.body.append(table)
})
btnCadastrar.onclick = ()=>{

   
}
