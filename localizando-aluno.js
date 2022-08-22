const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
                                 //3
const mediasDosAlunos = [10, 7, 9, 6];

//includes -> booleano 
//indexOf -> 3

let listaDenotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDenotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDenotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0]  [3]
        return listaDenotasEAlunos[0][indice] + ' , sua média é ' + listaDenotasEAlunos[1][indice]
    } else {
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeNota("pio"))