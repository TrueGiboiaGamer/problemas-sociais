function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    
    // Obter valores selecionados
    const q1 = form.querySelector('input[name="q1"]:checked');
    const q2 = form.querySelector('input[name="q2"]:checked');
    const q3 = form.querySelector('input[name="q3"]:checked');
    
    // Respostas corretas
    const correctAnswers = {
        q1: 'a', // Acesso desigual à educação
        q2: 'c', // Desemprego elevado
        q3: 'b'  // Integração social e cultural
    };

    // Verificar se todas as perguntas foram respondidas
    if (!q1 || !q2 || !q3) {
        resultDiv.textContent = "Por favor, responda todas as perguntas.";
        resultDiv.style.color = "red";
        return;
    }

    // Processar respostas
    const answers = {
        q1: q1.value,
        q2: q2.value,
        q3: q3.value
    };

    let resultText = '<p>Obrigado por responder ao questionário!</p>';
    for (let [question, answer] of Object.entries(answers)) {
        const isCorrect = answer === correctAnswers[question];
        resultText += `
            <p><strong>${getQuestionText(question)}:</strong> ${getAnswerText(answer)} - ${isCorrect ? 'Correto' : `Incorreto. A resposta correta é: ${getAnswerText(correctAnswers[question])}`}</p>
        `;
    }

    resultDiv.innerHTML = resultText;
    resultDiv.style.color = "black";
}

function getQuestionText(question) {
    const questionTexts = {
        q1: 'Pergunta 1',
        q2: 'Pergunta 2',
        q3: 'Pergunta 3'
    };
    return questionTexts[question] || 'Pergunta Desconhecida';
}

function getAnswerText(value) {
    const answers = {
        a: "A) Acesso desigual à educação",
        b: "B) Integração social e cultural",
        c: "C) Desemprego elevado",
        d: "D) Disponibilidade de tecnologia avançada"
    };
    return answers[value] || "Resposta não disponível";
}
