function getEndereco() {
    const cep = document.getElementById("cep").value;
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    const regiao = document.getElementById("regiao");


    // Resetando os campos com seus rótulos
    logradouro.innerText = "Logradouro:";
    bairro.innerText = "Bairro:";
    cidade.innerText = "Cidade:";
    estado.innerText = "Estado:";
    regiao.innerText = "Região:";

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                logradouro.innerText = 'CEP inválido';
                bairro.innerText = cidade.innerText = estado.innerText = regiao.innerText = '';
                return;
            }

            // Atualizando os campos com os dados
            logradouro.innerText += ` ${data.logradouro || '-'}`;
            bairro.innerText += ` ${data.bairro || '-'}`;
            cidade.innerText += ` ${data.localidade || '-'}`;
            estado.innerText += ` ${data.uf || '-'}`;
            regiao.innerText += ` ${getRegiaoPorEstado(data.uf)}`;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do CEP:', error);
        });
}

// Função auxiliar para identificar a região do Brasil com base no estado (UF)
function getRegiaoPorEstado(uf) {
    const regioes = {
        'Norte': ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'],
        'Nordeste': ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
        'Centro-Oeste': ['DF', 'GO', 'MT', 'MS'],
        'Sudeste': ['ES', 'MG', 'RJ', 'SP'],
        'Sul': ['PR', 'RS', 'SC']
    };

    for (const regiao in regioes) {
        if (regioes[regiao].includes(uf)) {
            return regiao;
        }
    }
    return '-';
}
