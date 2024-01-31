<?php

$qry['eu'] = "SELECT MATRICULA, NOE FROM PCEMPR WHERE MATRICULA = '31505' ";

$qry['lista_func'] = "SELECT f.chapa, initcap(f.nome) nome, f.codfuncao, fu.nome funcao, f.codhorario, f.codsecao, s.descricao secao, f.codpessoa, p.cpf, f.codfilial, p.dtnascimento, f.dataadmissao, f.codsituacao,
p.sexo,
(SELECT ff.chapa from PFUNC@RM ff where ff.codpessoa = f.codpessoa and ff.codsituacao <> 'D') chapaatual
from PFUNC@RM f, PPESSOA@RM p, PFUNCAO@RM fu, PSECAO@RM s
where p.codigo = f.codpessoa
and f.codfuncao = fu.codigo
and f.codsecao = s.codigo
and f.chapa = :chapa";

$qry['jaExiste'] = "SELECT CODFILIAL,PDV,REGRA,CUPOM,CODIGOOPERADOR FROM VILFLUXOAUDITORIA WHERE CODFILIAL = :1 AND PDV = :2 AND REGRA = :3 AND CUPOM = :4 AND CODIGOOPERADOR = :5";

$ins['fluxo'] = "INSERT INTO VILFLUXOAUDITORIA (NUMCONTROLE, CODFILIAL, PDV, REGRA, OBSERVACAO, CUPOM, CODIGOOPERADOR, CODFUNCLANC, DATALANC, ORIGEM, DATAHORA) " .
"VALUES (:1, :2, :3, :4, :5, :6, :7, :8, SYSDATE, 'Auditor Fiscal Central', TO_DATE(:9, 'YYYY/MM/DD HH24:MI:SS'))";

$ins['fluxo_itens'] = "INSERT INTO VILFLUXOAUDITORIAI (NUMCONTROLE, CODPROD, DATAHORA, QUANTIDADE, VALORUNIDADE, PERDAGANHO, REGRA, PARECER, OPERACAO)" .
"VALUES (:1, :2, TO_DATE(:3, 'YYYY/MM/DD HH24:MI:SS'), :4, :5, :6, :7, :8, :9)";

$seq['vilseq_fluxo'] = "SELECT VILSEQ_FLUXO.NEXTVAL AS SEQ FROM DUAL";

?>