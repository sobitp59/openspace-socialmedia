import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    "_id": "3XHvLP1fg",
    "content": "Just finished a strategic Shogi match. It was a real brain-teaser!",
    "mediaURL": "",
    "likes": {
      "likeCount": 10,
      "likedBy": ["naruto_uzumaki", "sasuke_uchiha", "deidara_akatsuki", "hidan_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "6nImWvImxo",
        "username": "naruto_uzumaki",
        "text": "Great game, Shikamaru! You always impress with your tactics!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "j4pXk2zHw",
        "username": "konan_akatsuki",
        "text": "I knew you'd win! You're a genius, Shikamaru!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "shikamaru_nara",
    "createdAt": "2022-02-10T10:55:06+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "r9jWpTzKs",
    "content": "Cloud-watching on a lazy afternoon. Troublesome, but surprisingly relaxing.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690608108/openspace/posts/62a4b1c4e1b6d2aee23e0329e8bc9b03f9ab94abv2_00_wuk4px.jpg",
    "likes": {
      "likeCount": 5,
      "likedBy": ["hidan_akatsuki", "kisame_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "c8sHmXaBr",
        "username": "naruto_uzumaki",
        "text": "Wish I was there with some ramen!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "k7lJyNvTm",
        "username": "madara_uchiha",
        "text": "Looks peaceful. Enjoy your day, Shikamaru!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "shikamaru_nara",
    "createdAt": "2022-02-11T15:20:12+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "w2mLk1fGh",
    "content": "Another drag of a day at the office. Troublesome missions, as always.",
    "mediaURL": "",
    "likes": {
      "likeCount": 7,
      "likedBy": ["naruto_uzumaki", "sasuke_uchiha", "deidara_akatsuki", "hidan_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "v5gSnHtPz",
        "username": "itachi_akatsuki",
        "text": "Don't overwork yourself, Shikamaru! Take a break and relax.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "p6oIrNjOw",
        "username": "sasori_akatsuki",
        "text": "We'll treat you to some BBQ soon!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "shikamaru_nara",
    "createdAt": "2022-02-13T09:45:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "a4pLkT9Wo",
    "content": "Witness my power! The Infinite Tsukuyomi shall bring forth a new world.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690608392/openspace/posts/tsukayomi-madara_x1zchl.gif",
    "likes": {
      "likeCount": 15,
      "likedBy": ["obito_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "g5sNmRtIe",
        "username": "obito_akatsuki",
        "text": "Your vision is almost upon us, Madara-sama!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "e2jFkRpLw",
        "username": "deidara_akatsuki",
        "text": "Your power is unmatched. Together, we shall reshape the world!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "madara_uchiha",
    "createdAt": "2022-02-20T13:10:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "x9qTlP2Am",
    "content": "The Uchiha clan's power will reign supreme! Embrace the Sharingan!",
    "mediaURL": "",
    "likes": {
      "likeCount": 8,
      "likedBy": ["sasuke_uchiha", "itachi_akatsuki", "obito_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "z6vRpL3Tq",
        "username": "itachi_akatsuki",
        "text": "Brother, your ambition... it will only bring sorrow.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "y7nSmTgFw",
        "username": "sasuke_uchiha",
        "text": "I will achieve power on my own terms, not by following you.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "madara_uchiha",
    "createdAt": "2022-02-22T08:55:12+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "s5tPzVjWx",
    "content": "Training to become stronger every day. The path to revenge is long, but I won't falter.",
    "mediaURL": "",
    "likes": {
      "likeCount": 20,
      "likedBy": ["naruto_uzumaki", "kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "a3mFk2pLx",
        "username": "naruto_uzumaki",
        "text": "We'll get stronger together, Sasuke!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
    ],
    "username": "sasuke_uchiha",
    "createdAt": "2022-03-02T11:20:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j2oRkLpVi",
    "content": "Restless thoughts in the midst of battle. A chance encounter with an old friend...",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609679/openspace/posts/naruto-Sasuke-punch_xucl6q.jpg",
    "likes": {
      "likeCount": 25,
      "likedBy": ["naruto_uzumaki", "kakashi_hatake", "itachi_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "g4tJyNpAq",
        "username": "naruto_uzumaki",
        "text": "We'll find our own way, Sasuke. I won't give up on you!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "d7mHlOrpV",
        "username": "kakashi_hatake",
        "text": "Your journey is unique, Sasuke. Make the right choice.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "sasuke_uchiha",
    "createdAt": "2022-03-08T09:30:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "u2xNvT3Pq",
    "content": "Believe it! Training hard to become the Hokage!",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609981/openspace/posts/jiraiya-training_oi0p1e.gif",
    "likes": {
      "likeCount": 30,
      "likedBy": ["sasuke_uchiha", "kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "a3kMvQ1Bo",
        "username": "kakashi_hatake",
        "text": "You'll be the best Hokage, Naruto!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "b2lGpVjKn",
        "username": "sasuke_uchiha",
        "text": "Keep working hard, dobe. I won't lose to you.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "naruto_uzumaki",
    "createdAt": "2022-03-15T12:05:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j9mWpL2Tq",
    "content": "Ramen time! Nothing beats a good bowl of Ichiraku's ramen!",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610133/openspace/posts/033030e076d4bdf77d4e69750cb21918_j35sht.jpg",
    "likes": {
      "likeCount": 25,
      "likedBy": ["shikamaru_nara","kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "d5vGmH2Pq",
        "username": "shikamaru_nara",
        "text": "Such a drag... but I guess I'll join you.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "n2jHpXaBm",
        "username": "kakashi_hatake",
        "text": "I'll race you to Ichiraku's, Naruto!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "naruto_uzumaki",
    "createdAt": "2022-03-18T17:30:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "a2fHmL5Xi",
    "content": "Carrying on Rin's dream. The Moon's Eye Plan will bring everyone together.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610357/openspace/posts/d9463mj-2a90aef6-f933-45ef-ac5c-e3ec55849e7a.png_j3e9fx.png",
    "likes": {
      "likeCount": 12,
      "likedBy": ["kakashi_hatake", "naruto_uzumaki", "madara_uchiha"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "b4pGxV5Jm",
        "username": "kakashi_hatake",
        "text": "I miss you, Obito. Your dream is noble, but its methods...",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "n8mVzX3Wl",
        "username": "madara_uchiha",
        "text": "I believe in you, Obito. Please, don't lose yourself.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "obito_akatsuki",
    "createdAt": "2022-04-02T11:25:15+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "m3rHxJ4Kp",
    "content": "Struggling with the darkness within. My past haunts me, but I must move forward.",
    "mediaURL": "",
    "likes": {
      "likeCount": 18,
      "likedBy": ["kakashi_hatake", "naruto_uzumaki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "z9xNvT5Jq",
        "username": "kakashi_hatake",
        "text": "I wish I could have saved you, Obito...",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "i2vGpL5Jo",
        "username": "naruto_uzumaki",
        "text": "You still have a chance to change, Obito!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "obito_akatsuki",
    "createdAt": "2022-04-08T08:30:50+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "i2lFmQ8Pd",
    "content": "Carrying the weight of my past. The darkness within me fuels my determination.",
    "mediaURL": "",
    "likes": {
      "likeCount": 25,
      "likedBy": ["sasuke_uchiha", "kisame_akatsuki", "kakashi_hatake", "shisui_uchiha"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "l7nMzA9Hx",
        "username": "sasuke_uchiha",
        "text": "You left me with this burden, Itachi. I'll surpass you.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "n8mVzA2Hl",
        "username": "kisame_akatsuki",
        "text": "You're strong, Itachi. That's why I follow you.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "itachi_akatsuki",
    "createdAt": "2022-04-12T14:35:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n3kRpV6Hm",
    "content": "Protecting the village from the shadows. Sacrifices must be made for peace.",
    "mediaURL": "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/itachi_shadows_tzhzzh.jpg",
    "likes": {
      "likeCount": 30,
      "likedBy": ["shisui_uchiha", "kakashi_hatake", "naruto_uzumaki", "kisame_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "p4mXzB1Jo",
        "username": "shisui_uchiha",
        "text": "Your sacrifice will be remembered, Itachi. You did what was necessary.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "v8xNqL4Pi",
        "username": "naruto_uzumaki",
        "text": "I'll find a way to achieve peace without sacrificing my friends!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "itachi_akatsuki",
    "createdAt": "2022-04-15T12:20:12+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "p7nTzU1Lj",
    "content": "In search of true peace. Pain is a path to understanding.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611305/openspace/posts/E_qP3b_WYAUf95-_cjsfs4.jpg",
    "likes": {
      "likeCount": 35,
      "likedBy": ["konan_akatsuki", "itachi_akatsuki", "naruto_uzumaki", "kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "b8nRjU2Lo",
        "username": "konan_akatsuki",
        "text": "Your ideals are noble, Pain. Together, we'll bring a new dawn.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "h3bTzA1Jx",
        "username": "naruto_uzumaki",
        "text": "I understand your pain, but there must be another way!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "pain_akatsuki",
    "createdAt": "2022-04-25T15:30:00+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j2zRmU3Qa",
    "content": "Remembering the lessons of Jiraiya. Pain and loss have shaped me, but I will carry on.",
    "mediaURL": "",
    "likes": {
      "likeCount": 28,
      "likedBy": ["konan_akatsuki", "itachi_uchiha", "naruto_uzumaki", "kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "x5zVmQ2Lp",
        "username": "naruto_uzumaki",
        "text": "You're not alone, Pain. Let's find a way together.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
    ],
    "username": "pain_akatsuki",
    "createdAt": "2022-04-30T10:15:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "s4mWxP5Ki",
    "content": "Art is eternal. My puppets capture the essence of life, frozen in time.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690865745/openspace/posts/just-another-technically-immortal-shinobi-that-passed-way-v0-gvvjx408b4sa1_akfxer.jpg",
    "likes": {
      "likeCount": 20,
      "likedBy": ["deidara_akatsuki", "itachi_uchiha", "konan_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "k7xUzP3Qj",
        "username": "deidara_akatsuki",
        "text": "Art through explosions is more thrilling, Sasori.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "q5tLxJ2Wr",
        "username": "itachi_uchiha",
        "text": "Your art is a reflection of your soul, Sasori.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "sasori_akatsuki",
    "createdAt": "2022-05-05T12:40:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d6nQyJ2Wm",
    "content": "The strings of fate entangle us all. Embrace the puppet master's control.",
    "mediaURL": "",
    "likes": {
      "likeCount": 15,
      "likedBy": ["konan_akatsuki", "kakuzu_akatsuki", "itachi_uchiha", "deidara_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "i9xPzQ5Jk",
        "username": "konan_akatsuki",
        "text": "Your mastery over puppets is fascinating, Sasori.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "sasori_akatsuki",
    "createdAt": "2022-05-10T09:55:50+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "h5mYjZ9Po",
    "content": "Basking in the thrill of battle. My rituals grant immortality and endless carnage.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690866056/openspace/posts/hidan-naruto-shippuden_pchfdo.gif",
    "likes": {
      "likeCount": 18,
      "likedBy": ["konan_akatsuki", "deidara_akatsuki", "sasori_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "u2kQvW1Kx",
        "username": "kakuzu_akatsuki",
        "text": "Your rituals are useful, but messy, Hidan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "t9jQxK3Hm",
        "username": "konan_akatsuki",
        "text": "Your bloodlust is relentless, Hidan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "hidan_akatsuki",
    "createdAt": "2022-05-15T13:20:40+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d2pZyU4Km",
    "content": "Worshipping Jashin, the god of pain. My faith fuels my relentless fury.",
    "mediaURL": "",
    "likes": {
      "likeCount": 12,
      "likedBy": ["konan_akatsuki", "deidara_akatsuki", "sasori_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "j3nXuR2Qp",
        "username": "deidara_akatsuki",
        "text": "Faith in a god won't save you from my art, Hidan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
    ],
    "username": "hidan_akatsuki",
    "createdAt": "2022-05-20T11:10:15+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n8mXwK1Zo",
    "content": "Blood for blood. My scythe will harvest the souls of my enemies.",
    "mediaURL": "",
    "likes": {
      "likeCount": 20,
      "likedBy": ["konan_akatsuki", "deidara_akatsuki", "sasori_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "h9mVzK2Qn",
        "username": "konan_akatsuki",
        "text": "Your scythe holds the weight of many lives, Hidan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "hidan_akatsuki",
    "createdAt": "2022-05-25T14:55:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d9lUzK7Fm",
    "content": "Art is an explosion! The beauty of destruction is my ultimate creation.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690866572/openspace/posts/main-qimg-04b92afba0e290b76c994478cc5a45a3-lq_zgahj3.jpg",
    "likes": {
      "likeCount": 25,
      "likedBy": ["hidan_akatsuki", "sasori_akatsuki", "konan_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "l5mPzR9Wi",
        "username": "hidan_akatsuki",
        "text": "Explosions may be flashy, but my rituals are true art.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "k3jWzL1Pd",
        "username": "sasori_akatsuki",
        "text": "Your art might be temporary, but it has its charm.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "deidara_akatsuki",
    "createdAt": "2022-06-01T09:45:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n7kTzF6Dx",
    "content": "A masterpiece in the making. Watch as my art unfolds with a blast!",
    "mediaURL": "",
    "likes": {
      "likeCount": 18,
      "likedBy": ["hidan_akatsuki", "sasori_akatsuki","konan_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "m2zPxU5Kr",
        "username": "hidan_akatsuki",
        "text": "Impatient as always, Deidara.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
    ],
    "username": "deidara_akatsuki",
    "createdAt": "2022-06-05T12:30:10+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "k9lYxP8Vw",
    "content": "Folding paper into wings. Embracing peace as gently as a crane in flight.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690866953/openspace/posts/main-qimg-cfaf2543b77fadf7b412127a17a6a38d-lq_oipoqk.jpg",
    "likes": {
      "likeCount": 30,
      "likedBy": ["pain_akatsuki", "itachi_uchiha",  "deidara_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "z4xVzQ3Jp",
        "username": "pain_akatsuki",
        "text": "You are the symbol of peace, Konan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "n5tWlK2Kr",
        "username": "itachi_uchiha",
        "text": "Your paper artistry is as delicate as your spirit, Konan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "konan_akatsuki",
    "createdAt": "2022-06-10T14:15:50+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j8nTmL9Go",
    "content": "Whispers of the rain. My paper trails reflect the sorrows of war.",
    "mediaURL": "",
    "likes": {
      "likeCount": 25,
      "likedBy": ["pain_akatsuki", "itachi_uchiha",  "deidara_akatsuki"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "x3gVzF2Wr",
        "username": "pain_akatsuki",
        "text": "Your art tells the stories words cannot, Konan.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "b7wVqK3Px",
        "username": "kakuzu_akatsuki",
        "text": "Emotions may be a weakness, but your paper is intriguing.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "konan_akatsuki",
    "createdAt": "2022-06-15T10:50:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "p9jYmL1Fc",
    "content": "Reading the Icha Icha series.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690867170/openspace/posts/0e3d194ab5b76907b12901749366c4b8_odytxq.jpg",
    "likes": {
      "likeCount": 40,
      "likedBy": ["naruto_uzumaki", "shikamaru_nara"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "m7hQzK2Lo",
        "username": "naruto_uzumaki",
        "text": "Kakashi-sensei, shouldn't you be training instead?",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "i4tRlU8Fp",
        "username": "shikamaru_nara",
        "text": "Reading smut novels won't solve our missions, Kakashi.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "kakashi_hatake",
    "createdAt": "2022-07-01T15:20:45+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "t3bWmP2Yn",
    "content": "Sharing the wisdom of the White Fang. My father's legacy guides me every day.",
    "mediaURL": "",
    "likes": {
      "likeCount": 35,
      "likedBy": ["sasuke_uchiha", "naruto_uzumaki", "shikamaru_nara"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "v2hZrL5Kp",
        "username": "sasuke_uchiha",
        "text": "You're not like the other ninjas of your generation, Kakashi.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "j4lRzU9Wp",
        "username": "naruto_uzumaki",
        "text": "I'm going to surpass you, Kakashi-sensei!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "kakashi_hatake",
    "createdAt": "2022-07-05T11:40:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n2bLrX6Kp",
    "content": "Copying Obito's techniques. Memories of my past drive me forward.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690867328/openspace/posts/dei18by-50b0b533-8de7-453c-a9c3-5374e13693c0.png_uvgojt.png",
    "likes": {
      "likeCount": 45,
      "likedBy": [ "naruto_uzumaki", "sasuke_uchiha", "shikamaru_nara"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "b7wTzV2Lp",
        "username": "naruto_uzumaki",
        "text": "You've taught me the importance of never giving up, Kakashi-sensei.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "kakashi_hatake",
    "createdAt": "2022-07-10T09:15:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "p6kVjZ3Om",
    "content": "Gazing at the rising sun. New day, new possibilities.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690867486/openspace/posts/shisui_uchiha_render__ntob_shinobi_striker__by_maxiuchiha22_dehhx77-pre.png_ha4uio.png",
    "likes": {
      "likeCount": 50,
      "likedBy": ["itachi_uchiha", "naruto_uzumaki", "kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "x3qYmP9Ki",
        "username": "itachi_uchiha",
        "text": "Your optimism is infectious, Shisui.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "i9lVzK1Lp",
        "username": "naruto_uzumaki",
        "text": "I'll make every day count, just like you did.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "shisui_uchiha",
    "createdAt": "2022-08-01T08:30:15+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d2gMqL4Tn",
    "content": "Protecting the village. Duty and loyalty run deep in my veins.",
    "mediaURL": "",
    "likes": {
      "likeCount": 40,
      "likedBy": ["itachi_uchiha", "naruto_uzumaki","kakashi_hatake"],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "t6hQlF2Lr",
        "username": "itachi_uchiha",
        "text": "You're a pillar of strength for the village, Shisui.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "h7vGmW3No",
        "username": "naruto_uzumaki",
        "text": "I'll protect the village too, Shisui!",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "shisui_uchiha",
    "createdAt": "2022-08-05T14:10:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];
