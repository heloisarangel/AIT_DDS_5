for (let aula of ambiente) {
    linhas += '<tr>';
    linhas += '<td>'+abreviaambiente(aula.turma)+'</td>';
    linhas += '<td>'+abreviaambiente(aula.turma)+'</td>';
    linhas += '</tr>';
}

tabela_aulas.innerHTML += linhas;

