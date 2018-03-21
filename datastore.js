const quizSTORE = [
  {Question: " Who was the first woman to score a perfect 10.0 at the Olympics?",
  rightChoice: "Nadia Comaneci",
  wrongChoices: ["Mary Lou Retton", "Carly Patterson", "Simona Amanar"],
  rightFeedback: "That's right! Nadia Comaneci scored the first 10.0 at the Olympics at the age of 14.",
  wrongFeedback: "Nadia Comaneci might have gotten the first perfect score at the Olympics, but it doesn't look like you will. Too bad."
  },
  
  {Question: "What score is needed to advance from level 8 to 9 in women's junior olympics?",
    rightChoice: "34.0",
    wrongChoices: ["31.0", "36.0", "28.0"],
    rightFeedback: "You sure stuck that landing! 34.0 is the required score to advance to level 9 and again to reach level 10.",
    wrongFeedback: "Up until level 8, the required score to advance past a level is a 31.0. For levels 8 and 9, the requirement is a 34.0 all-around."
  },
  
  {Question: " In which division of USAG do all gymnasts compete with the same bar settings?",
    rightChoice: "Elite",
    wrongChoices: ["JO (Junior Olympics)", "Xcel", "College"],
    rightFeedback: "Great job! Elite gymnasts tend to be on the small side because the bar settings are constant (and not very far apart) for all gymnasts",
    wrongFeedback: "You missed your handstand! Elite gymnastics is the only division which requires certain settings for bars and vault. That's why most elite gymnasts are petite. Taller gymnasts perform better when the bars are set farther apart."
  },
  
  {Question: " A transfer from low to high out of a toe-on circle to gain power is called:",
    rightChoice: "A Maloney",
    wrongChoices: ["A Ray", "A Shaposh", "A Tkatchev"],
    rightFeedback: "You are incredible! The answer is a Maloney. Are you a gymnast?",
    wrongFeedback: "Release moves on the bars ard hard to keep straight! They are named for the gymnast who first performed them. This one is called a Maloney."
  },
  
  {Question: " How long is beam warmup in level 9?",
    rightChoice: "2 minutes per person",
    wrongChoices: ["10 minutes", "One touch", "1 minutes per person"],
    rightFeedback: "Incredible! Are you a judge? A gymnast? Or just a parent who has timed beam warmups at 562 meets?",
    wrongFeedback: "This is a tricky one! Kind of like learning that first kip. The correct answer is 2 minutes per person. Timing is always determined by the number of gymnasts, but the amount of time varies by level."
  },
  
  {Question: " What is the highest level in the Xcel program?",
    rightChoice: "Diamond",
    wrongChoices: ["Gold", "Titanium", "Platinum"],
    rightFeedback: "Fantastic! The highest level is Diamond!",
    wrongFeedback: "Darn it, you missed your series. The correct answer is Diamond."
  },
  
  {Question: "When all gymnasts are required to compete identicle routines and use the same floor music, it is called:",
    rightChoice: "compulsory",
    wrongChoices: ["mandatory", "requisite", "boring"],
    rightFeedback: "Yes! They are the compulsory levels and most parents are thrilled to get past them!",
    wrongFeedback: 'While these routines are both boring and mandatory, the correct term for these levels is "compulsory" gymnastics'
  },
  
  {Question: "A double-full yurchenko in women's level 10 has what start value?",
    rightChoice: "10.1",
    wrongChoices: ["10.0", "9.9", "9.7"],
    rightFeedback: "You are just too smart for this quiz. It does have a 10.1 start value!",
    wrongFeedback: "This is kind of a trick question. Level 10 vault is the only time a JO women's event can start higher than a 10.0. There are a few extremely difficult vaults that earn a 0.1 bonus"
  },
  
  {Question: "Which events are competed in women's artistic gymnastics?", 
    rightChoice: "Vault, Bars, Beam, and Floor",
    wrongChoices: ["Rings, Parallel Bars, Floor, Vault and Beam", "Floor, Rings, Vault, and Pommel Horse", "Rings, Floor, Beam and Bars"],
    rightFeedback: "Fantastic job. The four women's artist events are: Vault, Bars, Beam and Floor.",
    wrongFeedback: "Oops. Looks like you came up short on the landing. The events are: Vault, Bars, Beam and Floor."
  },
  
  {Question: "What is the first required level of the women's JO program?",
    rightChoice: "Level 4",
    wrongChoices: ["Level 5", "Level 3", "Level 7"],
    rightFeedback: "You are absolutely right! USAG requires gymnasts to compete starting at Level 4.",
    wrongFeedback: "Gymnasts are required to compete Level 4 and up. However, a few years ago Level 5 was the first required level and currently level 6 can be skipped without testing out."  
  }
  ];

const RESULTS = [
    "<p>You aren't just an armchair gymnastics fan, you really know your stuff. Keep up the good work!</p>",
    "<p>You are a pretty hard-core gymnastics fan. If you want to improve your score, try playing again or check out the USAG website linked below</p>",
    "<p>You still did better than a lot of the population, but if you want to improve your score, try checking out the USAG website linked below or maybe go watch some local meets!</p>",
    "<p>If you want to learn more about gymnastics, try attending a local meet, speaking with gymnasts or their parents and visiting the USAG web site, linked below</p>"];