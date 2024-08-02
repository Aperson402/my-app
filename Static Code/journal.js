 const prompts = [
    "Describe your family's journey to where you are today. How has it shaped your values and goals?",
    "What are some challenges you face as a first-generation student? How do you overcome them?",
    "Reflect on a time when you felt proud of your cultural heritage. What happened, and how did it affect you?",
    "Write about a mentor or role model who has influenced your academic or personal growth.",
    "What are your long-term goals? How does being a first-generation student impact your aspirations?",
    "Describe a moment when you felt like you didn't belong. How did you handle it?",
    "How do you balance the expectations from your family with your personal goals?",
    "What motivates you to succeed academically?",
    "Reflect on a time when you felt discouraged. How did you find the strength to keep going?",
    "Write about a cultural tradition or practice that is important to you and your family.",
    "What does success mean to you? Has your definition changed over time?",
    "Describe a time when you felt grateful for an opportunity. How did you make the most of it?",
    "What skills or qualities do you believe are essential for navigating college as a first-generation student?",
    "How do you handle stress or pressure related to academics or family expectations?",
    "Write about a time when you felt supported by your family, friends, or community.",
    "What are some misconceptions people have about first-generation students? How do you respond to them?",
    "How has your background influenced your choice of study or career path?",
    "Reflect on a book, movie, or song that resonates with your experience as a first-generation student.",
    "What do you wish people understood about your journey as a first-generation student?",
    "Write about a goal you've achieved that you're particularly proud of. How did you accomplish it?",
    "Describe a time when you had to advocate for yourself or your needs.",
    "How do you stay connected to your cultural roots while pursuing your education?",
    "What are some ways you give back to your community or help others?",
    "Reflect on a moment when you had to make a difficult decision. What did you learn from it?",
    "What are some traditions or values from your culture that you want to pass on to future generations?",
    "How do you navigate feelings of guilt or pressure related to your family's expectations?",
    "Write about a time when you felt like you made a significant impact on someone else's life.",
    "What are some strategies you use to stay motivated and focused on your goals?",
    "Reflect on a time when you had to overcome a language or cultural barrier.",
    "What are you most excited about for your future? How do you plan to achieve your dreams?"
    ];

    function getRandomPrompt() {
      const randomIndex = Math.floor(Math.random() * prompts.length);
      return prompts[randomIndex];
    }

    function saveEntry() {
      const promptText = document.getElementById('prompt').innerText;
      const entryText = document.getElementById('entry').value;

      if (entryText.trim() === "") {
        alert("Please write something before saving.");
        return;
      }

      const blob = new Blob([`Prompt: ${promptText}\n\nEntry:\n${entryText}`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'journal-entry.txt';
      a.click();
      URL.revokeObjectURL(url);

      alert("Entry saved successfully!");
      document.getElementById('entry').value = ""; 
      document.getElementById('prompt').innerText = getRandomPrompt();
    }

    document.getElementById("prompt").innerText = getRandomPrompt();
