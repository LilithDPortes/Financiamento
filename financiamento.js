const Calcular = document.getElementById('btnCalcular');

function CalcularFinanciamento() {
    let rendaMensal = parseFloat(document.getElementById('txtRendaMensal').value);
    let valorBem = parseFloat(document.getElementById('txtValorBem').value);
    let valorEntrada = parseFloat(document.getElementById('txtValorEntrada').value);
    let taxaJuros = document.getElementById('txtTaxaJuros').value;
    let numeroPrestacoes = document.getElementById('txtNumeroPrestacoes').value;
    const divResultado = document.getElementById('divResultado');

    if (rendaMensal != "" && valorBem != "" && valorEntrada != "" && taxaJuros != "" && numeroPrestacoes != "") {
        taxaJuros = parseFloat("0.0" + taxaJuros.replace(".", "").replace(",", ""));

        valorEntrada = valorEntrada.toFixed(2);
        valorBem = valorBem.toFixed(2);
        let calculoParte1 = (valorBem - valorEntrada) * ((1 + taxaJuros)**numeroPrestacoes) * taxaJuros;
        let calculoParte2 = ((1 + taxaJuros)**numeroPrestacoes) - 1;
        let calculo = calculoParte1 / calculoParte2;

        let valorMaximo = rendaMensal * 30 / 100;
        let calculoResultado = parseFloat(calculo.toFixed(2));
        let valorMaximoResultado = parseFloat(valorMaximo.toFixed(2));
        let rendaMensalResultado = rendaMensal.toFixed(2);
        
        if (calculoResultado < valorMaximoResultado) {
            divResultado.textContent = `Seu financiamento foi APROVADO e o valor mensal das prestações é de R$ ${calculoResultado}.`;
        }else {
            divResultado.textContent = `Dado o contexto do seu financiamento, ele foi REPROVADO. Pois sua renda mensal é de R$ ${rendaMensalResultado}, o valor máximo das prestações que você pode pagar é de R$ ${valorMaximoResultado} e o valor mensal das prestações é de R$ ${calculoResultado}.`;
        }
    }else {
        divResultado.textContent = `Preencha os campos corretamente.`;
    }
}

Calcular.addEventListener('click', CalcularFinanciamento);