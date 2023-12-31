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
      "likeCount": 2,
      "likedBy": [
        {
        "_id": "abCDeFgH-1",
        "firstName": "Pain",
        "lastName": "",
        "username": "pain_akatsuki",
        "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
    "website": "https://hiddenrainvillage.com/",
      },
      {
        "_id": "xyZ12PQr-s",
        "firstName": "Itachi",
        "lastName": "Uchiha",
        "username": "itachi_uchiha",
        "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
      }
      ],
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
    "createdAt": "2023-02-14T10:55:06+05:30",
    "updatedAt": "2023-08-15T12:00:00+05:30"
  },
  {
    "_id": "r9jWpTzKs",
    "content": "Cloud-watching on a lazy afternoon. Troublesome, but surprisingly relaxing.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690608108/openspace/posts/62a4b1c4e1b6d2aee23e0329e8bc9b03f9ab94abv2_00_wuk4px.jpg",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        }
        
      ],
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
    "createdAt": "2023-02-11T15:20:12+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "w2mLk1fGh",
    "content": "Another drag of a day at the office. Troublesome missions, as always.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        },
        {
          "_id": "jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
          "website": "https://artisticexplosions.net/",
        }
      ],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "v5gSnHtPz",
        "username": "itachi_uchiha",
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
    "createdAt": "2023-02-13T09:45:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "a4pLkT9Wo",
    "content": "Witness my power! The Infinite Tsukuyomi shall bring forth a new world.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690608392/openspace/posts/tsukayomi-madara_x1zchl.gif",
    "likes": {
      "likeCount": 4,
      "likedBy": [
        {
          "_id": "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        },
        {
          "_id": "jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
          "website": "https://artisticexplosions.net/",
        },
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
      ],
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
    "createdAt": "2023-02-20T13:10:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "x9qTlP2Am",
    "content": "The Uchiha clan's power will reign supreme! Embrace the Sharingan!",
    "mediaURL": "",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        }
      ],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "z6vRpL3Tq",
        "username": "itachi_uchiha",
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
    "createdAt": "2023-02-22T08:55:12+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "s5tPzVjWx",
    "content": "Training to become stronger every day. The path to revenge is long, but I won't falter.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":  "XYZabCDE-5",
          "firstName": "Madara",
          "lastName": "Uchiha",
          "username": "madara_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443909/openspace/users/3e3d2-clickwallpapers-madara-uchiha-img3-scaled-Cropped-a3f2024_u5uswi.jpg",
        }
      ],
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
    "createdAt": "2023-03-02T11:20:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j2oRkLpVi",
    "content": "Restless thoughts in the midst of battle. A chance encounter with an old friend...",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609679/openspace/posts/naruto-Sasuke-punch_xucl6q.jpg",
    "likes": {
      "likeCount": 5,
      "likedBy": [
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":  "XYZabCDE-5",
          "firstName": "Madara",
          "lastName": "Uchiha",
          "username": "madara_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443909/openspace/users/3e3d2-clickwallpapers-madara-uchiha-img3-scaled-Cropped-a3f2024_u5uswi.jpg",
        },
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        }
      ],
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
    "createdAt": "2023-03-08T09:30:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "u2xNvT3Pq",
    "content": "Believe it! Training hard to become the Hokage!",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609981/openspace/posts/jiraiya-training_oi0p1e.gif",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        }
      ],
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
    "createdAt": "2023-03-15T12:05:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j9mWpL2Tq",
    "content": "Ramen time! Nothing beats a good bowl of Ichiraku's ramen!",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610133/openspace/posts/033030e076d4bdf77d4e69750cb21918_j35sht.jpg",
    "likes": {
      "likeCount": 6,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":"FghIJKlm-6",
          "firstName": "Shikamaru",
          "lastName": "Nara",
          "username": "shikamaru_nara",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443798/openspace/users/shikamaru_nara_render__naruto_mobile__by_maxiuchiha22_dd1ptk5-fullview.png_sm9u48.png",
        },
        {
          "_id":"FshIJllm-2",
          "firstName": "Kakashi",
          "lastName": "Hatake",
          "username": "kakashi_hatake",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609489/openspace/users/kakashi-hatake-naruto_mzo7wa.jpg",
        },
        {
          "_id":"RshkJslm-9",
          "firstName": "Shisui",
          "lastName": "Uchiha",
          "username": "shisui_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610860/openspace/users/avatars-SyKsn0JofxgNmWX9-03bSbQ-t240x240_bbcukn.jpg",
        }
      ],
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
    "createdAt": "2023-03-18T17:30:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "a2fHmL5Xi",
    "content": "Carrying on Rin's dream. The Moon's Eye Plan will bring everyone together.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610357/openspace/posts/d9463mj-2a90aef6-f933-45ef-ac5c-e3ec55849e7a.png_j3e9fx.png",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id":"FghIJKlm-6",
          "firstName": "Shikamaru",
          "lastName": "Nara",
          "username": "shikamaru_nara",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443798/openspace/users/shikamaru_nara_render__naruto_mobile__by_maxiuchiha22_dd1ptk5-fullview.png_sm9u48.png",
        },
        {
          "_id":"FshIJllm-2",
          "firstName": "Kakashi",
          "lastName": "Hatake",
          "username": "kakashi_hatake",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609489/openspace/users/kakashi-hatake-naruto_mzo7wa.jpg",
        },
      ],
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
    "createdAt": "2023-04-02T11:25:15+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "m3rHxJ4Kp",
    "content": "Struggling with the darkness within. My past haunts me, but I must move forward.",
    "mediaURL": "",
    "likes": {
      "likeCount": 6,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":"FghIJKlm-6",
          "firstName": "Shikamaru",
          "lastName": "Nara",
          "username": "shikamaru_nara",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443798/openspace/users/shikamaru_nara_render__naruto_mobile__by_maxiuchiha22_dd1ptk5-fullview.png_sm9u48.png",
        },
        {
          "_id":"FshIJllm-2",
          "firstName": "Kakashi",
          "lastName": "Hatake",
          "username": "kakashi_hatake",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609489/openspace/users/kakashi-hatake-naruto_mzo7wa.jpg",
        },
        {
          "_id":"RshkJslm-9",
          "firstName": "Shisui",
          "lastName": "Uchiha",
          "username": "shisui_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610860/openspace/users/avatars-SyKsn0JofxgNmWX9-03bSbQ-t240x240_bbcukn.jpg",
        }
      ],
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
    "createdAt": "2023-04-08T08:30:50+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "i2lFmQ8Pd",
    "content": "Carrying the weight of my past. The darkness within me fuels my determination.",
    "mediaURL": "",
    "likes": {
      "likeCount": 5,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":"FghIJKlm-6",
          "firstName": "Shikamaru",
          "lastName": "Nara",
          "username": "shikamaru_nara",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443798/openspace/users/shikamaru_nara_render__naruto_mobile__by_maxiuchiha22_dd1ptk5-fullview.png_sm9u48.png",
        },
        {
          "_id":"FshIJllm-2",
          "firstName": "Kakashi",
          "lastName": "Hatake",
          "username": "kakashi_hatake",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609489/openspace/users/kakashi-hatake-naruto_mzo7wa.jpg",
        },
      ],
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
    "username": "itachi_uchiha",
    "createdAt": "2023-04-12T14:35:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n3kRpV6Hm",
    "content": "Protecting the village from the shadows. Sacrifices must be made for peace.",
    "mediaURL": "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/itachi_shadows_tzhzzh.jpg",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":"FshIJllm-2",
          "firstName": "Kakashi",
          "lastName": "Hatake",
          "username": "kakashi_hatake",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690609489/openspace/users/kakashi-hatake-naruto_mzo7wa.jpg",
        },
      ],
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
    "username": "itachi_uchiha",
    "createdAt": "2023-04-15T12:20:12+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "p7nTzU1Lj",
    "content": "In search of true peace. Pain is a path to understanding.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611305/openspace/posts/E_qP3b_WYAUf95-_cjsfs4.jpg",
    "likes": {
      "likeCount": 4,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "pQRsTUvw-7",
          "firstName": "Sasuke",
          "lastName": "Uchiha",
          "username": "sasuke_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
        },
        {
          "_id":"RshkJslm-9",
          "firstName": "Shisui",
          "lastName": "Uchiha",
          "username": "shisui_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690610860/openspace/users/avatars-SyKsn0JofxgNmWX9-03bSbQ-t240x240_bbcukn.jpg",
        },
      ],
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
    "createdAt": "2023-04-25T15:30:00+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j2zRmU3Qa",
    "content": "Remembering the lessons of Jiraiya. Pain and loss have shaped me, but I will carry on.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
        },
        {
          "_id":  "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        },

      ],
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
    "createdAt": "2023-04-30T10:15:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "s4mWxP5Ki",
    "content": "Art is eternal. My puppets capture the essence of life, frozen in time.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690865745/openspace/posts/just-another-technically-immortal-shinobi-that-passed-way-v0-gvvjx408b4sa1_akfxer.jpg",
    "likes": {
      "likeCount": 1,
      "likedBy": [{
        "_id":  "mnoPqrST-4",
        "firstName": "Kisame",
        "lastName": "Hoshigaki",
        "username": "kisame_akatsuki",
        "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
      },],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "jKLMnOpQ-9",
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
    "createdAt": "2023-05-05T12:40:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d6nQyJ2Wm",
    "content": "The strings of fate entangle us all. Embrace the puppet master's control.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id":  "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        },
        {
          "_id": "uvwXYzAB-3",
          "firstName": "Sasori",
          "lastName": "",
          "username": "sasori_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
        },
      ],
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
    "createdAt": "2023-05-10T09:55:50+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "h5mYjZ9Po",
    "content": "Basking in the thrill of battle. My rituals grant immortality and endless carnage.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690866056/openspace/posts/hidan-naruto-shippuden_pchfdo.gif",
    "likes": {
      "likeCount": 4,
      "likedBy": [
        {
          "_id": "uvwXYzAB-3",
          "firstName": "Sasori",
          "lastName": "",
          "username": "sasori_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
        },
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
      ],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "u2kQvW1Kx",
        "username": "madara_uchiha",
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
    "createdAt": "2023-05-15T13:20:40+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d2pZyU4Km",
    "content": "Worshipping Jashin, the god of pain. My faith fuels my relentless fury.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
      ],
      "dislikedBy": [

      ]
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
    "createdAt": "2023-05-20T11:10:15+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n8mXwK1Zo",
    "content": "Blood for blood. My scythe will harvest the souls of my enemies.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
      ],
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
    "createdAt": "2023-05-25T14:55:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d9lUzK7Fm",
    "content": "Art is an explosion! The beauty of destruction is my ultimate creation.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690866572/openspace/posts/main-qimg-04b92afba0e290b76c994478cc5a45a3-lq_zgahj3.jpg",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
      ],
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
    "createdAt": "2023-06-01T09:45:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n7kTzF6Dx",
    "content": "A masterpiece in the making. Watch as my art unfolds with a blast!",
    "mediaURL": "",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id": "uvwXYzAB-3",
          "firstName": "Sasori",
          "lastName": "",
          "username": "sasori_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
        },
      ],
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
    "createdAt": "2023-06-05T12:30:10+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "k9lYxP8Vw",
    "content": "Folding paper into wings. Embracing peace as gently as a crane in flight.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690866953/openspace/posts/main-qimg-cfaf2543b77fadf7b412127a17a6a38d-lq_oipoqk.jpg",
    "likes": {
      "likeCount": 4,
      "likedBy": [
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id": "uvwXYzAB-3",
          "firstName": "Sasori",
          "lastName": "",
          "username": "sasori_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
        },
        {
          "_id":  "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        },
      ],
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
    "createdAt": "2023-06-10T14:15:50+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "j8nTmL9Go",
    "content": "Whispers of the rain. My paper trails reflect the sorrows of war.",
    "mediaURL": "",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id": "uvwXYzAB-3",
          "firstName": "Sasori",
          "lastName": "",
          "username": "sasori_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
        },
      ],
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
    "createdAt": "2023-06-15T10:50:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "p9jYmL1Fc",
    "content": "Reading the Icha Icha series.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690867170/openspace/posts/0e3d194ab5b76907b12901749366c4b8_odytxq.jpg",
    "likes": {
      "likeCount": 4,
      "likedBy": [
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id": "uvwXYzAB-3",
          "firstName": "Sasori",
          "lastName": "",
          "username": "sasori_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
        },
        {
          "_id":  "mnoPqrST-4",
          "firstName": "Kisame",
          "lastName": "Hoshigaki",
          "username": "kisame_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
        },
      ],
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
    "createdAt": "2023-07-01T15:20:45+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "t3bWmP2Yn",
    "content": "Sharing the wisdom of the White Fang. My father's legacy guides me every day.",
    "mediaURL": "",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
      ],
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
    "createdAt": "2023-07-05T11:40:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n2bLrX6Kp",
    "content": "Copying Obito's techniques. Memories of my past drive me forward.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690867328/openspace/posts/dei18by-50b0b533-8de7-453c-a9c3-5374e13693c0.png_uvgojt.png",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "HijKLmNo-2",
          "firstName": "Naruto",
          "lastName": "Uzumaki",
          "username": "naruto_uzumaki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444109/openspace/users/naruto-b9f92c5_gee9ga.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id": "56cDEfgH-i",
          "firstName": "Hidan",
          "lastName": "",
          "username": "hidan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
        },
      ],
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
    "createdAt": "2023-07-10T09:15:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "p6kVjZ3Om",
    "content": "Gazing at the rising sun. New day, new possibilities.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690867486/openspace/posts/shisui_uchiha_render__ntob_shinobi_striker__by_maxiuchiha22_dehhx77-pre.png_ha4uio.png",
    "likes": {
      "likeCount": 2,
      "likedBy": [
        {
          "_id": "HijKLmNo-2",
          "firstName": "Naruto",
          "lastName": "Uzumaki",
          "username": "naruto_uzumaki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444109/openspace/users/naruto-b9f92c5_gee9ga.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
      ],
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
    "createdAt": "2023-08-01T08:30:15+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "d2gMqL4Tn",
    "content": "Protecting the village. Duty and loyalty run deep in my veins.",
    "mediaURL": "",
    "likes": {
      "likeCount": 4,
      "likedBy": [
        {
          "_id": "HijKLmNo-2",
          "firstName": "Naruto",
          "lastName": "Uzumaki",
          "username": "naruto_uzumaki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444109/openspace/users/naruto-b9f92c5_gee9ga.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id":  "0RstUVwx-y",
          "firstName": "Konan",
          "lastName": "",
          "username": "konan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443105/openspace/users/23bc7-16587437244924_uaijeo.jpg",
        },
        {
          "_id": "zABcdEFg-8",
          "firstName": "Obito",
          "lastName": "Uchiha",
          "username": "obito_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442546/openspace/users/IMAGEN-GOOGLE_bcyoxb.jpg",
        },
      ],
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
    "createdAt": "2023-08-05T14:10:30+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "k3xPtL7Jm",
    "content": "Diving into the abyss. The power of the Seven Swordsmen flows through me.",
    "mediaURL": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690959611/d99176bf-d060-458d-ac2d-79c20279325f_itmg51.jpg",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
        {
          "_id":  "0RstUVwx-y",
          "firstName": "Konan",
          "lastName": "",
          "username": "konan_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443105/openspace/users/23bc7-16587437244924_uaijeo.jpg",
        },
        {
          "_id": "zABcdEFg-8",
          "firstName": "Obito",
          "lastName": "Uchiha",
          "username": "obito_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442546/openspace/users/IMAGEN-GOOGLE_bcyoxb.jpg",
        },
      ],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "x5gXmQ9Ln",
        "username": "itachi_uchiha",
        "text": "Together, we wield the strength of the Mist Village.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "p8jClU1Tm",
        "username": "pain_akatsuki",
        "text": "Your loyalty to Akatsuki and your comrades is commendable, Kisame.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      }
    ],
    "username": "kisame_akatsuki",
    "createdAt": "2023-08-10T12:05:20+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  },
  {
    "_id": "n5gWtF2Xp",
    "content": "Mystery of the deep ocean. My true identity concealed within Samehada.",
    "mediaURL": "",
    "likes": {
      "likeCount": 3,
      "likedBy": [
        {
          "_id": "abCDeFgH-1",
          "firstName": "Pain",
          "lastName": "",
          "username": "pain_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690611389/openspace/users/a3234-16859133338394-1920_x4ljun.jpg",
      "website": "https://hiddenrainvillage.com/",
        },
        {
          "_id": "xyZ12PQr-s",
          "firstName": "Itachi",
          "lastName": "Uchiha",
          "username": "itachi_uchiha",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
        },
        {
          "_id":"jKLMnOpQ-9",
          "firstName": "Deidara",
          "lastName": "",
          "username": "deidara_akatsuki",
          "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
        },
      ],
      "dislikedBy": []
    },
    "comments": [
      {
        "_id": "g2pQtZ1Hn",
        "username": "pain_akatsuki",
        "text": "Your association with Samehada adds to your enigma, Kisame.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      {
        "_id": "i9mGzK5Fp",
        "username": "sasori_akatsuki",
        "text": "Your secrets make you a valuable asset to Akatsuki.",
        "votes": {
          "upvotedBy": [],
          "downvotedBy": []
        }
      },
      
    ],
    "username": "kisame_akatsuki",
    "createdAt": "2023-08-15T09:30:45+05:30",
    "updatedAt": "2023-07-27T12:00:00+05:30"
  }
];
