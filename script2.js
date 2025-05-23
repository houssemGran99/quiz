
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://vps-d19efc6b.vps.ovh.net:3000/api/questions")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Received questions:", data);
            
            const questionList = document.querySelector(".list-group");
            questionList.innerHTML = ""; // Clear existing content
            
            data.forEach((q, questionIndex) => {
                // Create question container
                const questionItem = document.createElement("li");
                questionItem.classList.add("list-group-item", "question-item");
                
                // Add question text
                questionItem.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <strong>${q.text}</strong>
                        <span class="badge bg-primary">Question ${questionIndex + 1}</span>
                    </div>
                `;
                
                // Create answers list
                const answerList = document.createElement("ul");
                answerList.classList.add("list-group", "mt-2");
                
                q.answers.forEach((a, answerIndex) => {
                    const answerItem = document.createElement("li");
                    answerItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
                    
                    // Highlight correct answer
                    if (answerIndex.toString() === q.correctAnswer) {
                        answerItem.classList.add("list-group-item-success");
                        answerItem.innerHTML = `
                            ${a}
                            <span class="badge bg-success">Correct</span>
                        `;
                    } else {
                        answerItem.textContent = a;
                    }
                    
                    answerList.appendChild(answerItem);
                });
                
                questionItem.appendChild(answerList);
                questionList.appendChild(questionItem);
            });
        })
        .catch(error => {
            console.error("Error fetching questions:", error);
            // Show error message to user
            const questionList = document.querySelector(".list-group");
            questionList.innerHTML = `
                <li class="list-group-item list-group-item-danger">
                    Failed to load questions. Please try again later.
                </li>
            `;
        });
});