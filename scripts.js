function pesquisar(){
    var input,filtro,menu,menuItens, links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        links = menuItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
        }else{
            menuItens[i].style.display="none";
        }
    }
}

/*Módulo Matemática Financeira - JUROS*/
const url1 = 'http://pb.utfpr.edu.br/savepi/modulo1taxasequivalentes.php'
const url2 = 'http://pb.utfpr.edu.br/savepi/modulo1comparativojuros.php'
const vpEl = document.querySelector('#vpEl')
const vfEl = document.querySelector('#vfEl')
const tjEl = document.querySelector('#tjEl')
const npEl = document.querySelector('#npEl')
const cmjEl = document.querySelector('#cmjEl')
/*Módulo Matemática Financeira - TAXA DE JUROS*/
const url3 = 'http://pb.utfpr.edu.br/savepi/modulo1nominalefetiva.php'
const url4 = 'http://pb.utfpr.edu.br/savepi/modulo1taxasequivalentes.php'
const url5 = 'http://pb.utfpr.edu.br/savepi/modulo1taxadejurosvariavel1.php'
const url6 = 'http://pb.utfpr.edu.br/savepi/modulo1taxajurosreal.php'
const url7 = 'http://pb.utfpr.edu.br/savepi/modulo1selicxpoupanca.php'
const ctneEl = document.querySelector('#ctneEl')
const cteEl = document.querySelector('#cteEl')
const tjvEl = document.querySelector('#tjvEl')
const tjrEl = document.querySelector('#tjrEl')
const sXpEl = document.querySelector('#sXpEl')
/*Módulo Matemática Financeira - SÉRIES UNIFORMES*/
const url8 = 'http://pb.utfpr.edu.br/savepi/modulo1uniformes.php'
const vpsuEl = document.querySelector('#vpsuEl')
const vfsuEl = document.querySelector('#vfsuEl')
const vPresEl = document.querySelector('#vPresEl')
const tjsuEl = document.querySelector('#tjsuEl')
const npsuEl = document.querySelector('#npsuEl')
/*Módulo Matemática Financeira - SÉRIES NÃO-UNIFORMES*/
const url9 = 'http://pb.utfpr.edu.br/savepi/modulo1presente.php'
const url10 = 'http://pb.utfpr.edu.br/savepi/modulo1futuro.php'
const url11 = 'http://pb.utfpr.edu.br/savepi/modulo1taxa.php'
const vpsnuEl = document.querySelector('#vpsnuEl')
const vfsnuEl = document.querySelector('#vfsnuEl')
const tjsnuEl = document.querySelector('#tjsnuEl')
/*Módulo Matemática Financeira - SÉRIES PERPÉTUAS*/
const url12 = 'http://pb.utfpr.edu.br/savepi/modulo1serieperpetuaconstante.php'
const url13 = 'http://pb.utfpr.edu.br/savepi/modulo1serieperpetuaantecipadas.php'
const url14 = 'http://pb.utfpr.edu.br/savepi/modulo1serieperpetuacrescente.php'
const spupEl = document.querySelector('#spupEl')
const spuaEl = document.querySelector('#spuaEl')
const spvEl = document.querySelector('#spvEl')
/*Módulo Matemática Financeira - SÉRIES FINITAS*/
const url15 = 'http://pb.utfpr.edu.br/savepi/modulo1seriefinitapostecipada.php'
const url16 = 'http://pb.utfpr.edu.br/savepi/modulo1seriefinitaantecipada.php'
const sfupEl = document.querySelector('#sfupEl')
const sfuaEl = document.querySelector('#sfuaEl')
/*Módulo Matemática Financeira - AMORTIZAÇÃO*/
const url17 = 'http://pb.utfpr.edu.br/savepi/modulo2.php'
const saEl = document.querySelector('#saEl')
/*Módulo Custo do Capital*/
const url18 = 'http://pb.utfpr.edu.br/savepi/modulo1custodocapitalproprio1.php'
const url19 = 'http://pb.utfpr.edu.br/savepi/modulo1custodocapitalproprio2.php'
const url20 = 'http://pb.utfpr.edu.br/savepi/modulo1customedioponderadocapital1.php'
const url21 = 'http://pb.utfpr.edu.br/savepi/modulo1customedioponderadocapital2.php'
const capm1El = document.querySelector('#capm1El')
const capm2El = document.querySelector('#capm2El')
const wacc1El = document.querySelector('#wacc1El')
const wacc2El = document.querySelector('#wacc2El')
/*Análise Custo Volume Lucro*/
const url22 = 'http://pb.utfpr.edu.br/savepi/modulo5simples1.php'
const url23 = 'http://pb.utfpr.edu.br/savepi/modulo5simplesN.php'
const url24 = 'http://pb.utfpr.edu.br/savepi/modulo5abc.php'
const url25 = 'http://pb.utfpr.edu.br/savepi/modulo5MC.php'
const acvld1El = document.querySelector('#acvld1El')
const acvldnEl = document.querySelector('#acvldnEl')
const acvldabcEl = document.querySelector('#acvldabcEl')
const acvle1El = document.querySelector('#acvle1El')
/*Metodologia Clássica*/
const url26 = 'http://pb.utfpr.edu.br/savepi/modulo12simples1.php'
const mcEl = document.querySelector('#mcEl')
/*METODOLOGIA MULTI-ÍNDICE AMPLIADA 1 PROJETO - RECURSOS PRÓPRIOS*/
const url27 = 'http://pb.utfpr.edu.br/savepi/modulo3simples1.php'
const url28 = 'http://pb.utfpr.edu.br/savepi/modulo3simplesQuantidadePrecoCusto.php'
const url29 = 'http://pb.utfpr.edu.br/savepi/modulo3simplesCustoseReceitas.php'
const fccr1El = document.querySelector('#fccr1El')
const qpc1El = document.querySelector('#qpc1El')
const cr1El = document.querySelector('#cr1El')
/*METODOLOGIA MULTI-ÍNDICE AMPLIADA 2 PROJETO - RECURSOS PRÓPRIOS, FINANCIAMENTO E LEASING*/
const url30 = 'http://pb.utfpr.edu.br/savepi/modulo3completo.php'
const url31 = 'http://pb.utfpr.edu.br/savepi/modulo3completoQuantidadePrecoCusto.php'
const url32 = 'http://pb.utfpr.edu.br/savepi/modulo3CustoseReceitas.php'
const fccr2El = document.querySelector('#fccr2El')
const qpc2El = document.querySelector('#qpc2El')
const cr2El = document.querySelector('#cr2El')
/*METODOLOGIA MULTI-ÍNDICE AMPLIADA 2 PROJETOS OU MAIS - RECURSOS PRÓPRIOS, FINANCIAMENTO E LEASING*/
const url33 = 'http://pb.utfpr.edu.br/savepi/modulo3simples2.php'
const url34 = 'http://pb.utfpr.edu.br/savepi/modulo3simples2diferente.php'
const url35 = 'http://pb.utfpr.edu.br/savepi/modulo3simplesN.php'
const url36 = 'http://pb.utfpr.edu.br/savepi/modulo3simplesNdiferentes.php'
const mmia2iEl = document.querySelector('#mmia2iEl')
const mmia2dEl = document.querySelector('#mmia2dEl')
const mmianiEl = document.querySelector('#mmianiEl')
const mmiandEl = document.querySelector('#mmiandEl')



