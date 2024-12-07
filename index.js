const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js");
var gerarFaturaStr = require("./apresentacao.js");

/* function gerarFaturaHTML(fatura, calc){
  let faturaStr = `<html>\n`;
  faturaStr += `<p> Fatura ${fatura.cliente} </p>\n`;
  faturaStr += `<ul>\n`;
  for (let apre of fatura.apresentacoes) {
    faturaStr += `<li>  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
  }
  faturaStr += `</ul>\n`;
  faturaStr += `<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
  faturaStr += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n`;
  faturaStr += `</html>\n`;
  return faturaStr;
} */

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
// const faturaHTML = gerarFaturaHTML(faturas, calc);
console.log(faturaStr);
// console.log(faturaHTML);
