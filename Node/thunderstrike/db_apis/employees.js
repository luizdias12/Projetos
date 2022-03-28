const database = require('../services/database.js');

const baseQuery = 
 `select f.chapa, f.nome, f.codfuncao, fu.nome funcao, f.codhorario, f.codsecao, s.descricao secao, f.codpessoa, p.cpf, f.codfilial, p.dtnascimento, f.dataadmissao, f.codsituacao,
 p.sexo,
 (select ff.chapa from PFUNC@RM ff where ff.codpessoa = f.codpessoa and ff.codsituacao <> 'D') chapaatual
 from PFUNC@RM f, PPESSOA@RM p, PFUNCAO@RM fu, PSECAO@RM s
 where p.codigo = f.codpessoa
 and f.codfuncao = fu.codigo
 and f.codsecao = s.codigo`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.employee_id =  String(context.id);

    query += `\nand f.chapa = :employee_id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
 `insert into employees (
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    job_id,
    salary,
    commission_pct,
    manager_id,
    department_id
  ) values (
    :first_name,
    :last_name,
    :email,
    :phone_number,
    :hire_date,
    :job_id,
    :salary,
    :commission_pct,
    :manager_id,
    :department_id
  ) returning employee_id
  into :employee_id`;

async function create(emp) {
  const employee = Object.assign({}, emp);

  employee.employee_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, employee);

  employee.employee_id = result.outBinds.employee_id[0];

  return employee;
}

module.exports.create = create;