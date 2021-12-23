const alunos = [
{ nome: 'Júnior',
  nota: 10,
  turma: '1B'
},
{ nome: 'Stephany',
  nota: 6.5,
  turma: '2B'
},
{ nome: 'José',
  nota: 5,
  turma: '1C'
},
{ nome: 'Anna',
  nota: 8,
  turma: '2A'
}
];


function alunosAprovados(array, media){
    let aprovados = [];

    for(let i = 0; i < array.length; i++){

        const {nome, nota} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));