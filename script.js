function toggleAnswer(id) {
    const answer = document.getElementById("answer" + id);
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  }
  