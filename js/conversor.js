async function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("currency").value;
    const toCurrency = document.getElementById("targetCurrency").value;
    const resultEl = document.getElementById("conversionResult");

    if (isNaN(amount) || amount <= 0) {
        resultEl.innerText = "Digite um valor válido.";
        return;
    }

    if (fromCurrency === toCurrency) {
        resultEl.innerText = `O valor convertido é ${amount.toFixed(2)} ${toCurrency}`;
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
        const data = await response.json();

        if (data.result) {
            resultEl.innerText = `${amount} ${fromCurrency} = ${data.result.toFixed(2)} ${toCurrency}`;
        } else {
            resultEl.innerText = "Erro ao converter moeda.";
        }
    } catch (error) {
        console.error("Erro na conversão:", error);
        resultEl.innerText = "Erro ao conectar à API de câmbio.";
    }
}
