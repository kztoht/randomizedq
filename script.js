document.addEventListener("DOMContentLoaded", function () {
  const passagesArray = [   { id: 'Passage 1', text: "Yesterday, my family went to [the] park near our house. We brought [a] blanket and some food to enjoy a picnic. My sister saw [a] dog running around and wanted to play with it. We sat under [the] big tree and listened to birds singing. I opened [an] orange juice bottle, but it spilled on my pants. After lunch, we played [ ] soccer with other kids. It was [a] nice way to spend the afternoon. Before leaving, we took [a] photo together. I really liked [the] weather and the fresh air. It was [a] perfect day." },
  { id: 'Passage 2', text: "Every morning, I wake up at 6:30 and make simple breakfast. I usually have [an] egg, toast, and milk. After breakfast, I take [a] shower and get dressed for school. I leave home at 7:30 and walk to [the] station. On [the] train, I read [a] book or listen to music. When I arrive at school, I greet [the] guard at the gate and go to my classroom. Before [] class starts, I review [ ] notes from the day before. It's [a] quiet time that helps me focus. Then, [the] bell rings and the lessons begin." },
  { id: 'Passage 3', text: "Last Saturday, we had [a] cleaning day at school. Every student brought [a] cleaning tool like a broom or cloth. We cleaned [the] classroom, windows, and hallway. I helped wipe [the] desks and chairs. My friend picked up [ ] trash around the building. After cleaning, we rested in [the] gym. One teacher brought [a] big watermelon, and we shared it. It was [a] sweet treat after our hard work. Later, we talked with [the] principal about how to keep the school clean. I think it was [a] good way to learn responsibility." },
  { id: 'Passage 4', text: "During summer vacation, I joined [a] local tennis club. At first, I didn't have [a] racket, so I borrowed one. On the first day, [the] coach showed us how to hit the ball. We practiced on [the] court near the river. I met [a] boy who was really good. He gave me [a] few tips. Every morning, I went to [the] court to practice. I drank [ ] water and rested under a tree. After two weeks, I could play better. At [the] end of summer, we had [a] small match, and I won one game!" },
  { id: 'Passage 5', text: "My older sister started [a] part-time job at [a] bakery last month. She works three times [a] week after school. In the morning, she helps prepare [the] bread and clean [the] kitchen. In the afternoon, she sells cakes and talks to [the] customers. She wears [a] white apron and keeps [a] small notebook in her pocket. Sometimes, she brings [ ] home [a] piece of cake for me. I think working at [a] bakery is a great experience. She told me that she learns something new every day. Having a job is a good way to become more responsible and independent." },
  { id: 'Passage 6', text: "Our class went on [a] field trip to a science museum last Friday. We saw many interesting things like [a] robot that could talk and [a] model of the solar system. One room showed [the] history of airplanes. I liked [the] part where we could touch [a] real airplane engine. We had [ ] lunch in [the] museum cafeteria. My friend forgot to bring a lunch, so he bought a sandwich. After lunch, we watched [a] short movie about animals. At the end of the day, we took a group photo with our teacher. It was [a] great experience." },
  { id: 'Passage 7', text: "I love visiting my cousin's farm in [the] countryside. In the morning, we collect eggs from [the] chicken house. We also feed [the] cows and give them [ ] fresh hay. One time, I helped carry [a] basket full of vegetables. My cousin showed me [a] hidden path behind [the] barn. We followed it to find [a] small stream. We sat by [the] water and watched fish swim. Before dinner, we washed our hands with [a] bucket of water. I always feel relaxed on [the] farm because the air is so clean and fresh." },
  { id: 'Passage 8', text: "My little brother lost a toy car in the park yesterday. He was playing with [a] friend when he dropped it near [the] slide. We looked everywhere, but we couldn’t find [the] car. After searching for [a] while, we decided to ask [a] woman nearby. She said she saw [a] boy pick up [the] toy. We went to [the] park office and told the staff. Luckily, the toy was there. Someone had turned it in. We thanked [the] staff and went home. My brother was so happy to get his toy back. It was [a] small but lucky event." },
  { id: 'Passage 9', text: "Every Friday, my school has [a] reading hour. We bring [a] book from home or choose one from [the] library. I usually read stories about animals. Last week, I found an interesting book about [ ] elephants. I sat near [the] window and read quietly. My classmate read [a] comic book and laughed out loud. [The] teacher asked him to be quiet. After the reading time, we talked about our books. One student shared [a] story about [a] flying dog. I thought it was funny. Reading hour is a nice way to relax and learn new things. We wrote [a] short summary of the book before going home." },
  { id: 'Passage 10', text: "In spring, cherry blossoms bloom across [the] city. People go to parks to enjoy [the] flowers. My family brings [a] picnic mat and sits under [a] tree. We eat sandwiches and drink juice. My father takes [a] lot of photos. Last year, we saw [a] group of dancers performing near [the] river. The music was cheerful, and many people clapped. My sister dropped [a] snack, and birds came to eat it. It was funny! Before going home, we threw away [ ] trash and cleaned up. Spring is [a] season I always look forward to." },
  { id: 'Passage 11', text: "This week, our class is learning about animals that live in [the] ocean. We watched [a] video showing dolphins, whales, and sharks. The teacher gave us [a] worksheet to complete. I learned that whales breathe air through [a] hole on their back. One student asked [a] question about jellyfish. The teacher showed us a picture of [a] jellyfish glowing in the dark. It was beautiful! After class, we drew [ ] sea creatures for homework. I chose to draw [a] turtle swimming in [the] blue water. I want to learn more about animals in [the] future." },
  { id: 'Passage 12', text: "My uncle works at [a] zoo in the city. Every morning, he feeds [the] animals and checks their health. He told me that [a] elephant recently had a baby. Last Sunday, I visited the zoo with my family. We saw [a] baby elephant walking beside its mother. There was also [a] group of monkeys playing in [the] trees. My little sister dropped [a] cookie, and [a] bird quickly took it. We had [ ] lunch near [the] giraffe area. Before leaving, we visited [the] gift shop and bought postcards. It was [a] fun and exciting day for all of us." },
  { id: 'Passage 13', text: "My friend invited me to [a] birthday party last weekend. I brought [a] small gift and went to [the] party with my brother. When we arrived, people were already dancing. There was [a] big cake on [the] table. [The] candles on the cake were blue and white. We sang [a] birthday song together. Then, we played [a] game where we had to find [ ] hidden candies. I won a prize! After eating cake and snacks, we took [a] group photo. Before leaving, I said goodbye to my friend and thanked her." },
  { id: 'Passage 14', text: "Every Tuesday, my grandfather goes fishing by [the] lake. He wakes up early and packs [a] lunch. He also brings [a] chair and [a] fishing rod. At [the] lake, he finds [a] quiet spot under [a] tree. He waits for [a] long time, but sometimes he catches [a] big fish. He told me that fishing teaches patience. One day, I want to go with him and catch [a] fish too. He always returns home with [ ] smile on his face. I think it's [a] peaceful way to enjoy nature and spend time alone." },
  { id: 'Passage 15', text: "Our school started [a] music club this year. I joined because I like singing. Every Tuesday, we practice in [the] music room after class. Our teacher plays [the] piano while we sing songs together. Last week, we learned [a] new song for [a] school concert. I brought [a] bottle of water to stay hydrated. My friend plays [the] guitar and helps us keep the rhythm. We sometimes write [ ] original lyrics as a group. Before going home, we clean [the] room and put away [the] instruments. Being in the club is [a] fun way to enjoy music with friends." },
  { id: 'Passage 16', text: "My cousin lives on [a] small island. During the summer holidays, I visited him for [a] week. We went to [the] beach every day and swam in the sea. One afternoon, we found [a] starfish near [the] rocks. It was orange and soft. My cousin showed me how to fish using [a] simple rod. We caught [a] few small fish and let them go. At night, we looked at [the] stars and talked about space. I took [a] photo of the sky. Spending time on the island was [a] peaceful way to enjoy nature and family." },
  { id: 'Passage 17', text: "My father took me to [a] baseball game. We watched [the] game [ ] last weekend. We bought [] tickets and entered [the] stadium. The seats were close to [the] field, so we could see the players clearly. I ate [a] hot dog and drank a soda. Everyone cheered when our team scored. A man behind us dropped [a] bag of popcorn, and [a] bird came down to eat it. Between innings, we went to the shop to buy souvenirs. I got a small keychain. Watching [] live sports is a great way to spend time with family." },
  { id: 'Passage 18', text: "My school had [a] fire drill this morning. First, [the] alarm rang loudly in [the] hallway. We stood up quickly and walked in [a] line to [the] schoolyard. The teacher checked everyone’s name on [a] list. I forgot to bring my jacket, so I felt cold. A boy next to me shared [a] scarf with me. After five minutes, [the] principal told us it was just [a] drill. We returned to our classroom quietly. I think having drills is a good way to prepare for [ ] real emergencies." },
  { id: 'Passage 19', text: "Last night, there was [a] strong storm. I heard [the] wind blowing hard and saw [ ] lightning in [the] sky. My mother closed [the] windows and gave me [a] flashlight just in case. We stayed in [the] living room and played [a] card game to pass the time. My little brother was scared, so I told him [a] funny story. After an hour, the storm stopped. We looked outside and saw [a] fallen tree near the road. Bad weather can be a scary thing, but it’s also a reminder to stay safe and be ready." },
  { id: 'Passage 20', text: "Our class is planning [a] charity event next month. We will sell handmade goods and snacks to raise [] money. I’m in charge of making [a] poster. My friend will bake cookies and brownies. We’ll also set up [a] table in front of [the] library. The teacher gave us [a] schedule and asked us to follow it carefully. We wrote [a] list of things we need to prepare. At lunch, we had a meeting to talk about the plan. Helping others is [a] nice thing, and I’m happy to take part. I think [the] event will be [a] success." } 
                        ];

  const blankOptions = ["a", "an", "the"];
  let currentPassageObj;
  let userAnswers = [];
  let statsActive = true;

  let totalScore = parseInt(localStorage.getItem("totalScore")) || 0;
  let totalQuestions = parseInt(localStorage.getItem("totalQuestions")) || 0;

  function parsePassage(passageText) {
    const parts = passageText.split(/\[([^\]]*)\]/);
    let segments = [], answers = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        segments.push(parts[i]);
      } else {
        answers.push(parts[i].trim());
        segments.push(null);
      }
    }
    return { segments, answers };
  }

  function pickRandomPassage() {
    const idx = Math.floor(Math.random() * passagesArray.length);
    return parsePassage(passagesArray[idx].text);
  }

  function renderPassage(passageObj) {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    let html = "";
    let blankCount = 0;
    passageObj.segments.forEach(seg => {
      if (seg === null) {
        html += `<select data-index="${blankCount}">
                  <option value=""></option>`;
        blankOptions.forEach(opt => {
          html += `<option value="${opt}">${opt}</option>`;
        });
        html += `</select>`;
        blankCount++;
      } else {
        html += seg;
      }
    });
    container.innerHTML = `<p>${html}</p>`;
    userAnswers = new Array(passageObj.answers.length).fill("");
  }

  function initSession() {
    currentPassageObj = pickRandomPassage();
    renderPassage(currentPassageObj);
    document.getElementById("score-display").innerText = "";
    document.getElementById("next-btn").style.display = "none";
  }

  function checkAnswers() {
    const selects = document.querySelectorAll("#quiz-container select");
    selects.forEach(select => {
      const idx = select.getAttribute("data-index");
      userAnswers[idx] = select.value.trim();
    });

    let score = 0;
    currentPassageObj.answers.forEach((correct, idx) => {
      if ((userAnswers[idx] || "") === (correct.trim() || "")) {
        score++;
      }
    });

    document.getElementById("score-display").innerText =
      `Your Score: ${score} / ${currentPassageObj.answers.length}`;

    if (statsActive) {
  // Stats A
  const scoreA = parseInt(localStorage.getItem("scoreA")) || 0;
  const questionsA = parseInt(localStorage.getItem("questionsA")) || 0;
  localStorage.setItem("scoreA", scoreA + score);
  localStorage.setItem("questionsA", questionsA + currentPassageObj.answers.length);

  // Stats B
  const scoreB = parseInt(localStorage.getItem("scoreB")) || 0;
  const questionsB = parseInt(localStorage.getItem("questionsB")) || 0;
  localStorage.setItem("scoreB", scoreB + score);
  localStorage.setItem("questionsB", questionsB + currentPassageObj.answers.length);
}
  }

  document.getElementById("submit-btn").addEventListener("click", function () {
    checkAnswers();
    document.getElementById("next-btn").style.display = "inline-block";
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    initSession();
  });

  initSession();
});