function openInNewTab(url1) {
    const win = window.open(url1, '_blank')
    win.focus()
}

/*Módulo Matemática Financeira - JUROS*/
vpEl.addEventListener('click', () => {
    openInNewTab(url1)
})
vfEl.addEventListener('click', () => {
    openInNewTab(url1)
})
tjEl.addEventListener('click', () => {
    openInNewTab(url1)
})
npEl.addEventListener('click', () => {
    openInNewTab(url1)
})
cmjEl.addEventListener('click', () => {
    openInNewTab(url2)
})

/*Módulo Matemática Financeira - TAXA DE JUROS*/
ctneEl.addEventListener('click', () => {
    openInNewTab(url3)
})
cteEl.addEventListener('click', () => {
    openInNewTab(url4)
})
tjvEl.addEventListener('click', () => {
    openInNewTab(url5)
})
tjrEl.addEventListener('click', () => {
    openInNewTab(url6)
})
sXpEl.addEventListener('click', () => {
    openInNewTab(url7)
})

/*Módulo Matemática Financeira - SÉRIES UNIFORMES*/
vpsuEl.addEventListener('click', () => {
    openInNewTab(url8)
})
vfsuEl.addEventListener('click', () => {
    openInNewTab(url8)
})
vPresEl.addEventListener('click', () => {
    openInNewTab(url8)
})
tjsuEl.addEventListener('click', () => {
    openInNewTab(url8)
})
npsuEl.addEventListener('click', () => {
    openInNewTab(url8)
})
/*Módulo Matemática Financeira - SÉRIES NÃO-UNIFORMES*/
vpsnuEl.addEventListener('click', () => {
    openInNewTab(url9)
})
vfsnuEl.addEventListener('click', () => {
    openInNewTab(url10)
})
tjsnuEl.addEventListener('click', () => {
    openInNewTab(url11)
})
/*Módulo Matemática Financeira - SÉRIES PERPÉTUAS*/
spupEl.addEventListener('click', () => {
    openInNewTab(url12)
})
spuaEl.addEventListener('click', () => {
    openInNewTab(url13)
})
spvEl.addEventListener('click', () => {
    openInNewTab(url14)
})
/*Módulo Matemática Financeira - SÉRIES FINITAS*/
sfupEl.addEventListener('click', () => {
    openInNewTab(url15)
})
sfuaEl.addEventListener('click', () => {
    openInNewTab(url16)
})
/*Módulo Matemática Financeira - AMORTIZAÇÃO*/
saEl.addEventListener('click', () => {
    openInNewTab(url17)
})
/*Módulo Custo do Capital*/
capm1El.addEventListener('click', () => {
    openInNewTab(url18)
})
capm2El.addEventListener('click', () => {
    openInNewTab(url19)
})
wacc1El.addEventListener('click', () => {
    openInNewTab(url20)
})
wacc2El.addEventListener('click', () => {
    openInNewTab(url21)
})
/*Análise Custo Volume Lucro*/
acvld1El.addEventListener('click', () => {
    openInNewTab(url22)
})
acvldnEl.addEventListener('click', () => {
    openInNewTab(url23)
})
acvldabcEl.addEventListener('click', () => {
    openInNewTab(url24)
})
acvle1El.addEventListener('click', () => {
    openInNewTab(url25)
})
/*Metodologia Clássica*/
mcEl.addEventListener('click', () => {
    openInNewTab(url26)
})
/*METODOLOGIA MULTI-ÍNDICE AMPLIADA 1 PROJETO - RECURSOS PRÓPRIOS*/
fccr1El.addEventListener('click', () => {
    openInNewTab(url27)
})
qpc1El.addEventListener('click', () => {
    openInNewTab(url28)
})
cr1El.addEventListener('click', () => {
    openInNewTab(url29)
})
/*METODOLOGIA MULTI-ÍNDICE AMPLIADA 2 PROJETO - RECURSOS PRÓPRIOS, FINANCIAMENTO E LEASING*/
fccr2El.addEventListener('click', () => {
    openInNewTab(url30)
})
qpc2El.addEventListener('click', () => {
    openInNewTab(url31)
})
cr2El.addEventListener('click', () => {
    openInNewTab(url32)
})
/*METODOLOGIA MULTI-ÍNDICE AMPLIADA 2 PROJETOS OU MAIS - RECURSOS PRÓPRIOS, FINANCIAMENTO E LEASING*/
mmia2iEl.addEventListener('click', () => {
    openInNewTab(url33)
})
mmia2dEl.addEventListener('click', () => {
    openInNewTab(url34)
})
mmianiEl.addEventListener('click', () => {
    openInNewTab(url35)
})
mmiandEl.addEventListener('click', () => {
    openInNewTab(url36)
})
