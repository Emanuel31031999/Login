async function converterMoeda() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("currency").value;
    const toCurrency = document.getElementById("targetCurrency").value;
    const resultEl = document.getElementById("conversionResult");

    // Validação
    if (!amount || amount <= 0) {
        resultEl.innerText = "Informe um valor válido.";
        return;
    }

    // URL da API
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Acessa o valor convertido
        const converted = data.rates[toCurrency];

        resultEl.innerText = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
    } catch (error) {
        console.error("Erro na conversão:", error);
        resultEl.innerText = "Erro ao converter. Tente novamente.";
    }
}
