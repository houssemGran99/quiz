/* document.getElementById('submit').addEventListener('click', function() {
    const options = document.querySelectorAll('.option');
    let selectedOption = null;

    options.forEach(option => {
        if (option.classList.contains('selected')) {
            selectedOption = option;
        }
    });

    if (selectedOption && selectedOption.id === 'option1') {
        document.getElementById('result').textContent = 'إجابة صحيحة!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = 'إجابة خاطئة!';
        document.getElementById('result').style.color = 'red';
    }
});

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        this.classList.add('selected');
    });
}); */

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/questions")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const questionList = document.querySelector(".list-group");
            questionList.innerHTML = "";
            
            data.forEach(q => {
                const questionItem = document.createElement("li");
                questionItem.classList.add("list-group-item");
                questionItem.innerHTML = `<strong>${q.text}</strong>`;
                
                const answerList = document.createElement("ul");
                answerList.classList.add("list-group", "mt-2");
                
                q.answers.forEach(a => {
                    const answerItem = document.createElement("li");
                    answerItem.classList.add("list-group-item");
                    answerItem.textContent = a;
                    answerList.appendChild(answerItem);
                });
                
                questionItem.appendChild(answerList);
                questionList.appendChild(questionItem);
            });
        })
        .catch(error => console.error("Error fetching questions:", error));
});
